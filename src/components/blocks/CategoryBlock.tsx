"use client";

import { categories } from "@/data/categories";
import { useTimeout } from "@/hooks/use-timeout";
import CategoryCarousel from "../home/CategoryCarousel";
import Section from "../ui/section";
import BlockLoader from "../loader/block-loader";

export default function CategoryBlock() {
  const { state } = useTimeout();

  return (
    <Section title="Trending" headerClassName="mb-4 md:mb-5 xl:mb-6">
      {!state && <BlockLoader />}
      {state && <CategoryCarousel data={categories} />}
    </Section>
  );
}
