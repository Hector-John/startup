"use client";

import Button from "@/components/button";
import Heading from "@/components/ui/header";
import { developedProjects, caseStudies } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  category: string;
  tech: string[];
  img: string;
  link: string;
  description: string;
};

const getRandomDate = (): string => {
  const start = new Date(2025, 1, 21);
  const end = new Date();
  const randomTime =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  const randomDate = new Date(randomTime);
  return randomDate.toISOString().split("T")[0];
};

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Heading
        bgImage="/service_bg.png"
        title={<>Our Work</>}
        subtitle="A glimpse into the kind of work we do, and what we could do together. Let's build something better."
      />
      <section className="padded">
        {/* Developed Projects */}
        <div className="pb-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {developedProjects.map((project: Project) => (
              <div
                key={project.id}
                className="group rounded-xl overflow-hidden card p-0 shadow transition"
              >
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={project.img || "/soon.png"}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h1 className="text-xl text-gradient font-semibold">{project.title}</h1>
                  <p className="text-sm text-gray-500 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 my-4">
                    {project.tech.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant='secondary' className='mt-4'>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="px-4 md:px-16 my-24">
          <h2 className="text-4xl font-bold text-center text-gradient mb-12">Case Studies</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {caseStudies.map((study: Project) => (
              <article key={study.id} className="relative group h-[26rem] overflow-hidden rounded-lg">
                {/* Background image */}
                <Image
                  src={study.img || "/placeholder.png"}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* overlay  */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500"></div>

                {/* bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-40 group-hover:opacity-100 group-hover:h-40 transition-all duration-500 ease-in-out"></div>

                {/* Content */}
                <div className="absolute bottom-0 z-10 p-6 w-full">
                  <time
                    dateTime={getRandomDate()}
                    className="block text-xs text-white/70 mb-1"
                  >
                    {getRandomDate()}
                  </time>
                  <h3 className="text-xl font-semibold text-white">{study.title}</h3>
                  <p className="text-sm text-gray-200 mt-2">{study.description}</p>
                  <Link href={study.link} passHref legacyBehavior>
                    <Button className="mt-4">
                      View Case Study
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>


      </section>
    </div>
  );
};

export default ProjectsPage;