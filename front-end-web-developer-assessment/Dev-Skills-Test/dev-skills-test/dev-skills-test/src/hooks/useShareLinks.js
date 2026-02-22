import { useEffect, useMemo, useState } from "react";

export function useShareLinks() {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  const facebookHref = useMemo(
    () =>
      shareUrl
        ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareUrl
          )}`
        : "#",
    [shareUrl]
  );

  const xHref = useMemo(
    () =>
      shareUrl
        ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            shareUrl
          )}`
        : "#",
    [shareUrl]
  );

  return { shareUrl, facebookHref, xHref };
}
