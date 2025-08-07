'use client'

import Image from "next/image";
import { useState } from "react";

const images = [
  "/new-main-image.png",
  "/restaurant-thumbnail-1.png",
  "/restaurant-thumbnail-2.png",
  "/restaurant-thumbnail-3.png",
  "/restaurant-thumbnail-4.png",
];

export function ImageGallery() {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
      <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-4">
        <Image src={mainImage || "/placeholder.svg"} alt="Main property view" layout="fill" objectFit="cover" />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.slice(1).map((img, index) => (
          <div key={index} className="relative w-full h-28 rounded-lg overflow-hidden cursor-pointer" onClick={() => setMainImage(img)}>
            <Image src={img || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} layout="fill" objectFit="cover" />
            {index === 3 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold">
                +6 şəkil
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mt-4 flex gap-6">
        <span>Elanın nömrəsi: 123</span>
        <span>Baxış: 2345</span>
        <span>Yeniləndi: 14.07.2025, 10:42</span>
      </div>
    </div>
  );
}
