//

import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="cta-section container-main py-[80px]">
      <div className="bg-[linear-gradient(to_right,_rgb(79,70,229),_rgb(147,51,234),_rgb(219,39,119))] max-w-6xl mx-auto rounded-3xl p-12 md:p-20 text-center text-white">
        <div className="cta-text-content w-full">
          <h2 className="text-3xl md:text-5xl mb-6 text-center text-white">
            Start posting jobs today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start posting jobs for only $10. Reach thousands of job seekers and
            find the perfect candidate.
          </p>
          <div className="flex justify-center">
            <Link
              href="/signup"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:shadow-2xl transition-all text-lg"
            >
              Sign Up For Free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
