export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 text-white">
      <h1 className="text-3xl font-semibold">Resume</h1>
      <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-medium">Summary</h2>
        <p className="mt-2 text-white/70">I’m Tharindu Dulaj, an undergraduate at SLIIT Faculty of Computing, passionate about becoming a software engineer. I have hands-on experience in web and mobile development, working with technologies like HTML, CSS, JavaScript, PHP, MySQL, Java, Next.js, and NestJS. During my academic projects, I’ve built systems such as an online bidding platform, an automated parking system (ParkWave), and mobile UIs using Figma.

I’m currently learning Spring Boot, React Native, and exploring database systems and software project management to strengthen both my technical and problem-solving skills.</p>
      </div>
      <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-medium">Experience</h2>
        <ul className="mt-2 list-disc pl-5 text-white/70">
          <li>Software Engineer Intern at LankaCom – 2025–Present</li>
        </ul>
      </div>
      <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-medium">Download</h2>
        <p className="mt-2 text-white/70">Download a copy of my CV.</p>
        <div className="mt-4 flex items-center gap-3">
          <a
            href="/Tharindu%20Dulaj%20CV%20Resume.pdf"
            download
            className="rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15"
          >
            Download PDF
          </a>
          <a
            href="/Tharindu%20Dulaj%20CV%20Resume.pdf"
            target="_blank"
            className="rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10"
            rel="noreferrer"
          >
            View in browser
          </a>
        </div>
      </div>
    </div>
  )
}


