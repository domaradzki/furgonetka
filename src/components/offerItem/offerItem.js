function OfferItem({ title, description, children }) {
  return (
    <div className="offer__item">
      <div className="offer__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="offer__image">{children}</div>
    </div>
  );
}

export default OfferItem;
