import { useState } from "react";

export function useLoadMore(totalItems: number, step: number = 6) {
  const [visibleCount, setVisibleCount] = useState(step);

  const loadMore = () => {
    setVisibleCount((prev) => prev + step);
  };

  const hasMore = visibleCount < totalItems;

  return {
    visibleCount,
    loadMore,
    hasMore,
  };
}