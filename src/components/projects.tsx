/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <using html for project description> */
"use client";

import Image from "next/image";
import { type Project } from "@/constants/projects";
import { SectionHeading } from "./section-heading";
import { MotionDiv } from "@/components/motion-div";
import Link from "next/link";

export const Projects = ({
  projects = [],
  children,
}: {
  projects?: Project[];
  children?: React.ReactNode;
}) => {
  return (
    <div className="shadow-section-inset dark:shadow-section-inset-dark my-4 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800">
      <SectionHeading delay={0.2}>I love building things</SectionHeading>
      <div className="mt-8 flex flex-col gap-8">
        {projects.map((project, idx) => (
          <MotionDiv
            key={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.05 * idx }}
          >
            <div className="flex flex-col justify-between md:flex-row gap-4">
              {project.src != null && (
                <div className="shrink-0 w-full md:w-1/3">
                  <Image
                    src={project.src}
                    alt={project.title}
                    height={200}
                    width={200}
                    className="w-full rounded object-cover transition duration-200"
                  />
                </div>
              )}
              <div className="flex-1 flex flex-col gap-2">
                {project.href != null ? (
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline underline-offset-4"
                  >
                    <h2 className="text-base font-bold tracking-tight">
                      {project.title}
                    </h2>
                  </Link>
                ) : (
                  <h2 className="text-primary text-base font-bold tracking-tight">
                    {project.title}
                  </h2>
                )}
                {/*<p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {project.description}
                </p>*/}
                <p
                  className="text-neutral-600 dark:text-neutral-400 text-sm"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
                <p className="text-secondary text-sm">
                  {project.stack.join(" | ")}
                </p>
                {/*<div className="mt-2 flex max-w-56 flex-wrap gap-1">
                  <LayoutGroup>
                    {project.stack.map((stack) => (
                      <StackItem
                        key={stack}
                        technology={stack}
                        className="-mr-2 hover:z-10"
                      />
                    ))}
                  </LayoutGroup>
                </div>*/}
              </div>
            </div>
          </MotionDiv>
        ))}
        {children}
      </div>
    </div>
  );
};
