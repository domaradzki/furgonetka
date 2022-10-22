import SectionTitle from '../sectionTitle/sectionTitle';

function SectionIntro({ description, children }) {
  return (
    <div className="section__intro">
      <SectionTitle>{children}</SectionTitle>
      <p className="section__paragraph">{description}</p>
    </div>
  );
}

export default SectionIntro;
