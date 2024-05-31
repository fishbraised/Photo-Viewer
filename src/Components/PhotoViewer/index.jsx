import { Component } from 'react';
import './index.css';
import PhotoItem from '../ThumbnailItem';

class PhotoViewer extends Component {
  state = { activeImageId: 0 };

  updateImage = (id) => {
    this.setState({ activeImageId: id });
  };

  render() {
    const { imagesList } = this.props;
    const { activeImageId } = this.state;

    const activeImageObj = imagesList[activeImageId];

    return (
      <div className="bg-con">
        <div className="content-con">
          <img
            src={activeImageObj.imageUrl}
            alt={activeImageObj.imageAltText}
          />
          <h1>Nature's Beauty Through the Lens</h1>
          <p>Creator's Photo Studio</p>
          <ul className="photos-con">
            {imagesList.map((imageItem) => (
              <PhotoItem
                key={imageItem.id}
                imageItem={imageItem}
                updateImage={this.updateImage}
                activeImageId={activeImageId}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default PhotoViewer;
