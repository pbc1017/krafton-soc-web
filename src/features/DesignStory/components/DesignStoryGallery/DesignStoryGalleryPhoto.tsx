import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";

import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const BehindPhotoContainer = styled.div`
  width: 100%;
  aspect-ratio: 1285/800;
  position: relative;
`;

const BehindPhoto = styled.div`
  width: 100%;
  height: 100%;
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
`;

const RightButton = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  width: 49px;
  height: 49px;

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

const DesignStoryGalleryPhoto = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { deviceType } = useResponsiveStore();

  const photoData: PhotoDataType[] = Array.from({ length: 20 }, (_, index) => ({
    src: `/images/DesignStory/Gallery/디자인이야기_Gallery${String(index + 1).padStart(2, "0")}_${deviceType}.png`,
    alt: `photo${String(index + 1).padStart(2, "0")}`,
  }));

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
