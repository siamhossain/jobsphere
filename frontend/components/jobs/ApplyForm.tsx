"use client";

import { useState, useEffect } from "react";
import { applyToJob } from "@/lib/api";
import { isValidEmail, isValidURL } from "@/lib/validators";
import { useRouter } from "next/navigation";

export default function ApplyForm({ jobId }: { jobId: string }) {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    resume_link: "",
    cover_note: "",
  });

  const [token, setToken] = useState<string | null>(null);

  // get token safely (client side)
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const normalizeURL = (url: string) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return "https://" + url;
    }
    return url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Not logged in → redirect
    if (!token) {
      router.push(`/login?redirect=/jobs/${jobId}`);
      return;
    }

    const formattedURL = normalizeURL(form.resume_link);

    // validations
    if (!form.name || !form.email || !form.resume_link) {
      alert("Please fill all required fields");
      return;
    }

    if (!isValidEmail(form.email)) {
      alert("Invalid email");
      return;
    }

    if (!isValidURL(formattedURL)) {
      alert("Invalid resume URL (use https://...)");
      return;
    }

    try {
      await applyToJob({
        ...form,
        resume_link: formattedURL,
        job_id: jobId,
      });

      alert("Application submitted");
    } catch (error: any) {
      alert(error.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <input
        type="text"
        placeholder="Name"
        className="w-full border p-2"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="url"
        placeholder="https://your-resume-link.com"
        className="w-full border p-2"
        onChange={(e) => setForm({ ...form, resume_link: e.target.value })}
      />

      <textarea
        placeholder="Cover Note"
        className="w-full border p-2"
        onChange={(e) => setForm({ ...form, cover_note: e.target.value })}
      />

      {/* submit Button */}
      <button
        type="submit"
        onClick={() => {
          if (!token) {
            router.push(`/login?redirect=/jobs/${jobId}`);
          }
        }}
        className={`px-6 py-2 rounded text-white ${
          token ? "bg-primary cursor-pointer" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {token ? "Apply Now" : "Login to Apply"}
      </button>
    </form>
  );
}
