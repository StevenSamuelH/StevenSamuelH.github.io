"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Hello, I&apos;m{" "}
          </span>

            <br></br>
            <TypeAnimation
              sequence={[
                "Steven Samuel",
                1000,
                "Analyst",
                1000,
                "Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div>
          <Link href="https://www.linkedin.com/in/steven-samuel-hutapea-12b9b91b7/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link
  href="https://drive.google.com/uc?export=download&id=1dPLIXUwQTil7cIIeEbQ1QfPLbh77uICu"
  className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-blue-700 hover:bg-slate-800 text-white mt-3"
>
  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
    Download CV
  </span>
</Link>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
