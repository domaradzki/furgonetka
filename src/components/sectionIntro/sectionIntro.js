import SectionTitle from '../sectionTitle/sectionTitle';

function SectionIntro({
  white,
  padding80,
  paddingTop0,
  description,
  children,
}) {
  const classes = ['section__intro'];
  if (white) {
    classes.push('section__intro--white');
  }
  if (padding80) {
    classes.push('section__intro--pading-80-32');
  }
  if (paddingTop0) {
    classes.push('section__intro--pading-0-32');
  }
  const mergeClasses = classes.join(' ');
  return (
    <div className={mergeClasses}>
      <SectionTitle>{children}</SectionTitle>
      <p className="section__paragraph">{description}</p>
    </div>
  );
}

export default SectionIntro;
