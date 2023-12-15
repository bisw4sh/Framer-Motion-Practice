import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAngle } from "../controllers/getAngle";

export default function Arrow() {
  const refArrow = useRef<HTMLDivElement>(null);
  const initialPositionRef = useRef<{
    x: number | undefined;
    y: number | undefined;
  }>({
    x: undefined,
    y: undefined,
  });
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    // Assigning values to initial position after the component is mounted
    if (refArrow.current) {
      const rect = refArrow.current.getBoundingClientRect();
      initialPositionRef.current.x = rect.top + rect.height / 2;
      initialPositionRef.current.y = rect.left + rect.width / 2;
    }
  }, []);

  const handleDrag = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: { point: { x: number; y: number } }
  ) => {
    // console.log("being dragged");
    // Check if initial position is not null before using it
    if (
      initialPositionRef.current.x !== undefined &&
      initialPositionRef.current.y !== undefined
    ) {
      // console.log(
      //   initialPositionRef.current.x,
      //   initialPositionRef.current.y,
      //   info.point.x,
      //   info.point.y
      // );
      const newAngle = getAngle(
        initialPositionRef.current.x,
        initialPositionRef.current.y,
        info.point.x,
        info.point.y
      );
      console.log(newAngle);
      setAngle(newAngle);
    }
  };

  return (
    <motion.div
      ref={refArrow}
      onDrag={handleDrag}
      drag
      whileDrag={{ scale: 1.2, rotate: angle }}
      dragElastic={0.2}
      dragSnapToOrigin={true}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23.981"
        height="24.031"
        className="scale-125 -rotate-45"
      >
        <path d="m19.067 2.086-11.5 11.5 2.829 2.828 11.5-11.5L23.981 7V0h-7l2.086 2.086z" />
        <path d="M8.007 20.031a4.009 4.009 0 0 1 0-8.018v-4a8.009 8.009 0 1 0 8.008 8.008h-4a4.014 4.014 0 0 1-4.008 4.01z" />
      </svg>
    </motion.div>
  );
}
