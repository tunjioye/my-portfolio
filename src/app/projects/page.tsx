import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { projects } from "@/constants/projects";

export const metadata: Metadata = {
  title: "Tunji Oyeniran - Projects",
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Projects</Heading>
        <Subheading>
          I'm a passionate software engineer dedicated to crafting elegant
          solutions for complex problems. With expertise in full-stack
          development, I enjoy building mobile friendly applications that make a
          difference.
          {/*Check out some of my works:*/}
        </Subheading>
        <Projects projects={projects} />
        <CTA />
      </Container>
    </div>
  );
}
