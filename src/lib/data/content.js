import cvPdf from '../../assets/cv.pdf';
import profilePhoto from '../../assets/profile.jpeg';
// Import optimized variants using vite-imagetools directives
import bni1Thumb from '../../assets/bni-1.jpg?w=400&format=webp&q=80';
import bni1Full from '../../assets/bni-1.jpg?format=webp&q=90';
import mirocleImage from '../../assets/mirocle.jpg?format=webp&q=90';
import bookingRoomImage from '../../assets/booking-room-app.jpg?format=webp&q=90';
import seeloggyPlusImage from '../../assets/seeloggyplus.jpg?format=webp&q=90';
import pengadaanImage from '../../assets/pengadaan.jpg?format=webp&q=90';
import montereyImage from '../../assets/monterey.png?format=webp&q=90';
import venturaImage from '../../assets/ventura.jpg?format=webp&q=90';
import bni2Thumb from '../../assets/bni-2.jpg?w=400&format=webp&q=80';
import bni2Full from '../../assets/bni-2.jpg?format=webp&q=90';
import bni3Thumb from '../../assets/bni-3.jpg?w=400&format=webp&q=80';
import bni3Full from '../../assets/bni-3.jpg?format=webp&q=90';
import pln1Thumb from '../../assets/pln-1.jpg?w=400&format=webp&q=80';
import pln1Full from '../../assets/pln-1.jpg?format=webp&q=90';
import pln2Thumb from '../../assets/pln-2.jpg?w=400&format=webp&q=80';
import pln2Full from '../../assets/pln-2.jpg?format=webp&q=90';
import pln3Thumb from '../../assets/pln-3.jpg?w=400&format=webp&q=80';
import pln3Full from '../../assets/pln-3.jpg?format=webp&q=90';
import enigmaThumb from '../../assets/enigma.jpg?w=400&format=webp&q=80';
import enigmaFull from '../../assets/enigma.jpg?format=webp&q=90';

import {
  Code,
  Monitor,
  Network,
  Rocket,
  Database
} from 'lucide-svelte';
import {
  SiGo,
  SiOpenjdk,
  SiDotnet,
  SiReact,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiRedis,
  SiJenkins
} from '@icons-pack/svelte-simple-icons';

export const profile = {
  name: "ARIEF MAHENDRA",
  role: "IT Developer | Fullstack Developer",
  bio: "Specializing in high-performance financial systems and scalable backend architectures. Experienced in developing robust banking applications and optimizing complex system integrations at BNI.",
  email: "mahend.arief@gmail.com",
  location: "Jakarta, Indonesia",
  phone: "0851-5609-8029",
  resume: cvPdf,
  photo: profilePhoto,
  social: {
    github: "https://github.com/ariefmahendra",
    linkedin: "https://www.linkedin.com/in/ariefmahendra/",
  }
};

export const skills = [
  { name: "Golang", icon: SiGo, color: "#00ADD8" },
  { name: "Java", icon: SiOpenjdk, color: "#5382A1" },
  { name: ".NET", icon: SiDotnet, color: "#512BD4" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Oracle DB", icon: Database, color: "#F80000" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
];

export const projects = [
  {
    title: "SeeloggyPlus",
    description: "Desktop Log Analysis Application for log tracking, server log analysis, and log search to improve debugging efficiency. Features real-time monitoring and advanced filtering.",
    tags: ["Desktop App", "Log Analysis", "Tooling"],
    link: "#",
    repo: "https://github.com/ariefmahendra/seeloggyplus",
    image: seeloggyPlusImage
  },
  {
    title: "Booking Room API Service",
    description: "A robust Backend API service for managing company room bookings. Built with Golang and Clean Architecture, featuring JWT authentication, PostgreSQL database, and Docker containerization.",
    tags: ["Golang", "API Service", "PostgreSQL", "Docker"],
    link: "#",
    repo: "https://github.com/ariefmahendra/booking_room_app",
    image: bookingRoomImage
  },
  {
    title: "IoT Mirror Bike Therapy",
    description: "Monitoring system for post-stroke patients tracking heart rate and therapy duration. Used MQTT for high-throughput communication between hardware and Laravel/Node.js web app.",
    tags: ["IoT", "Laravel", "Node.js", "MQTT"],
    link: "#",
    repo: "https://github.com/ariefmahendra/MirocleHardware-2.0",
    image: mirocleImage,
    video: "OhRBVEAL6w4"
  },
  {
    title: "Procurement Website",
    description: "In this project, my role is as a frontend developer. I used several technologies to create the look of the website, including Tailwind CSS, Google Chart, and Laravel framework.",
    tags: ["Laravel", "Tailwind CSS", "Google Chart", "Frontend"],
    link: "#",
    repo: "#",
    image: pengadaanImage
  },
  {
    title: "Thinkpad X270 Hackintosh (Monterey)",
    description: "Custom OpenCore EFI configuration for running macOS Monterey 12.7.2 on Lenovo Thinkpad X270. Features fully working Intel HD 520 graphics acceleration, power management, audio, WiFi/Bluetooth, and sleep/wake functionality.",
    tags: ["OpenCore", "Hackintosh", "MacOS", "System Tuning"],
    link: "#",
    repo: "https://github.com/ariefmahendra/opencore-0.9.7-thinkpad-x270-monterey",
    image: montereyImage
  },
  {
    title: "Thinkpad X270 Hackintosh (Ventura)",
    description: "OpenCore EFI configuration for macOS Ventura 13.6.3 on Lenovo Thinkpad X270. Optimized for performance with fixed window resizing lag and custom timezone configuration. Fully functional hardware support including Intel HD 520, WiFi/Bluetooth, and Power Management.",
    tags: ["OpenCore", "Hackintosh", "MacOS Ventura", "System Tuning"],
    link: "#",
    repo: "https://github.com/ariefmahendra/opencore-0.9.7-Thinkpad-X270-Ventura",
    image: venturaImage
  }
];

export const experience = [
  {
    role: "IT Developer",
    company: "PT. Bank Negara Indonesia (Persero) Tbk. (Contracted by PT. Adi Data Informatika)",
    period: "May 2024 - Current",
    description: "Developed and maintained the BNI Smart Remittance application as a fullstack developer, focusing on user experience improvements, backend service reliability, and compliance with remittance standards.\n\nKey Contributions:\n• Implemented biller functionalities for BNIdirect Family using Gateway architecture.\n• Conducted System Integration Testing (SIT) for systems including Payroll, Bulk Payment, BI-FAST, RTGS, LLG, Inhouse Transfer, Bill Payment, etc.\n• Performed database performance assessment in collaboration with DBA team, implementing query optimizations, index strategies, and structural improvements to enhance system performance.\n• Implemented security measures and best practices recommended by security team to ensure application compliance with banking industry standards and data protection requirements.\n• Collaborated with cross-functional teams using Waterfall methodology in developer team environment.\n• Participated in User Acceptance Testing (UAT) sessions with business stakeholders to validate system functionality.",
    images: [
      { thumb: bni1Thumb, full: bni1Full },
      { thumb: bni2Thumb, full: bni2Full },
      { thumb: bni3Thumb, full: bni3Full }
    ]
  },
];

export const training = [
  {
    role: "Trainee BootCamp (Golang)",
    company: "Enigma Camp",
    period: "Nov 2023 - Jan 2024",
    description: "Participated in the Enigma Camp bootcamp, a program focused on developing comprehensive skills in software development.\n\nKey Achievements:\n• Mastered the Golang programming language through intensive study and practical application, gaining proficiency in writing efficient and maintainable code.\n• Acquired advanced skills in developing REST APIs, including designing endpoints, handling requests and responses, and implementing best practices for API security and scalability.\n• Developed a deep understanding of database management, including designing database schemas, writing complex queries, and optimizing database performance.\n• Specialized in authentication and authorization techniques using JWT (JSON Web Tokens), ensuring secure access to web services and resources.\n• Demonstrated expertise in unit testing methodologies, including writing unit tests and integration testing, to ensure the reliability and quality of software components.\n• Applied clean architecture design patterns to create well-structured and maintainable software systems, emphasizing separation of concerns and modularity.\n• Mastered the deployment process to servers using Docker, including containerization of applications, managing Docker images, and deploying applications to production environments with ease and efficiency.",
    images: [
      { thumb: enigmaThumb, full: enigmaFull }
    ]
  },
  {
    role: "Internship - Divisi Transenergi Listrik",
    company: "PT PLN (Persero)",
    period: "Dec 2022 - Feb 2023",
    description: "Internship program utilized to gain practical experience in electrical distribution systems.\n\nResponsibilities:\n• Responsible for validating kWh meter.\n• Cubicle maintenance to solve partial discharge, resulting in improved cubicle quality for the optimization of the electrical distribution system.\n• Analysis of partial discharge disturbance, resulting in the conclusion that the occurrence of partially discharged disruption is caused by moist indoor air due to a damaged cubicle heater compartment.\n• Knowing the steps in analyzing and solving problems in the distribution system to overcome disturbances.\n• Understand the roles and tasks of technicians in operating cubicle systems to regulate electricity flow efficiently.\n• Understand the functions and important components in the cubicle system to regulate and distribute electric power.\n• Learn about the protection mechanism in the cubicle system to prevent further disturbance and maintain the security of the distribution system.",
    images: [
      { thumb: pln1Thumb, full: pln1Full },
      { thumb: pln2Thumb, full: pln2Full },
      { thumb: pln3Thumb, full: pln3Full }
    ]
  }
];

export const services = [
  {
    title: "Enterprise Backend Architecture",
    description: "Designing robust, high-availability microservices and REST APIs using Golang and Java for mission-critical financial systems.",
    icon: Code
  },
  {
    title: "Fullstack & Gateway Solutions",
    description: "End-to-end development bridging complex banking gateways with intuitive, secure user interfaces using Next.js/React.",
    icon: Monitor
  },
  {
    title: "Database Optimization",
    description: "Analyzing and optimizing query performance, indexing strategies, and schema design for high-load PostgreSQL and Oracle databases.",
    icon: Network
  },
  {
    title: "DevOps & Infrastructure",
    description: "Automating deployment pipelines (CI/CD) and managing containerized environments with Docker and Kubernetes.",
    icon: Rocket
  }
];
