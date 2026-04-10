import { useState } from 'react';
import PhotoSlot from '../components/PhotoSlot.jsx';

const categoryLabels = {
  bedroom: 'Bedroom',
  hall: 'Hall',
  kitchen: 'Kitchen'
};

const emptyCategoryNotes = {
  bedroom: 'Add bedroom images into src/assets/photos/bedroom and they will appear here automatically.',
  hall: 'Add hall images into src/assets/photos/hall and they will appear here automatically.',
  kitchen: 'Add kitchen images into src/assets/photos/kitchen and they will appear here automatically.'
};

const imageModules = import.meta.glob('../assets/photos/**/*.{jpg,jpeg,png,webp,avif,gif}', {
  eager: true,
  import: 'default'
});

const buildCategoryImages = (category) =>
  Object.entries(imageModules)
    .filter(([path]) => path.includes(`/photos/${category}/`))
    .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
    .map(([path, image]) => {
      const fileName = path.split('/').pop() || `${category}-photo`;
      const cleanName = fileName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      const title = cleanName.replace(/\b\w/g, (character) => character.toUpperCase());

      return {
        image,
        label: title,
        note: `${categoryLabels[category]} project image`
      };
    });

function PhotosPage() {
  const [activeCategory, setActiveCategory] = useState('bedroom');
  const currentPhotos = buildCategoryImages(activeCategory);

  return (
    <div className="page">
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Project Gallery</p>
          <h1>Project gallery that loads images from folders automatically</h1>
          <p>
            Choose a category below, then add images to that folder inside the project. The gallery
            will show them automatically.
          </p>
        </div>

        <div className="category-tabs">
          {Object.keys(categoryLabels).map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? 'tab-button active' : 'tab-button'}
              onClick={() => setActiveCategory(category)}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        <div className="photo-grid">
          {currentPhotos.length > 0 ? (
            currentPhotos.map((photo) => (
              <PhotoSlot
                key={`${activeCategory}-${photo.label}`}
                image={photo.image}
                
                note={photo.note}
              />
            ))
          ) : (
            <PhotoSlot
              label={`${categoryLabels[activeCategory]} Images`}
              note={emptyCategoryNotes[activeCategory]}
            />
          )}
        </div>
      </section>
    </div>
  );
}

export default PhotosPage;
