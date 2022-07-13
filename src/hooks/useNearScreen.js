import { useEffect, useRef, useState } from "react";

export default function useNearScreen() {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(function () {
    const onChange = (entries, observer) => {
      const el = entries[0];

      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "50px"
    });

    observer.observe(elementRef.current);

    return () => observer && observer.disconnect();
  });

  return { show, elementRef };
}
