import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useObserver = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '0px 0px -200px 0px',
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  return { ref, animation };
};

export default useObserver;