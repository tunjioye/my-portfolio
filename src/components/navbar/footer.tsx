import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import { contacts } from "@/constants/contacts";
import { Container } from "../container";

export const Footer = () => {
  return (
    <Container className="flex justify-between border-t border-neutral-100 px-8 md:px-10 py-3 md:py-3 dark:border-neutral-800 flex-wrap gap-2">
      <p className="text-xs text-neutral-500">
        &copy; {new Date().getFullYear()}, Built with{" "}
        <Link
          href="https://pro.aceternity.com/products/minimal-portfolio-template"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline underline-offset-4"
        >
          Minimal Portfolio Template
        </Link>
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link href={contacts.Twitter} target="_blank" rel="noopener noreferrer">
          <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200" />
        </Link>
        <Link
          href={contacts.LinkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200" />
        </Link>
        <Link href={contacts.GitHub} target="_blank" rel="noopener noreferrer">
          <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200" />
        </Link>
      </div>
    </Container>
  );
};
