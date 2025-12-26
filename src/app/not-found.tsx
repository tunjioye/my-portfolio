import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Tunji Oyeniran - Not Found",
  description: "This page could not be found.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <div className="flex flex-col my-[55%] text-center justify-center items-center">
          404 | This page could not be found.
        </div>
      </Container>
    </div>
  );
}
