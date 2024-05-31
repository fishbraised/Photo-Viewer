import './index.css';

const PhotoItem = (props) => {
  const { imageItem, updateImage, activeImageId } = props;

  const onThumbnailClick = () => {
    updateImage(imageItem.id);
  };

  return (
    <li>
      <button onClick={onThumbnailClick}>
        <img
          className={activeImageId === imageItem.id && 'active'}
          src={imageItem.thumbnailUrl}
          alt={imageItem.thumbnailAltText}
        />
      </button>
    </li>
  );
};

export default PhotoItem;
