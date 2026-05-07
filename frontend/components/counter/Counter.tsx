"use client";

import CountUp from "react-countup";

export default function Stats(props: {
  end?: number;
  text?: string;
  suffix?: string;
}) {
  return (
    <div className="bg-white/10 text-white text-center px-6 py-3 rounded-lg shadow-lg">
      <h2 className="text-3xl font-regular mb-1">
        <CountUp
          end={props.end ?? 0}
          duration={5}
          suffix={props.suffix ?? ""}
        />
      </h2>
      <p className="text-white ">{props.text}</p>
    </div>
  );
}
