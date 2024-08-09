import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css';
import './CarouselKUst.css';  // Import your custom CSS file
import { motion } from 'framer-motion';

import image1 from '../assets/certificate/Good_student.jpg';
import image2 from '../assets/certificate/KU_Digital_Literacy.jpg';


const images = [
  {
    src: image1,
    name: 'นิสิตผลการเรียนดี',
    details: 'นิสิตที่มีผลการเรียนดีและมีเกรดเฉลี่ย 3.50 ขึ้นไป',
  },
  {
    src: image2,
    name: 'ทดสอบสมรรถนะด้านดิจิทัล',
    details: 'ผ่านการทดสอบสมรรถนะด้านดิจิทัลสำหรับนิสิตมหาวิทยาลัยเกษตรศาสตร์',
  },
];

const ImageCarouselKU = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const popupRef = useRef(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupRef]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.h2 
                              whileInView={{ opacity: 1, y: 0 }}
                              initial={{ opacity: 0, y: -100 }}
                              transition={{ duration: 0.5 }}
      className="my-20 text-center text-4xl">University Certificate</motion.h2>
      <motion.div 
                              whileInView={{ opacity: 1, x: 0 }}
                              initial={{ opacity: 0, x: -100 }}
                              transition={{ duration: 1 }}
      className="w-full max-w-4xl">
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={80}
          onClickItem={(index) => handleImageClick(images[index])}
          renderThumbs={() => null}
        >
          {images.map((image, index) => (
            <div key={index} className="p-2">
              <img
                src={image.src}
                alt={image.name}
                className="object-contain h-72 w-full rounded-lg cursor-pointer"
                role="button"
                aria-label={`View details for ${image.name}`}
              />
            </div>
          ))}
        </Carousel>
      </motion.div >
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          <div
            className="bg-white p-6 rounded-lg max-w-3xl max-h-3xl overflow-auto relative m-4"
            ref={popupRef}
          >
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              onClick={closePopup}
              aria-label="Close popup"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 id="popup-title" className="text-xl font-bold mb-2">
              {selectedImage.name}
            </h2>
            <img
              src={selectedImage.src}
              alt={selectedImage.name}
              className="object-contain max-h-60 w-full rounded-lg mb-4"
            />
            <p className="mb-4">{selectedImage.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarouselKU;
