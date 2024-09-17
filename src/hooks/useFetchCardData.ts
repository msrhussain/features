import { useEffect, useRef, useState } from "react";

const useFetchCardData = (
  endPoint: string,
  page: number,
  ...options: any[]
) => {
  const [resultState, setResultState] = useState<CardDataState>({
    payload: [],
    isLoading: false,
    error: "",
  });
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;
    const { signal } = controller;

    const fetchCardData = async () => {
      try {
        setResultState((prevState) => ({ ...prevState, isLoading: true }));
        const res = await fetch(`${endPoint}?page=${page}`, {
          signal,
          ...options,
          cache: "default",
        });

        if (!res.ok) throw new Error("Network response is not ok");
        const cardData = await res.json();
        const payload = cardData?.memes || [];
        setResultState((prevState) => ({
          ...prevState,
          payload: [...prevState.payload, ...payload],
        }));
      } catch (err) {
        if ((err as Error).name === "AbortError") return; // Ignore AbortError
        setResultState((prevState) => ({
          ...prevState,
          error: (err as Error).message,
        }));
      } finally {
        setResultState((prevState) => ({ ...prevState, isLoading: false }));
      }
    };

    fetchCardData();

    return () => {
      controller.abort();
    };
  }, [page]); // Re-fetch when `page` changes

  return resultState;
};

export { useFetchCardData };
