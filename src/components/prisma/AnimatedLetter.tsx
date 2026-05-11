import { useTransform, motion, MotionValue } from "framer-motion";

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  scrollYProgress: MotionValue<number>;
}

const AnimatedLetter = ({ char, index, totalChars, scrollYProgress }: AnimatedLetterProps) => {
  const charProgress = index / totalChars;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);

  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

  if (char === " ") {
    return <span>{" "}</span>;
  }

  return (
    <motion.span style={{ opacity, display: "inline" }}>
      {char}
    </motion.span>
  );
};

export default AnimatedLetter;
