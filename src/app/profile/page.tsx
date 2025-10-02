export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 text-white">
      <h1 className="text-3xl font-semibold">My Profile</h1>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-medium">About</h2>
          <p className="mt-2 text-white/70">
            I’m Tharindu Dulaj, an undergraduate at SLIIT Faculty of Computing,
            passionate about software engineering. I enjoy building web and
            mobile applications using modern technologies like Java, Next.js,
            NestJS, PHP, and MySQL. Beyond coding, I’m inspired by discipline
            and growth, with goals to become a skilled software engineer and
            pursue my master’s in the future.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-medium">Hobbies / Interests</h2>
          <p className="mt-2 text-white/70">Cricket</p>
          <p className="text-white/70">Travelling</p>
          <p className="text-white/70">Music</p>
          <p className="text-white/70">Movies</p>
          <p className="text-white/70">Coding</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-medium">Education</h2>
          <ul className="mt-2 list-disc pl-5 text-white/70">
            <li>Software Engineering Undergraduate at SLIIT</li>
            <li>British Council</li>
            <li>
            Henegama Central College - A/Ls</li>
            <li>Web Designing for Beginners - University of Moratuwa</li>
            <li>Python for Beginners - University of Moratuwa</li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-medium">Philosophy / Goals</h2>
          <ul className="mt-2 space-y-1 text-white/70">
            <li>Aspiring software engineer passionate about solving real-world problems through technology.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
