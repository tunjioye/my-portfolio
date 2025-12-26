"use client";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { motion, useInView } from "motion/react";
import type React from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

type Data = {
  title: string;
  content: {
    title: string;
    description?: string | React.ReactNode;
  }[];
};
export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const data: Data[] = [
    {
      title: "2025",
      content: [
        {
          title: "Built a new PORTFOLIO WEBSITE",
          description:
            "To better highlight my skills and experience. And showcase some screenshots of my work.",
        },
        {
          title: "Got Married. 💍",
          description: "Got married to the love of my life.",
        },
      ],
    },
    {
      title: "2024",
      content: [
        {
          title: "Re-built PEPVOTE using React, Next JS and TypeScript.",
          description:
            "Built a new version of PEPVOTE using React, Next JS and TypeScript. Implemented new features, improved performance and removed several unused features from version 1.",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "Employed as a Lead Frontend Engineer at Terrace Finance",
          description:
            "Leading a team of frontend engineers to build reusable components and integrate crypto assets, markets and transactions apis. While maintaining code quality and performance. Using React, Next JS, TypeScript and GraphQL.",
        },
        {
          title: "Completed Diploma in Project Management at Seneca",
          description:
            "Focusing on leadership, communication, project planning, testing, and risk management.",
        },
        {
          title: "Built TRIPTIMIZER - a route optimization tool",
          description:
            "While juggling work and studies, I built a web application to streamline the process of planning and optimizing your trips. Mainly targeted at Realtors. Using React, Next JS, TypeScript and Google Distance Matrix API.",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          title: "Travelled to Toronto, Canada",
          description:
            "Studied project management in IT at Seneca College (now Seneca Polytechnic). In Toronto.",
        },
      ],
    },
    {
      title: "2021",
      content: [
        {
          title: "Promoted to Senior Frontend Engineer",
          description:
            "Worked closely with project managers, and other stakeholders to define project requirements, scope, and timelines. Designed, developed, and maintained software systems for logistics management, including transportation management systems and warehouse management systems.",
        },
      ],
    },
    {
      title: "2019",
      content: [
        {
          title: "Also got hired as a part-time Frontend Developer at Heroshe",
          description:
            "Got hired via a referral from a friend. A one month gig ended up becoming a full-time position. Spent the next 4 years working for Heroshe logistics.",
        },
        {
          title: "Got my 1st full-time employment at Datacrest",
          description:
            "Got hired as a Solutions Architect at Datacrest Technologies. A digital agency that specializes in building custom software solutions for clients across various industries. From banking software to e-commerce to portfolio to law firms and business websites.",
        },
        {
          title: "Built a simple word game called TAPWORD",
          description:
            "Built a simple and fun dictionary word game using React, SCSS and spell check api.",
        },
      ],
    },
    {
      title: "2018",
      content: [
        {
          title: "Learnt React, Vue and Node JS",
          description:
            "Decided to learn React, Vue and Node JS to expand my skillset and stay up-to-date with the latest frontend technologies.",
        },
        {
          title: "Built an eVoting Platform called PEPVOTE",
          description:
            "Developed a secure and scalable voting platform using PHP and Laravel. PEPVOTE was used in several elections and received positive feedback from users and requests for future enhancements.",
        },
      ],
    },
    {
      title: "2017",
      content: [
        {
          title: "Graduated with Computer Science degree",
          description:
            "Completed my Bachelor's degree with honors and specialization in software engineering.",
        },
      ],
    },
    {
      title: "2016",
      content: [
        {
          title: "My 2nd IT at Afe Babalola University",
          description:
            "Worked at the ICT Department. Here I honed my skills in PHP and Laravel by building CBT Software for university exams.",
        },
      ],
    },
    {
      title: "2015",
      content: [
        {
          title: "My 1st IT at Megalf",
          description:
            "Did my first Industrial Training at a company named Megalf Global Networks. Where I got hands-on experience building complex forms and software with PHP and Laravel for different clients and also getting paid for it.",
        },
        {
          title: "Tried Codeigniter but settled with Laravel",
          description:
            "Built some small projects using Codeigniter and Laravel.",
        },
        {
          title: "Started learning PHP and Laravel 5",
          description:
            "Thanks to PHP, I can build dynamic websites and web applications.",
        },
      ],
    },
    {
      title: "2014",
      content: [
        {
          title: "Finally picked up web development and never turned back",
          description:
            "Started learning HTML, CSS and JavaScript due to flexibility to build better GUIs in the browser.",
        },
        {
          title: "Also learnt C Programming",
          description:
            "Also learnt C Programming thanks to a course in my 2nd year at the University.",
        },
        {
          title: "Started learning Java",
          description:
            "Began my journey into programming with Java, thanks to a Senior at my University.",
        },
      ],
    },
    {
      title: "2013",
      content: [
        {
          title: "Got Admitted to study Computer Science",
          description:
            "I was admitted to study Computer Science at UNILORIN University.",
        },
      ],
    },
  ];
  return (
    <div
      ref={ref}
      className="shadow-section-inset dark:shadow-section-inset-dark my-6 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800"
    >
      <SectionHeading className="mt-4 mb-10">
        Timeline of Achievements
      </SectionHeading>
      {data.map((year, index) => (
        <div content="px-4 py-1 " key={year.title} className="mb-4">
          <motion.h2
            initial={{
              filter: "blur(10px)",
              opacity: 0,
            }}
            animate={{
              filter: isInView ? "blur(0px)" : "blur(10px)",
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.1 * index,
            }}
            className="mb-2 w-fit rounded-md px-2 py-0.5 font-bold text-neutral-900 shadow-[var(--shadow-aceternity)] dark:text-neutral-100"
          >
            {year.title}
          </motion.h2>
          <div className="flex flex-col gap-4">
            {year.content.map((item, idx) => (
              <div key={item.title} className="pl-4">
                <Step isInView={isInView} idx={idx}>
                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.2 * idx,
                    }}
                    className="text-neutral-600 dark:text-neutral-400"
                  >
                    {item.title}
                  </motion.h3>
                </Step>
                {item.description && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.3 * idx,
                    }}
                    className="pt-1 pl-6 text-sm text-neutral-400 dark:text-neutral-500"
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({
  className,
  children,
  isInView,
  idx,
}: {
  className?: string;
  children: React.ReactNode;
  isInView: boolean;
  idx: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2 * idx,
      }}
      className={cn("flex items-start gap-2", className)}
    >
      <IconCircleCheckFilled className="mt-1 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
      {children}
    </motion.div>
  );
};
