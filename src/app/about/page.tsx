export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 text-white">
      <h1 className="text-3xl font-semibold">About Me</h1>

      <section className="mt-6 space-y-4">
        <p className="text-white/80">
          I’m <span className="font-medium">Tharindu Dulaj</span>, an undergraduate at
          SLIIT Faculty of Computing, passionate about software engineering and
          solving problems through technology.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">My Journey</h2>
        <p className="mt-2 text-white/80">
          I’ve built projects ranging from small personal apps to collaborative
          team work. Technologies I’ve used include HTML, CSS, JavaScript, PHP,
          Java, MySQL, and modern frameworks like Next.js, NestJS and Spring Boot.
          Every step has improved my coding discipline and system design mindset.
        </p>
      </section>

      <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-base font-medium">Skills & Strengths</h3>
          <ul className="mt-2 list-disc pl-5 text-white/80">
            <li>Programming: Java, C, C++, JavaScript, TypeScript</li>
            <li>Frameworks: Next.js, NestJS, Spring Boot</li>
            <li>Tools: Git, Figma, MySQL</li>
            <li>Soft skills: teamwork, problem‑solving, time management</li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-base font-medium">Interests & Inspiration</h3>
          <p className="mt-2 text-white/80">
            I love cricket, science and movies. I’m inspired by Virat Kohli and
            Cristiano Ronaldo — their discipline and mindset push me to stay
            consistent and motivated.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Current Goals</h2>
        <p className="mt-2 text-white/80">
          I’m learning Spring Boot, React Native, database systems and project
          management. My plan is to complete my degree, become a software
          engineer, and pursue a master’s.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Outside of Coding</h2>
        <p className="mt-2 text-white/80">
          When I’m not coding, you’ll find me watching cricket, traveling with
          friends, or exploring new tech ideas.
        </p>
      </section>
    </div>
  )
}


