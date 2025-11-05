import Image from "next/image";
import CategoryCarousel from "./components/Category/CategoryCarousel";

export default function Home() {
  return (
    <>
      <CategoryCarousel category="popular" />
      <CategoryCarousel category="top_rated" />
      <CategoryCarousel category="upcoming" />
    </>
  );
}
