import { Suspense } from "react";
import HomeSkeleton from "@/components/Skeleton/HomeSkeleton";
import HomeSection from "@/components/Home/HomeSection";

export default function Home() {
  return (
    <>
      <Suspense fallback={<HomeSkeleton />}>
        <HomeSection />
      </Suspense>
    </>
  );
}