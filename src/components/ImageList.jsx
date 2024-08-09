import React from 'react';
import styled from 'styled-components';
import wideImage from '../assets/Activity/Act0.jpg'; // Import the wide-angle image
import image1 from '../assets/Activity/Act1.jpg';
import image2 from '../assets/Activity/Act2.jpg';
import image3 from '../assets/Activity/Act3.jpg';
import image4 from '../assets/Activity/Act4.jpg';
import image5 from '../assets/Activity/Act5.jpg';
import image6 from '../assets/Activity/Act6.jpg';

import { motion } from 'framer-motion';

const StyledContainer = styled.div`
  text-align: center;
  padding: 20px;
  position: relative; /* Add this to position the hover message relative to the container */
`;

const WideImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  object-fit: cover;
  position: relative; /* Add this to position the hover message relative to the image */
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: calc(33.33% - 10px); /* 3 images per row with some gap */
  overflow: hidden;

  @media (max-width: 768px) {
    width: calc(50% - 10px); /* 2 images per row on smaller screens */
  }

  @media (max-width: 480px) {
    width: calc(100% - 10px); /* 1 image per row on the smallest screens */
  }

  img {
    width: 100%;
    height: auto;
  }

  &:hover div {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
`;

const HoverMessage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  padding: 10px;
  text-align: center;
`;

const WideImageWrapper = styled.div`
  position: relative;
  margin-bottom: 20px; /* Space between wide image and the grid of smaller images */
  
  &:hover ${HoverMessage} {
    opacity: 1;
    transform: translateY(0);
  }
`;

const images = [
  { src: image1, message: 'AGGIE KPS RUN 2023' },
  { src: image3, message: 'TURN IT ON 14' },
  { src: image6, message: 'KU KPS TED Talk by HUAWEI ICT Academy' },
  { src: image2, message: 'TURN IT ON 14' },
  { src: image4, message: 'ทดสอบสมรรถภาพทางกาย ปี 2565' },
  { src: image5, message: 'งานปลูกข้าววันแม่ประจำปี 2565' },
  // Add more images as needed
];

const ImageList = () => {
  return (
    <StyledContainer>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Activity
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        <WideImageWrapper>
          <WideImage src={wideImage} alt="Wide Angle Landscape" />
          <HoverMessage>อบรมหัวข้อ Soft Skill ในการปฏิบัติงานทางด้านคอมพิวเตอร์และเทคโนโลยีสารสนเทศ โดย บริษัท ซอฟสแควร์</HoverMessage>
        </WideImageWrapper>
        <ImageContainer>
          {images.map((img, index) => (
            <ImageWrapper key={index}>
              <Image src={img.src} alt={`Image ${index + 1}`} />
              <HoverMessage>{img.message}</HoverMessage>
            </ImageWrapper>
          ))}
        </ImageContainer>
      </motion.div>
    </StyledContainer>
  );
};

export default ImageList;
