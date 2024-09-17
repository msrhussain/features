export function debounce(func: Function, delay: number) {
  let timer: unknown = null;
  return function (...args: any[]) {
    if (timer) clearTimeout(timer as number);
    timer = setTimeout(() => func(...args), delay);
  };
}

// cache fetched data
export const caches: Record<string, any> = new Map();
