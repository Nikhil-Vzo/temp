import { useRef, useMemo } from "react";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { motion } from "motion/react";

const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      className="absolute w-10 sm:w-12 cursor-grab opacity-60 hover:opacity-100"
      src={image}
      style={style}
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="absolute px-2 py-1.5 sm:px-3 sm:py-2 text-[10px] sm:text-xs text-center rounded border border-accent/30 bg-surface/80 font-mono text-accent cursor-grab backdrop-blur"
      style={style}
      whileHover={{ scale: 1.05, borderColor: "#33c2cc" }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

const About = () => {
  const grid2Container = useRef();

  const securityTools = useMemo(
    () => [
      { style: { rotate: "12deg", top: "30%", left: "20%" }, text: "Nmap" },
      { style: { rotate: "-10deg", top: "60%", left: "45%" }, text: "Metasploit" },
      { style: { rotate: "15deg", bottom: "30%", left: "70%" }, text: "Burp Suite" },
      { style: { rotate: "-12deg", top: "55%", left: "5%" }, text: "Wireshark" },
      { style: { rotate: "10deg", top: "10%", left: "38%" }, text: "Kali Linux" },
      { style: { rotate: "8deg", top: "72%", left: "72%" }, image: "/assets/logos/python.svg" },
      { style: { rotate: "-15deg", top: "70%", left: "20%" }, image: "/assets/logos/bash.svg" },
      { style: { rotate: "-8deg", top: "10%", left: "10%" }, image: "/assets/logos/docker.svg" },
    ],
    []
  );

  return (
    <section className="c-space section-spacing relative" id="about">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <h2 className="text-heading text-white">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 - Identity */}
        <div className="flex flex-col justify-center grid-default-color grid-1 glow-border min-h-[16rem] md:min-h-0 p-6 md:p-8 relative overflow-hidden">
          <div className="flex flex-col items-center md:items-start gap-4 z-10 w-full">
            <img
              src="/assets/naman.png"
              className="hidden md:block w-32 h-32 rounded-full border-2 border-accent/40 object-cover shadow-[0_0_20px_#33c2cc20] shrink-0 transition-all duration-350 cursor-pointer"
              style={{ filter: "sepia(1) saturate(4) hue-rotate(85deg) brightness(0.8) contrast(1.2)" }}
              onMouseEnter={(e) => e.currentTarget.style.filter = "none"}
              onMouseLeave={(e) => e.currentTarget.style.filter = "sepia(1) saturate(4) hue-rotate(85deg) brightness(0.8) contrast(1.2)"}
              alt="Naman Kumar"
            />
            <div className="text-center md:text-left w-full">
              <p className="headtext text-accent font-mono text-xs uppercase tracking-widest">Profile</p>
              <h3 className="text-white text-2xl font-bold font-sans mt-1 mb-2">Naman Kumar</h3>
              <p className="subtext text-white/80 leading-relaxed text-sm">
                Ethical hacker and cybersecurity engineer with hands-on experience in network security, intrusion detection, and secure code analysis. Building secure systems by understanding how to break them.
              </p>
            </div>
            
            {/* Areas of Focus (PC Only) */}
            <div className="hidden md:flex flex-col gap-2 w-full mt-4 p-4 rounded bg-surface border border-accent/15 font-mono text-xs text-accent/80">
              <div className="flex justify-between border-b border-accent/10 pb-1.5 mb-1 text-white">
                <span>[AREAS OF FOCUS]</span>
                <span className="text-accent font-bold">READY</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-text-muted">
                <div className="flex items-center gap-1.5">
                  <span className="text-accent">›</span> Network Security
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-accent">›</span> Threat Detection
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-accent">›</span> Secure Code Review
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-accent">›</span> Static Analysis
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-surface" />
        </div>

        {/* Grid 2 - Floating Tools */}
        <div className="grid-default-color grid-2 glow-border min-h-[16rem] md:min-h-0">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="flex items-end text-3xl sm:text-4xl text-white/20 font-mono">
              TOOLKIT
            </p>
            {securityTools.map((tool, i) => (
              <Card key={i} {...tool} containerRef={grid2Container} />
            ))}
          </div>
        </div>

        {/* Grid 3 - Location */}
        <div className="grid-black-color grid-3 glow-border min-h-[16rem] md:min-h-0 relative overflow-hidden">
          <div className="z-10 w-full md:w-[50%] absolute left-6 top-6">
            <p className="headtext font-mono text-accent text-xs uppercase tracking-widest">Location</p>
            <p className="subtext text-white/80">
              Based in India. Remote-friendly. Hunting vulnerabilities worldwide.
            </p>
          </div>
          <figure className="absolute -right-10 -bottom-10 w-52 h-52 md:w-72 md:h-72 opacity-50 md:opacity-80 pointer-events-none">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 - Contact CTA */}
        <div className="grid-special-color grid-4 glow-border min-h-[16rem] md:min-h-0">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext font-mono text-accent text-xs uppercase tracking-widest">
              Contact
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 - Certifications & Skills */}
        <div className="grid-default-color grid-5 glow-border min-h-[18rem] md:min-h-0 relative">
          <div className="z-10 w-full md:w-[45%]">
            <p className="headtext font-mono text-accent text-xs uppercase tracking-widest">Certifications</p>
            <p className="subtext text-white/80">
              OSCP | CEH | CISSP | eJPT | CompTIA Security+ | AWS Security
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:absolute md:inset-y-0 md:right-0 md:w-[55%] md:h-full flex items-center justify-center">
            <div className="grid grid-cols-3 gap-2 sm:gap-3 p-2 sm:p-4">
              {["OSCP", "CEH", "CISSP", "eJPT", "Sec+", "AWS-S"].map((cert) => (
                <div
                  key={cert}
                  className="px-2 py-1.5 sm:px-3 sm:py-2 border border-accent/30 rounded text-[10px] sm:text-xs font-mono text-accent text-center hover:bg-accent/10 transition-colors"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
