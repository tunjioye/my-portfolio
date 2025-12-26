import Link from "next/link";
import { contacts } from "@/constants/contacts";
import { SectionHeading } from "./section-heading";

export const CTA = () => {
  return (
    <div className="my-4 px-4 py-6">
      <SectionHeading delay={0.2}>Get in touch</SectionHeading>
      <p className="text-secondary max-w-xl py-4 text-sm md:text-base">
        I'm open to new opportunities. Whether you have a question or want to
        say hi, feel free to reach out.
      </p>
      <div className="flex flex-wrap">
        {Object.entries(contacts).map(([key, value]) => (
          <Link
            key={key}
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4 mr-3"
          >
            {key}
          </Link>
        ))}
      </div>
    </div>
  );
};
