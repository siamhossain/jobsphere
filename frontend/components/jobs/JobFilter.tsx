"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiBriefcase } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

type Job = {
  _id: string;
  category: string;
};

const name = "JobFilter";

export default function JobFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");

  const [categories, setCategories] = useState<string[]>([]);

  // Fetch categories dynamically
  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`, {
        cache: "no-store",
      });

      const result = await res.json();

      const jobs: Job[] = result.data;

      const uniqueCategories = [...new Set(jobs.map((job) => job.category))];

      setCategories(uniqueCategories);
    }

    fetchCategories();
  }, []);

  const handleFilter = () => {
    const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (category) params.append("category", category);
    if (location) params.append("location", location);

    router.push(`/jobs?${params.toString()}`);
  };

  const handleReset = () => {
    setSearch("");
    setCategory("");
    setLocation("");
    router.push("/jobs");
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <h3 className="text-2xl font-medium mb-6 text-gray-900 text-left">
        Search Your Job
      </h3>
      <div className="relative mb-4">
        <label className="block text-sm text-gray-700 mb-2">Job Title</label>

        <div className="absolute left-0 flex items-center pointer-events-none p-[16px]">
          {/* Search Icon */}
          <IoSearch size={20} className="text-gray-400" />
        </div>

        {/* Search input*/}
        <input
          type="text"
          placeholder="e.g. Software Engineer"
          className="w-full text-base font-normal text-gray-400 placeholder-gray-400 leading-relaxed pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="relative mb-4">
        <label className="block text-sm text-gray-700 mb-2">Location</label>
        <div className="absolute left-0 flex items-center pointer-events-none p-[16px]">
          <IoLocationOutline size={20} className="text-gray-400" />
        </div>

        {/* Location */}
        <input
          type="text"
          placeholder="City, state, or remote"
          className="w-full text-base font-normal text-gray-400 placeholder-gray-400 pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* Dynamic Category */}
      <div className="relative mb-4">
        <label className="block text-sm text-gray-700 mb-2">Category</label>

        <div className="absolute left-0 flex items-center pointer-events-none p-[16px]">
          <FiBriefcase size={18} className="text-gray-400" />
        </div>

        <select
          className="w-full h-[50px] pl-12 pr-4 py-3 text-base font-normal text-gray-400 appearance-none border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>

          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Custom arrow */}
        <div className="pointer-events-none absolute top-11 right-3 flex items-center">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 w-full md:w-auto">
        <button
          onClick={handleFilter}
          className="w-full text-base font-medium leading-relaxed text-white py-4 rounded-xl transition-all shadow-lg hover:shadow-xl bg-[linear-gradient(to_right,rgb(79,70,229),rgb(147,51,234))]"
        >
          Search my job
        </button>

        {/* <button
          onClick={handleReset}
          className="border px-4 py-2 rounded w-full"
        >
          Reset
        </button> */}
      </div>
    </div>
  );
}
