import Heading from "@/components/home/Heading";
import LatestJobCards from "@/components/home/Latest//LatestJobCards";

export default function LatestSection() {
  return (
    <section className="latest-job-section py-20 bg-white">
      <div className="container-main">
        <Heading
          title="Latest"
          coloredTitle=" Jobs"
          buttonText="Show All Jobs"
        />
        <LatestJobCards />
      </div>
    </section>
  );
}
