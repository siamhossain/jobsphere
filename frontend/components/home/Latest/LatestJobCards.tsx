import { getLatestJobs } from "@/lib/api";
import Image from "next/image";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { LuLayers } from "react-icons/lu";

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

export default async function LatestJobCards() {
  const jobs = await getLatestJobs();

  return (
    <div className="latest-jobs">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job: any) => (
          <div
            key={job._id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1"
          >
            <div className="">
              <div className="logo w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mb-4">
                <Image
                  src={
                    companyLogos[job.company] ||
                    "images/company-logos/default.svg"
                  }
                  alt={job.company}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="latest-job-content flex-1">
                <div className="job-company-title">
                  <h3 className="font-medium text-lg mb-2">{job.title}</h3>
                  <p className="text-gray-500 mb-4">{job.company}</p>
                </div>

                <div className="company-meta">
                  <ul className="space-y-2 text-sm text-gray-500 mb-4">
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

                    <li className="flex items-center gap-[8px]">
                      <CiClock2 size={18} color="gray" />

                      <span className="text-sm font-Regular text-gray-500">
                        Full Time {/*job.type*/}
                      </span>
                    </li>
                  </ul>
                </div>
                <button className="w-full py-2 border-2 border-purple-500 text-purple-600 rounded-lg hover:bg-purple-500 hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
