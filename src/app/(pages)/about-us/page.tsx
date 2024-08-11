import About from "@/app/components/about/page";
import Footer from "@/app/components/footer/page";
import TeamCards from "@/app/components/teamCard/page";
export default function AboutUs() {
  return (
    <div>
      <About />
      <div className="max-w-6xl mx-auto px-8 py-20 shadow-lg">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">
            Our History
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            GameCourse was established in [Year] by a group of passionate gamers
            who recognized the need for structured coaching in the gaming
            community. Since our founding, we’ve achieved several milestones,
            including reaching over [Number] of registered users, partnering
            with top-tier esports professionals, and expanding our course
            offerings to cover a wide range of game genres.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-indigo-600">Our Culture</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At GameCourse, we believe in fostering a culture of continuous
            learning, innovation, and inclusivity. Our team is driven by a
            shared passion for gaming and a commitment to helping others achieve
            their goals. Whether you're a player, coach, or staff member, you'll
            find a supportive environment that encourages personal growth and
            collaboration.
          </p>
        </section>
      </div>
      <section className="h-screen w-full bg-white  flex flex-col justify-center m-auto items-center gap-5">
        <h2 className="text-5xl font-bold text-indigo-600 mb-4">Meet Our Team</h2>
        <div className="max-w-6xl">
          <TeamCards />
        </div>
        <a href="#" className="font-semibold text-indigo-600 ml-1">
          <span aria-hidden="true" className="absolute inset-0" />
          Learn more <span aria-hidden="true">&rarr;</span>
        </a>
      </section>
      <Footer />
    </div>
  );
}
