import JobFilter from "../jobs/JobFilter";
import { FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-section pt-[150px] pb-[100px] bg-[linear-gradient(to_right,rgb(79,70,229),rgb(147,51,234),rgb(219,39,119))]">
      <div className="container-main grid md:grid-cols-2 gap-12 items-center">
        <div className="hero-text-content pt-[82px] text-center w-full md:w-3/4 lg:w-full z-9">
          <span className="text-[#04b562] bg-[#122630] text-center rounded-full px-4 py-1 text-sm font-medium mb-4 inline-flex items-center gap-2">
            <FaStar />
            Trusted by 500,000+ professionals
          </span>
          <h1 className="heading-lg mb-[16px] text-white text-center">
            Land Your Next Big Opportunity
          </h1>

          <p className="font-regular text-[20px] leading-[160%] text-[#9b97b0] pt-[12px] w-full md:w-3/4 lg:w-3/4 mx-auto">
            Join the platform where talent meets opportunity. Search from
            thousands of jobs across multiple industries and locations
          </p>
        </div>
        <JobFilter />
      </div>
    </section>
  );
}
