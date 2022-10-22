function FeatureItem({ name, children }) {
  return (
    <div className="feature__item">
      <div className="feature_iamge">{children}</div>
      <div className="feature__content">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default FeatureItem;
