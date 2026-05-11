"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Job } from "@/types/job";

type CategoryData = {
  name: string;
  jobCount: number;
};

export default function CategoryCards() {
  const router = useRouter();
  const [categories, setCategories] = useState<CategoryData[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`, {
        cache: "no-store",
      });

      const result = await res.json();
      const jobs: Job[] = result.data;

      // Count jobs per category
      const categoryMap: Record<string, number> = {};
      jobs.forEach((job) => {
        categoryMap[job.category] = (categoryMap[job.category] || 0) + 1;
      });

      const categoryData: CategoryData[] = Object.entries(categoryMap).map(
        ([name, jobCount]) => ({ name, jobCount }),
      );

      setCategories(categoryData);
    }

    fetchCategories();
  }, []);

  const handleClick = (categoryName: string) => {
    // Navigate to jobs page filtered by this category
    router.push(`/jobs?category=${encodeURIComponent(categoryName)}`);
  };

  const getIconPath = (categoryName: string) => {
    const map: Record<string, string> = {
      Design: "/design.svg",
      Development: "development.svg",
      Marketing: "/marketing.svg",
    };
    return map[categoryName] || "/default.svg";
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((cat) => (
        <div
          key={cat.name}
          onClick={() => handleClick(cat.name)}
          className="bg-white p-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
        >
          {/* icon */}
          <div className="bg-[rgba(79,70,229,0.082)] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Image
              src={getIconPath(cat.name)}
              alt={`${cat.name} icon`}
              width={24}
              height={24}
              className="object-contain"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">{cat.name}</h3>

          <p className="text-sm text-gray-450 text-body">
            {`${cat.jobCount}`}+ open positions
            <Image
              src="/arrow-right.svg"
              alt="Arrow Right Icon"
              width={16}
              height={16}
              className="inline ml-2"
            />
          </p>
        </div>
      ))}
    </div>
  );
}
