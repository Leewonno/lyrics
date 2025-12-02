import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useOnceObserver = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
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

export default useOnceObserver;