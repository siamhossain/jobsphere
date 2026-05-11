import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeadingProps {
  title: string;
  coloredTitle: string;
  buttonText: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  coloredTitle,
  buttonText,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline w-full mb-[40px] gap-4 md:gap-0">
      <h2 className="heading-lg leading-[110%] md:text-left">
        {title} <span className="text-purple-600">{coloredTitle}</span>
      </h2>

      <Link
        href="/jobs"
        className="flex items-center justify-center md:justify-start gap-3 text-base text-primary font-semibold leading-[160%] py-2 cursor-pointer hover:text-black rounded-none transition-colors duration-300"
      >
        {buttonText}

        <Image
          src="/arrow-right.svg"
          alt="Arrow Right Icon"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
};

export default Heading;
