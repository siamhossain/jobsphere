"use client";

import { useEffect, useState } from "react";
import AdminForm from "@/components/jobs/AdminForm";
import AdminJobList from "@/components/jobs/AdminJobList";
import { getJobs } from "@/lib/api";
import { Job } from "@/types/job";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function AdminPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadJobs() {
    try {
      const data = await getJobs();
      setJobs(data);
    } catch (error) {
      console.error("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadJobs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>

        {/* Loading text */}
        <p className="text-primary text-lg font-semibold">Loading jobs...</p>
      </div>
    );
  }

  return (
    <ProtectedRoute adminOnly={true}>
      <div className="max-w-5xl mx-auto py-10 pt-[110px]">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Admin Panel
          <span className="block w-20 h-1 bg-primary mx-auto mt-4"></span>
        </h1>

        {/* Create Job */}
        <AdminForm refreshJobs={loadJobs} />

        {/* Job List, edit & Delete */}
        <AdminJobList jobs={jobs} setJobs={setJobs} />
      </div>
    </ProtectedRoute>
  );
}
