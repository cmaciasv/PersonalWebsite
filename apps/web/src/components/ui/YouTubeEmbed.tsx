"use client";
import Image from 'next/image';
import React, { useState } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  thumbnailUrl: string;
  gifUrl: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title, thumbnailUrl, gifUrl }) => {
  const [playerReady, setPlayerReady] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div className="relative w-[90%] mx-auto aspect-video rounded-lg overflow-hidden mb-4">
      {!playerReady && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={() => setPlayerReady(true)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Image
            src={isHovering ? gifUrl : thumbnailUrl}
            alt={`Thumbnail for ${title}`}
            width={1280}
            height={720}
            priority={false}
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
      {playerReady && (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeEmbed;
