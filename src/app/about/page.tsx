import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { Timeline } from "@/components/timeline";
import { CTA } from "@/components/cta";

export const metadata: Metadata = {
  title: "Tunji Oyeniran - About",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>About Me</Heading>
        <Subheading className="max-w-2xl">
          I am a{" "}
          <mark className="bg-green-100 dark:bg-green-300">
            Senior Software Engineer
          </mark>{" "}
          who loves building mobile friendly applications using <b>{`{`}</b>{" "}
          TypeScript, React, Vue, Node JS, Laravel <b>{`}`}</b> and other modern
          technologies. Also, as a Tech Advocate, I love sharing my experience
          to inspire new minds.
        </Subheading>

        <Subheading className="max-w-full">
          <mark className="bg-green-100 dark:bg-green-300">
            Highly skilled in using frontend technologies
          </mark>{" "}
          to build a great user experience across desktop, tablets and mobile
          screens. With keen eyes for good design and user experience. My wide
          variety of experience, make me an excellent addition to any team.
        </Subheading>

        <Subheading className="max-w-full">
          Apart from Programming, I have a flair for graphics design and
          sometimes I love to dabble in design using Figma, Canva, Adobe
          Illustrator and Photoshop.
        </Subheading>

        <Subheading className="max-w-3xl">
          Either way, I am always interested in problem solving, web development
          especially design related activities such as building usable user
          interfaces, tutoring, playing strategy games and getting amazed by
          artificial intelligence.
        </Subheading>

        <Timeline />
        <CTA />
      </Container>
    </div>
  );
}
