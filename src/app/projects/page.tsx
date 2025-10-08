// app/projects/page.tsx
import ProjectCard from "@/app/components/ProjectCard";
import ModalWrapper from "@/app/components/ModalWrapper";

type Project = {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  details: string;
  links?: { label: string; href: string }[];
  techStack?: string[];
};

// Server-side data
const projects: Project[] = [
  {
    id: "p1",
    title: "ParkWave",
    description: "An automated parking system with real-time booking.",
    imageSrc: "/back7.jpg",
    details:
      "ParkWave is a smart parking solution that allows users to easily find and book available parking spaces online. Developed using HTML, CSS, JS, PHP, and MySQL. Focused on solving real-world parking problems.",
    links: [
      { label: "GitHub", href: "https://github.com/tharindudulaj/ParkWave" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/posts/tharindudulaj_techinnovation-webdevelopment-parkingsolution-activity-7274087051858223104-F_Tv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_TIykBqwuSkxhXeNeROzFm8o7dUdQ1f18",
      },
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: "p2",
    title: "Online Bidding System",
    description: "A platform for users to place bids on matches and games.",
    imageSrc: "/sa.jpg",
    details:
      "Frontend built with JSP, HTML, CSS; backend in Java. Admin can manage matches; users can place bids. Team project.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/tharindudulaj/Online-Bidding-System",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/posts/tharindudulaj_webdevelopment-java-teamwork-activity-7279511593657217024-k5VM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_TIykBqwuSkxhXeNeROzFm8o7dUdQ1f18",
      },
    ],
    techStack: ["HTML", "CSS", "Java", "JSP", "MySQL"],
  },
  {
    id: "p3",
    title: "Online Fabric Store",
    description:
      "An e-commerce platform for browsing and purchasing fabrics online.",
    imageSrc: "/1796.jpg",
    details:
      "Frontend: HTML, CSS, JS; Backend: manages products, orders, and users. Complete online shopping experience.",
    links: [{ label: "LinkedIn", href: "#" }],
    techStack: ["MongoDB", "Express", "Node.js", "React"],
  },
  {
    id: "p4",
    title: "ParkWave Mobile UI Design",
    description:
      "A 10-screen mobile UI prototype for the ParkWave parking system.",
    imageSrc: "/card1.jpg",
    details:
      "Created using Figma. Includes registration, browsing, booking, confirmation screens. Focused on usability and visual appeal.",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/posts/tharindudulaj_uidesign-figma-mobiledesign-activity-7312400013576282112-FKEn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_TIykBqwuSkxhXeNeROzFm8o7dUdQ1f18",
      },
    ],
    techStack: ["Figma"],
  },
  {
    id: "p5",
    title: "React Frontend",
    description: "Responsive and interactive frontend for a webpage.",
    imageSrc: "/4102879_971.jpg",
    details:
      "Built with React and Tailwind CSS. Focused on responsive design and smooth animations for better UX.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/tharindudulaj/Cricket-Landing-Page",
      },
    ],
    techStack: ["React", "Tailwind CSS"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 text-white">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ModalWrapper key={p.id} project={p}>
            <ProjectCard
              title={p.title}
              description={p.description}
              imageSrc={p.imageSrc}
              techStack={p.techStack}
            />
          </ModalWrapper>
        ))}
      </div>
    </div>
  );
}
