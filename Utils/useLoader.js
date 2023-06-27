import { useState, useEffect } from "react";

import { useRouter } from "next/router";
const LOADER_THRESHOLD = 250;

export const useLoader = () => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    let timer;

    const start = () => (timer = setTimeout(() => setLoading(true), LOADER_THRESHOLD));

    const end = () => {
      if (timer) {
        clearTimeout(timer);
      }
      setLoading(false);
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);

      if (timer) {
        clearTimeout(timer.current);
      }
    };
  }, [router.events]);
  return { isLoading };
};
