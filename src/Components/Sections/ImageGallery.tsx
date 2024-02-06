import ImageGallery from "react-image-gallery";

const Gallery = ({ startIndex, images }: { startIndex: number, images: any[] }) => {
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      startIndex={startIndex}
    />
  );
};

export default Gallery;
