/**
 * Helper container for background videos with HLS support
 */
import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

interface HLSVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  className?: string;
}

export function HLSVideo({ src, ...props }: HLSVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check if it's an HLS stream source
    if (src.endsWith(".m3u8")) {
      if (Hls.isSupported()) {
        const hls = new Hls({
          // fine-tuning for background looping video
          startLevel: -1,
          capLevelToPlayerSize: true,
        });
        hls.loadSource(src);
        hls.attachMedia(video);
        return () => {
          hls.destroy();
        };
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Fallback for Safari natively supporting HLS
        video.src = src;
      }
    } else {
      // Standard video file
      video.src = src;
    }
  }, [src]);

  return <video ref={videoRef} {...props} />;
}
