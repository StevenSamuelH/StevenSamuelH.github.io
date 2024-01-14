"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
            <li>MariaDB</li>
            <li>MongoDB</li>
            <li>PostgreSQL (Experienced)</li>
            <li>Excel</li>
            <li>SQL</li>
            <li>Python</li>
            <li>Java</li>
            <li>HTML (Experienced)</li>
            <li>CSS (Experienced)</li>
            <li>JavaScript (Experienced)</li>
            <li>Dart (Experienced)</li>
            <li>Flutter</li>
            <li>DjangoREST</li>
            <li>Spring Boot (Experienced)</li>
            <li>Tableau (Experienced)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University Of Indonesia, Bachelor’s degree in Information Systems</li>
        <li>ID Camp Indosat Ooredoo Hutchison </li>
        <li>User Experience Academy Compfest 14</li>
        <li>Sekolah Pasar Modal FEB UI </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a href="https://www.datacamp.com/statement-of-accomplishment/course/75a0cc72b474a22e086311b5baf449b3939c5a05" target="_blank" rel="noopener noreferrer">
            DataCamp - Introduction to SQL
          </a>
        </li>
        <li>
          <a href="https://www.hackerrank.com/certificates/2b27b03b743d" target="_blank" rel="noopener noreferrer">
            HackerRank - SQL (Basic)
          </a>
        </li>
        <li>
          <a href="https://www.hackerrank.com/certificates/126b9857c92a" target="_blank" rel="noopener noreferrer">
            HackerRank - Java (Basic)
          </a>
        </li>
        <li>
          <a href="https://www.datacamp.com/statement-of-accomplishment/course/bd2ba261b76bd5f56a0674b152def7e82f9f6602?raw=1" target="_blank" rel="noopener noreferrer">
            DataCamp - Introduction to Tableau
          </a>
        </li>
        <li>
          <a href="https://www.datacamp.com/statement-of-accomplishment/course/ef9367ed1a05669aed1e0b154c05a714e8fd6bf4" target="_blank" rel="noopener noreferrer">
            DataCamp - Intermediate SQL
          </a>
        </li>
        <li>
          <a href="https://www.datacamp.com/statement-of-accomplishment/course/4614a8f1957b2aac2f743f34f06c1268f07f5be5" target="_blank" rel="noopener noreferrer">
            DataCamp - Introduction to R
          </a>
        </li>
        <li>
          <a href="https://www.datacamp.com/statement-of-accomplishment/course/529d8745213fdc8e6e485ba9054e3470068f31f2" target="_blank" rel="noopener noreferrer">
            DataCamp - Understanding Data Visualization
          </a>
        </li>
        <li>
          <a href="https://www.datacamp.com/statement-of-accomplishment/course/80f509d686ea678e76f6e059edd7b19c5a033abb?raw=1" target="_blank" rel="noopener noreferrer">
            DataCamp - Data Manipulation with Pandas
          </a>
        </li>
        <li>
          <a href="https://www.datacamp.com/statement-of-accomplishment/course/6b2f6d8cd88d3d06d36f2e8803d9df902f5a074e" target="_blank" rel="noopener noreferrer">
            DataCamp - Data Storytelling Case Study: Green Businesses
          </a>
        </li>
        <li>
          <a href="https://www.dicoding.com/certificates/0LZ02QMMKX65" target="_blank" rel="noopener noreferrer">
            Belajar Dasar Data Science (Dicoding)
          </a>
        </li>
        <li>
          <a href="https://www.dicoding.com/certificates/2VX3O6MEVZYQ" target="_blank" rel="noopener noreferrer">
            Belajar Dasar Structured Query Language (SQL) (Dicoding)
          </a>
        </li>
        <li>
          <a href="https://www.dicoding.com/certificates/98XW2VY14PM3" target="_blank" rel="noopener noreferrer">
            Memulai Pemrograman dengan Python (Dicoding)
          </a>
        </li>
      </ul>
    ),
  },
  
  
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          A proficient final year Information Systems student at Universitas Indonesia, I have fervor for business analytics 
          and data analysis. I demonstrate the ability to excel independently and collaboratively within a team. 
          My dedication is to leverage my skills not only in full-stack develoment and advanced analytics but also in product management to drive business success. 
          With a sharp eye for detail and a strong analytical mindset, I am committed to crafting top-notch web and mobile applications.
           Additionally, I harness data-driven findings to enhance user satisfaction and streamline business operations, contributing effectively to product management.	
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
