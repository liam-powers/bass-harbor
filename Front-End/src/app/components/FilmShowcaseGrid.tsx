'use client'

import ImageGallery from "react-image-gallery";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";

const images = Array.from({ length: 20 }, (_, index) => ({
    original: `/filmphotos/${index + 1}.webp`,
    alt: `Image ${index + 1}`,
    thumbnail: `/filmphotos/${index + 1}.webp`,
}));

export default function FilmShowcaseGrid() {
    return (
        <div>
            <ImageGallery items={images} 
            />
        </div>
    );
}