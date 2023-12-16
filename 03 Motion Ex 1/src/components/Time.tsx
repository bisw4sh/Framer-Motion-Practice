import { useTime, useTransform, motion } from "framer-motion";

export default function Time() {
  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 4000], // For every 4 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false }
  );

  return (
    <div className="example-container">
      <motion.div
        drag
        dragSnapToOrigin={true}
        style={{ rotate }}
        className="h-32 w-32 rounded-[45%] bg-gradient-to-r from-indigo-500 to-emerald-500 hover:hue-rotate-60"
      />
    </div>
  );
}
