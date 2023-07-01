import Resources from "@/components/Resources";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl" style={{ fontFamily: "HeaderFont" }}>
        Digital agency
      </h1>

      <Resources/>
    </>
  );
}
