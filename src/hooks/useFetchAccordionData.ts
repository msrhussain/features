import { useEffect, useState } from "react";
import { caches } from "../utils";

const useFetchAccordionData = <T>(endPoint: string) => {
  const [resultState, setResultState] = useState<DataState<T>>({
    payload: null,
    error: "",
    isLoading: true,
  });

  const fetchAccordionData = async (signal: AbortSignal) => {
    // check if data then get from here
    if (caches.has(endPoint)) {
      setResultState({
        payload: caches.get(endPoint),
        isLoading: false,
        error: "",
      });
      return;
    }
    try {
      const res = await fetch(endPoint, { signal, cache: "default" });
      if (!res.ok) throw new Error("response is not ok, check URL");
      const payload: T = await res.json();
      caches.set(endPoint, payload);
      setResultState((prevState) => ({
        ...prevState,
        payload,
      }));
    } catch (err) {
      const { message, name } = err as Error;
      if (name === "AbortError") return;
      setResultState((prevState) => ({
        ...prevState,
        error: message,
      }));
    } finally {
      setResultState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchAccordionData(signal);

    return () => {
      controller.abort();
    };
  }, [endPoint]);

  return resultState;
};

export { useFetchAccordionData };
