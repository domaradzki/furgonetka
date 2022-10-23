function CTAButton({ className = '', children }) {
  return (
    <div className={`button ${className}`}>
      <button>{children}</button>
    </div>
  );
}

export default CTAButton;
