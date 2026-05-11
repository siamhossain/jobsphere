import { getFeaturedJobs } from "@/lib/api";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { LuLayers } from "react-icons/lu";
import { FaLongArrowAltRight } from "react-icons/fa";

const companyLogos: Record<string, string> = {
  Revolut: "images/company-logos/Revolut.svg",
  Dropbox: "images/company-logos/Dropbox.svg",
  Pitch: "images/company-logos/Pitch.svg",
  Blinklist: "images/company-logos/Blinklist.svg",
  ClassPass: "images/company-logos/ClassPass.svg",
  Canva: "images/company-logos/Canva.svg",
  GoDaddy: "images/company-logos/GoDaddy.svg",
  Twitter: "images/company-logos/Twitter.svg",
};

export default async function FeaturedJobCard() {
  const jobs = await getFeaturedJobs();

  return (
    <div className="featured-jobs">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {jobs.map((job: any) => (
          <div
            key={job._id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex gap-4">
                <div className="logo w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                  <Image
                    src={
                      companyLogos[job.company] ||
                      "images/company-logos/default.svg"
                    }
                    alt={job.company}
                    width={28}
                    height={28}
                  />
                </div>
                <div className="job-company-title">
                  <h3 className="font-medium text-xl mb-1">{job.title}</h3>
                  <p className="text-gray-500">{job.company}</p>
                </div>
              </div>
              <div className="job-type leading-[160%]">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  Full Time
                </span>
              </div>
            </div>

            <div className="descrition">
              <p className="font-Regular text-gray-500 mb-4">
                {job.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="company-meta">
                <ul className="flex flex-wrap items-center gap-x-[20px] gap-y-[10px]">
                  <li className="flex items-center gap-1">
                    <CiLocationOn size={19} color="gray" />

                    <span className="text-sm font-Regular text-gray-500">
                      {job.location}
                    </span>
                  </li>

                  <li className="flex items-center gap-[8px]">
                    <LuLayers size={18} color="gray" />

                    <span className="text-sm font-Regular text-gray-500">
                      {job.category}
                    </span>
                  </li>
                </ul>
              </div>

              <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
                Apply Now <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
