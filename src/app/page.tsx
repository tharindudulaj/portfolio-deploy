import DashboardCard from "@/app/components/DashboardCard";
import ProfileCard from "@/app/components/ProfileCard";
import IconTile from "@/app/components/IconTile";
import SkillsCarousel from "@/app/components/SkillsCarousel";
import DashboardFooter from "@/app/components/DashboardFooter";

export default function Home() {
  return (
    <>
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 gap-6 px-6 py-10 text-white lg:grid-cols-3">
        <a href="/profile" className="block">
          <ProfileCard
            name="Tharindu"
            email="tharindudula11@gmail.com"
            caption="View profile details"
            avatarSrc="/WhatsApp Image 2025-10-02 at 08.55.22_f10894ac.jpg"
          />
        </a>
        <a href="/projects" className="block">
          <DashboardCard title="Projects" subtitle="Recent" icon="💻">
            <div className="mt-8 flex flex-col items-center justify-center">
              <div className="mb-2">
                <div className="relative">
                  <div className="" />
                  <div className="relative rounded-xl bg-gradient-to-r from-green-500 to-emerald-400 p-3 shadow-lg shadow-green-500/50">
                    <span className="text-3xl">💻</span>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-lg">Explore your projects</p>
            </div>
          </DashboardCard>
        </a>
        <a href="/resume" className="block">
          <DashboardCard title="Resume" subtitle="Summary" icon="📄">
            <div className="mt-6 flex flex-col items-center justify-center">
              <div className="mb-2">
                <div className="relative">
                  <div className="" />
                  <div className="relative rounded-xl bg-yellow-400 p-3 shadow-lg shadow-yellow-500/60">
                    <span className="text-3xl">📄</span>
                  </div>
                </div>
              </div>
              <p className="mt-2">View and download</p>
            </div>
          </DashboardCard>
        </a>
        <a href="/contact" className="block lg:col-span-2">
          <DashboardCard title="Contact Us" subtitle="Reach out" icon="✉️">
            <div className="mt-6 flex flex-col items-center justify-center">
              <div className="mb-2">
                <div className="relative">
                  <div className="" />
                  <div className="relative rounded-xl bg-blue-500 p-3">
                    <span className="text-3xl">✉️</span>
                  </div>
                </div>
              </div>
              <p className="mt-2">Email or message</p>
            </div>
          </DashboardCard>
        </a>
        <div>
          <DashboardCard title="Skills" subtitle="Overview" icon="⚙️">
            <SkillsCarousel
              pages={[
                [
                  { label: "C", emoji: "🅲" },
                  { label: "C++", emoji: "➕" },
                  { label: "Java", emoji: "☕" },
                  { label: "PHP", emoji: "🐘" },
                  { label: "HTML", emoji: "📄" },
                  { label: "CSS", emoji: "🎨" },
                  { label: "Git", emoji: "🌿" },
                  { label: "MySQL", emoji: "🗄️" },
                ],
                [
                  { label: "React", emoji: "⚛️" },
                  { label: "MERN", emoji: "🧩" },
                  { label: "Next.js", emoji: "▲" },
                  { label: "NestJS", emoji: "🟥" },
                  { label: "MongoDB", emoji: "🍃" },
                  { label: "TailwindCSS", emoji: "🌀" },
                  { label: "React Native", emoji: "📱" },
                  { label: "Figma", emoji: "🎯" },
                ],
              ]}
            />
          </DashboardCard>
        </div>
      </div>
      <DashboardFooter />
    </>
  );
}
