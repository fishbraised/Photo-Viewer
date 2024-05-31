import PhotoViewer from './Components/PhotoViewer';
import './App.css';

const imagesList = [
  {
    id: 0,
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg',
    thumbnailUrl:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl:
      'https://www.planetware.com/wpimages/2019/10/malaysia-best-places-to-visit-langkawi.jpg',
    thumbnailUrl:
      'https://www.planetware.com/wpimages/2019/10/malaysia-best-places-to-visit-langkawi.jpg',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://blog.globusjourneys.com/wp-content/uploads/2018/07/hallstatt-austria-cr-getty-1-820x560.jpg',
    thumbnailUrl:
      'https://blog.globusjourneys.com/wp-content/uploads/2018/07/hallstatt-austria-cr-getty-1-820x560.jpg',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: 3,
    imageUrl:
      'https://a.cdn-hotels.com/gdcs/production115/d1326/a5981c45-4f4d-44b8-a581-d9b10985fcb7.jpg',
    thumbnailUrl:
      'https://a.cdn-hotels.com/gdcs/production115/d1326/a5981c45-4f4d-44b8-a581-d9b10985fcb7.jpg',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: 4,
    imageUrl:
      'https://c.ndtvimg.com/2023-01/05knuo7_switzerland_625x300_04_January_23.jpg',
    thumbnailUrl:
      'https://c.ndtvimg.com/2023-01/05knuo7_switzerland_625x300_04_January_23.jpg',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: 5,
    imageUrl:
      'https://assets-news.housing.com/news/wp-content/uploads/2022/07/21152615/MALDIVES-FEATURE-compressed.jpg',
    thumbnailUrl:
      'https://assets-news.housing.com/news/wp-content/uploads/2022/07/21152615/MALDIVES-FEATURE-compressed.jpg',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://content.skyscnr.com/m/4c96fd9216456af8/Large-GettyImages-475025974.jpg',
    thumbnailUrl:
      'https://content.skyscnr.com/m/4c96fd9216456af8/Large-GettyImages-475025974.jpg',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl:
      'https://cdn.britannica.com/30/94430-050-D0FC51CD/Niagara-Falls.jpg',
    thumbnailUrl:
      'https://cdn.britannica.com/30/94430-050-D0FC51CD/Niagara-Falls.jpg',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
];

const App = () => <PhotoViewer imagesList={imagesList} />;

export default App;
