// "use client";

import JobFilter from "../jobs/JobFilter";
import { FaStar } from "react-icons/fa";
import Counter from "../counter/Counter";

export default function Hero() {
  return (
    <section className="hero-section pt-[150px] pb-[100px] bg-[linear-gradient(to_right,rgb(79,70,229),rgb(147,51,234),rgb(219,39,119))]">
      <div className="container-main grid md:grid-cols-2 gap-12 items-center">
        <div className="hero-text-content text-white pt-[82px] w-full md:w-3/4 lg:w-full z-9">
          <span className="bg-white/20 backdrop-blur-[4px] text-center rounded-full px-4 py-2 text-sm font-medium mb-4 inline-flex items-center gap-2">
            <FaStar />
            Trusted by 500,000+ professionals
          </span>
          <h1 className="text-5xl font-sans mb-[16px] text-white">
            Your Gateway to Better Careers
          </h1>

          <p className="font-regular text-white/90 text-[20px] leading-[160%] pt-[12px]">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>

          <div className="hero-counter-wrapper flex gap-6 mt-10">
            <Counter text="Active Jobs" end={50} suffix="K+" />
            <Counter text="Companies" end={12} suffix="K+" />
            <Counter text="Job Seekers" end={1} suffix="M+" />
          </div>
        </div>
        <JobFilter />
      </div>
    </section>
  );
}
