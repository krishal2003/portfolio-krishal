"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MobileNav } from "@/components/mobile-nav";
import ConnectEmail from "../ConnectEmail";

const projects = [
  {
    id: 1,
    name: "Clockbee",
    detailedDescription:
      "A roster management platform developed for the Australian market. Includes an admin web dashboard and a mobile app for users, available on the App Store and Play Store. Features include shift scheduling, employee check-in/out, leave tracking, and real-time updates. Designed with responsive UI and built for smooth performance across devices.",
    image: "/ bee.png",
    demoUrl: "https://clockbee.app/",
  },
  {
    id: 2,
    name: "DMERCE",
    detailedDescription:
      " An e-commerce website for my first clothing brand, built with a focus on simplicity and ease of use. Though technically straightforward, it holds deep personal value as it marked the beginning of my journey into business. Features basic product listings, cart functionality, and order handling.",
    image: "/dmerce.png",
    demoUrl: "https://dmerce.vercel.app/",
  },
  {
    id: 3,
    name: "AI DASHBOARD",
    detailedDescription:
      "An intelligent analytics dashboard powered by Python and TensorFlow. Provides real-time data processing, machine learning predictions, interactive charts and graphs, automated reporting, and anomaly detection. Built with scalable architecture to handle large datasets and concurrent users.",
    image: "/images/hero-portrait.jpg",
    demoUrl: "https://ai-dashboard-demo.herokuapp.com",
  },
  {
    id: 4,
    name: "SAAS PLATFORM",
    detailedDescription:
      "A scalable SaaS platform built with microservices architecture. Deployed on Kubernetes for container orchestration, implemented CI/CD pipelines, multi-tenant architecture, API gateway, service mesh, and comprehensive monitoring. Features include user management, billing integration, and analytics.",
    image: "/images/hero-portrait.jpg",
    demoUrl: "https://saas-platform-demo.com",
  },
  {
    id: 5,
    name: "SOCIAL MEDIA",
    detailedDescription:
      "A social media platform with real-time messaging capabilities. Built with WebSocket for instant communication, Redis for caching and session management, MongoDB for flexible data storage. Features include user profiles, post sharing, live notifications, and content moderation systems.",
    image: "/images/hero-portrait.jpg",
    demoUrl: "https://social-media-demo.surge.sh",
  },
  {
    id: 6,
    name: "IOT SYSTEM",
    detailedDescription:
      "An IoT monitoring system for industrial applications. Implemented MQTT protocol for device communication, time-series database for sensor data storage, real-time monitoring dashboard, alert systems, and predictive maintenance algorithms. Supports thousands of connected devices with low latency.",
    image: "/images/hero-portrait.jpg",
    demoUrl: "https://iot-system-demo.github.io",
  },
];

export default function PortfolioPage() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <div className="min-h-screen bg-[#E8E0D4] text-black font-mono overflow-hidden md:overflow-hidden">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start p-3 sm:p-4 md:p-6 gap-3 md:gap-4">
        <Link
          href="/"
          className="text-base sm:text-lg md:text-xl font-bold hover:underline"
        >
          KRISHAL BASNET
        </Link>
        <div className="hidden md:flex gap-6 lg:gap-8 text-sm">
          <Link href="/about" className="hover:underline">
            [ABOUT ME]
          </Link>
          <Link href="/portfolio" className="hover:underline">
            [PORTFOLIO]
          </Link>
          <Link href="/feedback" className="hover:underline">
            [FEEDBACK]
          </Link>
        </div>
        <MobileNav />
        <ConnectEmail />
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] md:h-[calc(100vh-120px)] relative px-2 sm:px-4 py-4 md:py-0">
        {/* Left Navigation */}
        <button
          onClick={prevProject}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-xs md:text-sm hover:underline z-10 p-2"
        >
          [PREV]
        </button>

        {/* Center Content */}
        <div className="flex flex-col items-center gap-4 md:gap-8 max-w-7xl w-full">
          {/* Project Name and Image Row */}
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-16">
            {/* Large Name */}
            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-[8rem] xl:text-[10rem] font-black leading-none tracking-tighter order-2 lg:order-1 px-12 md:px-16 lg:px-20">
              {project.name}
            </div>

            {/* Portrait */}
            <div className="relative order-1 lg:order-2">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`${project.name} Project`}
                width={400}
                height={400}
                className="object-cover w-[200px] h-[250px] sm:w-[250px] sm:h-[320px] md:w-[300px] md:h-[400px] lg:w-[350px] lg:h-[450px]"
              />
            </div>
          </div>

          {/* Description Section */}
          <div className="max-w-4xl text-center px-4 sm:px-6 mb-20 md:mb-0">
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>
        </div>

        {/* Right Navigation */}
        <button
          onClick={nextProject}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 text-xs md:text-sm hover:underline z-10 p-2"
        >
          [NEXT]
        </button>
      </div>

      {/* Bottom Info - Fixed positioning to avoid overlap */}
      <div className="fixed md:absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-8 md:gap-16 text-xs md:text-sm bg-[#E8E0D4] md:bg-transparent px-4 py-2 md:p-0 rounded-md md:rounded-none shadow-md md:shadow-none z-40">
        <span>
          [{String(currentProject + 1).padStart(2, "0")}/
          {String(projects.length).padStart(2, "0")}]
        </span>
        <Link
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          [VIEW PROJECT]
        </Link>
      </div>
    </div>
  );
}
