import React, { useState } from "react";
import "./Gallery.css";


import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";

const images = [
    { src: house1, title: "Дом №1", description: "Кирпичный дом с террасой" },
    { src: house2, title: "Дом №2", description: "Фундамент для загородного дома" },
    { src: house3, title: "Дом №3", description: "Двухэтажный дом с балконом" },
    { src: house4, title: "Дом №4", description: "Строительство дома из кирпича" },
    { src: house5, title: "Дом №5", description: "Современный дом с гаражом" },
];

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery-section">
            <h2>Наши проекты</h2>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item" onClick={() => openLightbox(image)}>
                        <img src={image.src} alt={image.title} />
                        <div className="gallery-info">
                            <h3>{image.title}</h3>
                            <p>{image.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content">
                        <img src={selectedImage.src} alt={selectedImage.title} />
                        <h3>{selectedImage.title}</h3>
                        <p>{selectedImage.description}</p>
                        <button onClick={closeLightbox}>Закрыть</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;
