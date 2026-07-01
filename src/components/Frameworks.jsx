import { useMemo } from "react";
import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const tools = useMemo(
    () => [
      "kali",
      "nmap",
      "metasploit",
      "burp",
      "wireshark",
      "python",
      "docker",
      "kubernetes",
      "go",
      "rust",
      "bash",
      "aws",
    ],
    []
  );

  const reversedTools = useMemo(() => [...tools].reverse(), [tools]);

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {tools.map((tool, index) => (
          <Icon key={index} src={`assets/logos/${tool}.svg`} name={tool} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {reversedTools.map((tool, index) => (
          <Icon key={index} src={`assets/logos/${tool}.svg`} name={tool} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, name }) => (
  <img
    src={src}
    className="duration-200 rounded-sm hover:scale-110 opacity-60 hover:opacity-100"
    loading="lazy"
    alt={name}
  />
);
