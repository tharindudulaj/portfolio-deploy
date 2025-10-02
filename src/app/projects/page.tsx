"use client";

import { useState } from "react";
import Modal from "@/app/components/Modal";
import ProjectCard from "@/app/components/ProjectCard";

type Project = {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  details: string;
  links?: { label: string; href: string }[];
  techStack?: string[];
};

const projects: Project[] = [
  {
    id: "p1",
    title:"ParkWave",
    description: "An automated parking system with real-time booking.                                ",
    imageSrc: "/back7.jpg",
    details: "ParkWave is a smart parking solution that allows users to easily find and book available parking spaces online. The system provides an intuitive interface for users to check availability, reserve slots, and manage bookings efficiently. It was developed as a team project using HTML, CSS, and JavaScript for the frontend, PHP for the backend, and MySQL for the database. The project focused on solving real-world problems related to parking congestion and improving user convenience.",
    links: [{ label: "GitHub", href: "https://github.com/tharindudulaj/ParkWave"}, {label: "LinkedIn", href: "https://www.linkedin.com/posts/tharindudulaj_techinnovation-webdevelopment-parkingsolution-activity-7274087051858223104-F_Tv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_TIykBqwuSkxhXeNeROzFm8o7dUdQ1f18"} 
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: "p2",
    title: "Online Bidding System",
    description: "A platform for users to place bids on matches and games.",
    imageSrc: "/sa.jpg",
    details: "The Online Bidding System is a web-based platform where users can place bids on matches and games created by the admin. It was developed as a team project, with my role focused on building the frontend using JSP (JavaServer Pages) along with HTML and CSS. The backend was implemented in Java, ensuring secure handling of bids and match data. The system allows admins to manage matches while users can easily view and participate in bidding, providing an engaging and interactive experience.",
    links: [{ label: "GitHub", href: "https://github.com/tharindudulaj/Online-Bidding-System" },{label:"LinkedIn", href: "https://www.linkedin.com/posts/tharindudulaj_webdevelopment-java-teamwork-activity-7279511593657217024-k5VM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_TIykBqwuSkxhXeNeROzFm8o7dUdQ1f18"}],
    techStack: ["HTML", "CSS", "Java", "JSP", "MySQL"]
  },
  {
    id: "p3",
    title: "Online Fabric Store",
    description: "An e-commerce platform for browsing and purchasing fabrics online.",
    imageSrc: "/1796.jpg",
    details: "The Online Fabric Store is a web-based e-commerce platform that allows users to explore, select, and purchase fabrics conveniently from home. The project includes product listings, search and filter functionality, and a shopping cart system. I worked on the frontend using HTML, CSS, and JavaScript, ensuring a smooth and user-friendly interface. The backend manages product data, orders, and user information securely, providing a complete online shopping experience.",
    links: [{ label: "LinkedIn", href: "#" }],
    techStack: ["MongoDB", "Express", "Node.js", "React"]
  },
  {
    id: "p4",
    title: "ParkWave Mobile UI Design",
    description: "A 10-screen mobile UI prototype for the ParkWave parking system.",
    imageSrc: "/card1.jpg",
    details: "This project showcases the mobile UI design of ParkWave, created using Figma. The design includes 10 interactive screens covering user registration, parking slot browsing, booking, and confirmation. The goal was to provide a seamless and intuitive experience for users, focusing on usability, navigation, and visual appeal. This Figma prototype was part of the planning and design phase before development, helping to visualize the app flow and interface.",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/posts/tharindudulaj_uidesign-figma-mobiledesign-activity-7312400013576282112-FKEn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_TIykBqwuSkxhXeNeROzFm8o7dUdQ1f18" }],
    techStack: ["Figma"]
  },
  {
    id: "p5",
    title: "React Frontend",
    description: "Responsive and interactive frontend for a webpage.",
    imageSrc: "/4102879_971.jpg",
    details: "Responsive and interactive frontend for a webpage using React and Tailwind CSS with responsive design and smooth animations for a better user experience in the web application project .",
    links: [{ label: "GitHub", href: "https://github.com/tharindudulaj/Cricket-Landing-Page" }],
    techStack: ["React", "Tailwind CSS"]
  },
  {
    id: "p6",
    title: "React Frontend",
    description: "Responsive and interactive frontend for a webpage.",
    imageSrc: "/card2.jpg",
    details: "Responsive and interactive frontend for a webpage using React and Tailwind CSS with responsive design and smooth animations for a better user experience in the web application project .",
    links: [{ label: "GitHub", href: "https://github.com/tharindudulaj/Cricket-Landing-Page" }],
    techStack: ["React", "Tailwind CSS"]
  },
];

export default function ProjectsPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === openId) ?? null;

  function getLinkClass(label: string) {
    const base = "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium shadow transition";
    switch (label.toLowerCase()) {
      case "github":
        return base + " bg-[#24292f] text-white hover:brightness-110";
      case "live demo":
      case "demo":
        return base + " bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:brightness-110";
      case "linkedin":
        return base + " bg-[#0a66c2] text-white hover:brightness-110";
      default:
        return base + " border border-white/15 bg-white/10 text-white hover:bg-white/15";
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 text-white">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} title={p.title} description={p.description} imageSrc={p.imageSrc} techStack={p.techStack} onClick={() => setOpenId(p.id)} />
        ))}
      </div>

      <Modal open={!!active} onClose={() => setOpenId(null)} title={active?.title}>
        <div className="space-y-4">
          <p className="text-white/80">{active?.details}</p>
          {active?.techStack?.length ? (
            <div className="flex flex-wrap gap-2">
              {active.techStack.map((t) => (
                <span key={t} className="rounded-md border border-white/15 bg-white/10 px-2 py-1 text-[11px] text-white/90">
                  {t}
                </span>
              ))}
            </div>
          ) : null}
          {active?.links?.length ? (
            <div className="flex flex-wrap gap-2">
              {active.links.map((l, i) => (
                <a
                  key={`${l.label}-${i}`}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={getLinkClass(l.label)}
                >
                  {l.label.toLowerCase() === "github" ? "🐙" : l.label.toLowerCase().includes("demo") ? "▶️" : "🔗"}
                  <span>{l.label}</span>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </Modal>
    </div>
  )
}


