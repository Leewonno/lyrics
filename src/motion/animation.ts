import { Variants } from 'framer-motion';

export const customVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5, // 자식들 간 애니메이션 시간 간격
    },
  },
};

export const customChildVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};