import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";

import { theme } from "@krafton-soc/common/styles/theme";

const BehindPhotoContainer = styled.div`
  width: 100%;
  height: 800px;
  position: relative;

  background-color: green;
`;

const BehindPhoto = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.hoverGray};
`;

const LeftButton = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  width: 49px;
  height: 49px;

  &:hover {
    color: ${theme.colors.white};
  }

  transform: rotate(180deg);

  img {
    filter: brightness(0.4) saturate(100%) invert(0%) sepia(0%) saturate(0%)
      hue-rotate(0deg) brightness(100%) contrast(100%);
  }
  &:hover img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
      hue-rotate(0deg) brightness(100%) contrast(100%);
  }

  background-color: darkslateblue;
`;

const RightButton = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  width: 49px;
  height: 49px;

  background-color: darkblue;

  transform: rotate(0deg);
  img {
    filter: brightness(0.4) saturate(100%) invert(0%) sepia(0%) saturate(0%)
      hue-rotate(0deg) brightness(100%) contrast(100%);
  }
  &:hover img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
      hue-rotate(0deg) brightness(100%) contrast(100%);
  }
`;

type PhotoDataType = {
  src: string;
  alt: string;
};

const photoData: PhotoDataType[] = [
  { src: "/images/DesignStory/Gallery/image0.png", alt: "photo0" },
  { src: "/images/DesignStory/Gallery/image1.png", alt: "photo1" },
  { src: "/images/DesignStory/Gallery/image2.png", alt: "photo2" },
];
const DesignStoryGalleryPhoto = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftButtonClick = () => {
    setCurrentIndex((photoData.length + currentIndex - 1) % photoData.length);
  };

  const handleRightButtonClick = () => {
    setCurrentIndex((currentIndex + 1) % photoData.length);
  };
  return (
    <BehindPhotoContainer>
      <BehindPhoto>
        <Image
          src={photoData[currentIndex].src}
          alt={photoData[currentIndex].alt}
          fill
        />
      </BehindPhoto>
      <LeftButton onClick={handleLeftButtonClick}>
        <Image src={"/icons/Direction.svg"} alt="Direction" fill />
      </LeftButton>
      <RightButton onClick={handleRightButtonClick}>
        <Image src={"/icons/Direction.svg"} alt="Direction" fill />
      </RightButton>
    </BehindPhotoContainer>
  );
};

export default DesignStoryGalleryPhoto;
