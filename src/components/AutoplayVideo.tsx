import { CSSProperties, useEffect, useRef, useState } from "react";

interface AutoplayVideoProps {
  src: string;
  className?: string;
  poster?: string;
  style?: CSSProperties;
  // First-screen videos (page heroes): in the HTML with autoplay, as before.
  // Every other video waits until it is about to scroll into view, so a page
  // with several videos no longer downloads all of them on load.
  priority?: boolean;
  // Smaller encode served to phones (max-width 767px) in place of `src`.
  mobileSrc?: string;
}

// First frame of each video, shown until the video itself has loaded.
const POSTERS: Record<string, string> = {
  "/videos/content-video-1.mp4": "/videos/posters/content-video-1.webp",
  "/videos/kleia-way-video-3.mp4": "/videos/posters/kleia-way-video-3.webp",
  "/videos/kleia-way-video.mp4": "/videos/posters/kleia-way-video.webp",
  "/videos/harvest-2024-1.mp4": "/videos/posters/harvest-2024-1.webp",
  "/videos/hero-video-3.mp4": "/videos/posters/hero-video-3.webp",
};

const forcePlay = (video: HTMLVideoElement | null) => {
  if (!video) return;

  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.autoplay = true;
  video.loop = true;
  video.controls = false;
  video.setAttribute("muted", "");
  video.setAttribute("autoplay", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "true");

  const playPromise = video.play();
  if (playPromise) {
    playPromise.catch(() => {});
  }
};

export const AutoplayVideo = ({ src, className, poster, style, priority = false, mobileSrc }: AutoplayVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // `active` = the video has its source and plays. A video inside a hidden
  // (display: none) wrapper never becomes active, so it is never downloaded.
  const [active, setActive] = useState(priority);

  useEffect(() => {
    if (active) return;
    const video = videoRef.current;
    if (!video) return;
    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [active]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !active) return;
    // A video that just received its <source> has to be told to load it.
    if (!priority) video.load();

    const handleCanPlay = () => forcePlay(video);
    const handleLoadedData = () => forcePlay(video);
    const handlePageShow = () => forcePlay(video);
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        forcePlay(video);
      }
    };

    forcePlay(video);

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadeddata", handleLoadedData);
    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("loadeddata", handleLoadedData);
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [src, active, priority]);

  return (
    <video
      ref={videoRef}
      autoPlay={active}
      muted
      loop
      playsInline
      preload={active ? "auto" : "none"}
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
      className={className}
      poster={poster ?? POSTERS[src]}
      style={{ pointerEvents: "none", ...style }}
      aria-hidden="true"
      tabIndex={-1}
    >
      {active && mobileSrc && <source src={mobileSrc} type="video/mp4" media="(max-width: 767px)" />}
      {active && <source src={src} type="video/mp4" />}
    </video>
  );
};
