"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "APAP Project Details",
    description: "APAP is a project-based course from the faculty of computer science. I gained many knowledge of back-end coding from this course as well as utilizing APIs. This course serves us very many projects as well as various coding challenges for us to learn. There are three projects that were made and my favorite one is RUMAHSEHAT where it's my first time utilizing postman to work on APlsthat will be used on flutter. Not only that, I was assigned to be the project leader to lead the team members to work together onfinishing the project.",
    image: "/images/projects/apap.png",
    tag: ["All", "Application"],
    previewUrl: "https://www.canva.com/design/DAFjbiDsuQQ/view?embed&autoplay=1&speed=0.5",
  },
  {
    id: 2,
    title: "PBP Project Details",
    description: "Pemrograman Berbasis Platform (PBP) = Django, Flutter.PBP is the first project-based course that I ever got. Platform Based Programming course gave us a task of creating a planner a called MOTOGPMERCH. Basically it uses Django as the framework and utilized using API to send data to the flutter app.",
    image: "/images/projects/pbp.png",
    tag: ["All", "Application"],
    previewUrl: "https://www.canva.com/design/DAFjcM-8wsE/view?utm_content=DAFjcM-8wsE&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
  },
  {
    id: 3,
    title: "STPN APPLICATION COMPETITIONS",
    description: " STPN Application Competition 2022  held by Sekolah Tinggi Pertahanan Nasional.( Finalist )",
    image: "/images/projects/qukur.png",
    tag: ["All", "Application"],
    previewUrl: "https://www.canva.com/design/DAE5AETdysM/view",
  },  
  {
    id: 4,
    title: " Propensi Project Details",
    description: "PROPENSI Proyek Pengembangan Sistem Informasi (venue rental app for wedding and meeting.)",
    image: "/images/projects/propensi.png",
    tag: ["All", "Application"],
    previewUrl: "https://www.canva.com/design/DAFkNSObUo0/view",
  },
  {
    id: 5,
    title: "Proyek Akhir KASDD Football  player",
    description: "Analyzing football player dataset using python",
    image: "/images/projects/Canva.png",
    tag: ["All", "Data"],
    previewUrl: "https://www.canva.com/design/DAFhG_21GwI/view",
  },
  {
    id: 6,
    title: "UXA Project Details",
    description: "User Experience Academy REDESIGN Tokopedia App and Garuda APP",
    image: "/images/projects/UXA.png",
    tag: ["All", "Application"],
    previewUrl: "https://www.canva.com/design/DAFjcBX8K-w/view",
  },
  {
    id: 7,
    title: "EDA MSIB Intern Batch 5 Kampus Merdeka",
    description: "Data Visualisation",
    image: "/images/projects/Tableau.png",
    tag: ["All", "Data"],
    previewUrl: "https://public.tableau.com/views/Jakarta_16879647309750/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link",
  },
  {
    id: 8,
    title: "Telkom Internship Dashboard Project Details",
    description: " Visualisasi Data Pengadaan dengan Tableau",
    image: "/images/projects/pbp.png",
    tag: ["All", "Data"],
    previewUrl: "https://www.canva.com/design/DAF6CZv_wFw/view",
  },
  {
    id: 9,
    title: "Data Web Scarping dan Standarization",
    description: "Data Scraping and Standarization using Python Library",
    image: "/images/projects/pbp.png",
    tag: ["All", "Data"],
    previewUrl: "https://www.canva.com/design/DAF6D1bJBtc/view",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data"
          isSelected={tag === "Data"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Application"
          isSelected={tag === "Application"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
