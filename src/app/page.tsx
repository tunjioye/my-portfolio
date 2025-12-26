import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
// import { Experiences } from "@/components/experiences";
import { Flipper } from "@/components/flipper";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
// import { experience } from "@/constants/experience";
import { projects } from "@/constants/projects";
import { Link } from "next-view-transitions";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Scales />
        <div className="flex flex-col sm:flex-row sm:items-center">
          <Heading>Tunji Oyeniran</Heading>
          <Flipper />
        </div>
        <Subheading>
          I am a{" "}
          <mark className="bg-green-100 dark:bg-green-300">
            Senior Software Engineer
          </mark>{" "}
          who loves building mobile friendly applications using <b>{`{`}</b>{" "}
          TypeScript, React, Vue, Node JS, Laravel <b>{`}`}</b> and other modern
          technologies. Also, as a Tech Advocate, I love sharing my experience
          to inspire new minds.
          <br />
          <br />
          <Link
            href="/about"
            className="text-blue-500 hover:underline underline-offset-4"
          >
            Learn more about me.
          </Link>
        </Subheading>
        <Projects projects={projects.slice(0, 3)}>
          <Link
            href="/about"
            className="text-blue-500 hover:underline underline-offset-4"
          >
            Checkout some of my projects.
          </Link>
        </Projects>
        {/*<Experiences experiences={experience} />*/}
        <CTA />
      </Container>
    </div>
  );
}
