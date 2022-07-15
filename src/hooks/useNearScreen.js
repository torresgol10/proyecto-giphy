import { useEffect, useRef, useState } from "react";

export default function useNearScreen({ externalRef, once = true } = {}) {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(function () {
    const element = externalRef ? externalRef.current : elementRef.current;

    const onChange = (entries, observer) => {
      const el = entries[0];

      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "50px"
    });

    if (element) observer.observe(element);

    return () => observer && observer.disconnect();
  });

  return { show, elementRef };
}
