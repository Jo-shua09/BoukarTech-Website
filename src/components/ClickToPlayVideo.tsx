import { useMemo, useState } from "react";

interface ClickToPlayVideoProps {
  videoSrc: string;
  posterSrc?: string;
  className?: string;
  autoplayOnClick?: boolean;
}

export default function ClickToPlayVideo({ videoSrc, posterSrc, className, autoplayOnClick = true }: ClickToPlayVideoProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  const srcProps = useMemo(() => {
    return shouldLoad ? { src: videoSrc } : {};
  }, [shouldLoad, videoSrc]);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setShouldLoad(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setShouldLoad(true);
      }}
      className={className}
      aria-label="Play video"
    >
      <video
        preload="none"
        playsInline
        controls
        {...srcProps}
        poster={posterSrc}
        onClick={(e) => e.stopPropagation()}
        onCanPlay={(e) => {
          if (!autoplayOnClick) return;
          e.currentTarget.play().catch(() => undefined);
        }}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
}
