"use client";

import { useState } from "react";
import Link from "next/link";
import { registerUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function RegisterPage() {
  const router = useRouter();
  const { updateUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  const [loading, setLoading] = useState(false);

  // ---------------- VALIDATION ----------------
  const validate = (field: string, value: string) => {
    let error = "";

    if (field === "name") {
      if (!value) error = "Name is required";
    }

    if (field === "email") {
      if (!value) error = "Email is required";
      else if (!value.includes("@")) error = "Invalid email";
    }

    if (field === "password") {
      if (!value) error = "Password is required";
      else if (value.length < 6) error = "Min 6 characters";
    }

    return error;
  };

  // ---------------- REGISTER ----------------
  const handleRegister = async () => {
    const nameErr = validate("name", form.name);
    const emailErr = validate("email", form.email);
    const passErr = validate("password", form.password);

    setErrors({
      name: nameErr,
      email: emailErr,
      password: passErr,
    });

    if (nameErr || emailErr || passErr) return;

    try {
      setLoading(true);

      const user = await registerUser(form);
      updateUser(); // UPDATE CONTEXT

      if (user.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch (err: any) {
      setErrors((prev) => ({
        ...prev,
        email: err.message,
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account 🚀
        </h2>

        {/* NAME */}
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });

            if (touched.name) {
              setErrors((prev) => ({
                ...prev,
                name: validate("name", e.target.value),
              }));
            }
          }}
          onBlur={() => setTouched({ ...touched, name: true })}
          className={`w-full mb-2 px-4 py-2 border rounded-lg
            ${
              errors.name && touched.name ? "border-red-500" : "border-gray-300"
            }`}
        />
        {errors.name && touched.name && (
          <p className="text-red-500 text-sm mb-2">{errors.name}</p>
        )}

        {/* EMAIL */}
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });

            if (touched.email) {
              setErrors((prev) => ({
                ...prev,
                email: validate("email", e.target.value),
              }));
            }
          }}
          onBlur={() => setTouched({ ...touched, email: true })}
          className={`w-full mb-2 px-4 py-2 border rounded-lg
            ${
              errors.email && touched.email
                ? "border-red-500"
                : "border-gray-300"
            }`}
        />
        {errors.email && touched.email && (
          <p className="text-red-500 text-sm mb-2">{errors.email}</p>
        )}

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });

            if (touched.password) {
              setErrors((prev) => ({
                ...prev,
                password: validate("password", e.target.value),
              }));
            }
          }}
          onBlur={() => setTouched({ ...touched, password: true })}
          className={`w-full mb-2 px-4 py-2 border rounded-lg
            ${
              errors.password && touched.password
                ? "border-red-500"
                : "border-gray-300"
            }`}
        />
        {errors.password && touched.password && (
          <p className="text-red-500 text-sm mb-4">{errors.password}</p>
        )}

        {/* BUTTON */}
        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded-lg"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {/* LINK */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
