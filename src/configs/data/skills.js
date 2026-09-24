// src/configs/data/skills.js
import {
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPython,
  SiJavascript,
  SiLinux,
  SiDocker,
  SiGithub,
  SiExpress,
  SiTailwindcss,
  SiKalilinux,
  SiWireshark,
  SiMetasploit,
  SiBurpsuite
} from 'react-icons/si';

import {
  FaReact,
  FaNodeJs,
  FaNetworkWired,
  FaShieldAlt,
  FaTerminal
} from 'react-icons/fa';
import { FaShield } from 'react-icons/fa6';
import { DiRedis } from 'react-icons/di';

export const SKILLS_DATA = [
  {
    id: "security",
    items: [
      { name: "ethical-hacking", icon: FaShieldAlt },
      { name: "pentesting", icon: FaShield },
      { name: "websec", icon: FaNetworkWired },
      { name: "osint", icon: FaTerminal }
    ]
  },
  {
    id: "tools",
    items: [
      { name: "burpsuite", icon: SiBurpsuite },
      { name: "kali", icon: SiKalilinux },
      { name: "wireshark", icon: SiWireshark },
      { name: "metasploit", icon: SiMetasploit }
    ]
  },
  {
    id: "frontend",
    items: [
      { name: "react", icon: FaReact },
      { name: "javascript", icon: SiJavascript },
      { name: "tailwind", icon: SiTailwindcss },
      { name: "express", icon: SiExpress }
    ]
  },
  {
    id: "backend",
    items: [
      { name: "nodejs", icon: FaNodeJs },
      { name: "python", icon: SiPython },
      { name: "docker", icon: SiDocker },
      { name: "linux", icon: SiLinux }
    ]
  },
  {
    id: "databases",
    items: [
      { name: "mysql", icon: SiMysql },
      { name: "mongodb", icon: SiMongodb },
      { name: "postgresql", icon: SiPostgresql },
      { name: "redis", icon: DiRedis }
    ]
  },
  {
    id: "platforms",
    items: [
      { name: "linux", icon: SiLinux },
      { name: "git", icon: SiGithub },
      { name: "docker", icon: SiDocker },
      { name: "python", icon: SiPython }
    ]
  }
];