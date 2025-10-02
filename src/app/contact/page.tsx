"use client";
export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 text-white">
      <h1 className="text-3xl font-semibold">Let’s Connect</h1>
      <p className="mt-2 text-white/80">Have a project in mind? I’d love to hear from you. Feel free to reach out for opportunities, collaborations, or just to say hi.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-medium">Contact Information</h2>
          <ul className="mt-3 space-y-1 text-white/80">
            <li>Email: tharindudula11@gmail.com</li>
            <li>Phone: +94 76 191 0180</li>
            <li>Location: Weliweriya, Sri Lanka</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a className="rounded-md border border-white/15 bg-white/10 px-3 py-1 text-sm hover:bg-white/15" href="https://www.linkedin.com/in/tharindudulaj" target="_blank" rel="noreferrer noopener">LinkedIn</a>
            <a className="rounded-md border border-white/15 bg-white/10 px-3 py-1 text-sm hover:bg-white/15" href="https://github.com/tharindudulaj" target="_blank" rel="noreferrer noopener">GitHub</a>
            <a className="rounded-md border border-white/15 bg-white/10 px-3 py-1 text-sm hover:bg-white/15" href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">Instagram</a>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-medium">Send a Message</h2>
          <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder-white/40 focus:border-white/30" placeholder="Your name" />
            <input type="email" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder-white/40 focus:border-white/30" placeholder="Your email" />
            <textarea rows={4} className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder-white/40 focus:border-white/30" placeholder="Your message" />
            <button className="rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm hover:bg-white/15">Submit</button>
          </form>
        </div>
      </div>

      <p className="mt-8 text-white/70">I’ll get back to you as soon as possible. Looking forward to connecting!</p>
    </div>
  )
}


