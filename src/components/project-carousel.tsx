"use client";

import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { ProjectImage } from "@/constants/projects";

export function ProjectCarousel({
  images,
  projectTitle,
}: {
  images: ProjectImage[];
  projectTitle: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];
  const hasMultipleImages = images.length > 1;

  const showPreviousImage = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    });
  }, [images.length]);

  const showNextImage = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    });
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowLeft") {
        showPreviousImage();
      } else if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, showNextImage, showPreviousImage]);

  return (
    <>
      <Carousel
        opts={{ loop: true }}
        className="group w-full"
        aria-label={`${projectTitle} screenshots`}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={image.src}>
              <div className="overflow-hidden rounded-md border border-neutral-200 bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-900">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group/image relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  aria-label={`View ${image.label} screenshot full screen`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-300 group-hover/image:scale-[1.02]"
                  />
                  <span className="absolute right-3 bottom-3 inline-flex items-center gap-1 rounded bg-neutral-950/80 px-2 py-1 text-xs font-medium text-white opacity-0 transition group-hover/image:opacity-100 group-focus-visible/image:opacity-100">
                    <Maximize2 className="size-3.5" aria-hidden="true" />
                    Full screen
                  </span>
                </button>
              </div>
              <div className="mt-2 flex items-center justify-between gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                <span>{image.label}</span>
                <span>
                  {index + 1} / {images.length}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {hasMultipleImages && (
          <>
            <CarouselPrevious className="left-2 md:-left-3" />
            <CarouselNext className="right-2 md:-right-3" />
          </>
        )}
      </Carousel>

      {activeImage && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle}: ${activeImage.label}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/95 p-4"
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute inset-0"
            aria-label="Close full-screen screenshot"
          />
          <div className="relative z-10 flex w-[min(100%,calc(160vh-7.2rem))] max-w-7xl flex-col gap-4">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 px-1 text-sm text-white">
              <span className="truncate text-neutral-300">
                {activeImage.label}
              </span>
              {hasMultipleImages && (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-sm transition hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
                    aria-label="Previous screenshot"
                  >
                    <ArrowLeft className="size-4" aria-hidden="true" />
                  </button>
                  <span className="min-w-10 text-center tabular-nums">
                    {activeIndex + 1} / {images.length}
                  </span>
                  <button
                    type="button"
                    onClick={showNextImage}
                    className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-sm transition hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
                    aria-label="Next screenshot"
                  >
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </button>
                </div>
              )}
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="col-start-3 inline-flex size-8 cursor-pointer items-center justify-center justify-self-end rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-sm transition hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
                aria-label="Close full-screen screenshot"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
