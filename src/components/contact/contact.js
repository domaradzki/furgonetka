import Form from '../form/form';
import SectionIntro from '../sectionIntro/sectionIntro';

function Contact() {
  return (
    <section className="contact">
      <SectionIntro description="Nadajesz dużo przesyłek kurierskich krajowych? Napisz do nas, a oddzwonimy, żeby porozmawiać o indywidualnej ofercie.">
        Zapytaj o <em>ofertę indywidualną</em>
      </SectionIntro>
      <Form />
    </section>
  );
}

export default Contact;
