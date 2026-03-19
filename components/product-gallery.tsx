"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft01Icon, ArrowRight01Icon, PlayCircleIcon, Cancel01Icon } from "hugeicons-react"

type Props = {
  images: { src: string; alt: string }[]
  videoId: string
  videoTitle: string
}

function VideoModal({ videoId, title, onClose }: { videoId: string; title: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
          <span className="text-white text-sm font-medium truncate pr-4">{title}</span>
          <button onClick={onClose} className="flex-shrink-0 text-white/70 hover:text-white transition-colors">
            <Cancel01Icon size={20} color="currentColor" />
          </button>
        </div>
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default function ProductGallery({ images, videoId, videoTitle }: Props) {
  const [activeImage, setActiveImage] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  const prev = () => setActiveImage((i) => (i - 1 + images.length) % images.length)
  const next = () => setActiveImage((i) => (i + 1) % images.length)

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[4/3] shadow-lg">
        <Image
          key={activeImage}
          src={images[activeImage].src}
          alt={images[activeImage].alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        {/* Counter */}
        <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full">
          {activeImage + 1} / {images.length}
        </div>
        {/* Nav arrows */}
        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10">
          <ArrowLeft01Icon size={16} color="currentColor" />
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10">
          <ArrowRight01Icon size={16} color="currentColor" />
        </button>
      </div>

      {/* Thumbnails + video button */}
      <div className="flex gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(i)}
            className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
              i === activeImage ? "border-blue-500 opacity-100 scale-105" : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="64px" />
          </button>
        ))}
        {/* YouTube thumbnail */}
        <button
          onClick={() => setShowVideo(true)}
          className="relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 border-transparent opacity-60 hover:opacity-100 hover:border-red-500 transition-all group"
        >
          <Image
            src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
            alt="Видео"
            fill
            className="object-cover"
            sizes="64px"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
            <PlayCircleIcon size={20} color="white" />
          </div>
        </button>
      </div>

      {/* Watch video CTA */}
      <button
        onClick={() => setShowVideo(true)}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-red-200 bg-red-50 text-red-600 font-semibold text-sm hover:bg-red-100 transition-colors"
      >
        <PlayCircleIcon size={18} color="currentColor" />
        Смотреть официальное видео
      </button>

      {showVideo && (
        <VideoModal videoId={videoId} title={videoTitle} onClose={() => setShowVideo(false)} />
      )}
    </div>
  )
}
