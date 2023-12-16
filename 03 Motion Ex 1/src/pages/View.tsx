import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
export default function View() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <div className="min-h-screen flex justify-center items-center bg-teal-100 text-4xl font-semibold">
      <div className="h-[500vh]"></div>
      <div ref={ref} className="h-32 w-32 bg-black rounded-3xl" />
      <div className="h-[500vh]"></div>
    </div>
  );
}
