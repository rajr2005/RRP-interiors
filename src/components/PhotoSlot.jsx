function PhotoSlot({ image, label, note }) {
  return (
    <article className="photo-slot">
      {image ? (
        <img className="photo-image" src={image} alt={label} />
      ) : (
        <div className="photo-placeholder">
          <span>{label}</span>
        </div>
      )}
      <div className="photo-slot-copy">
        <h3>{label}</h3>
        <p>{note}</p>
      </div>
    </article>
  );
}

export default PhotoSlot;
