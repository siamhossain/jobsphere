import Heading from "@/components/home/Heading";
import FeaturedJobCards from "@/components/home/Featured/FeaturedJobCards";

export default function FeaturedSection() {
  return (
    <section className="featured-job-section py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="container-main">
        <Heading
          title="Featured"
          coloredTitle=" Jobs"
          buttonText="Show All Jobs"
        />
        <FeaturedJobCards />
      </div>
    </section>
  );
}
