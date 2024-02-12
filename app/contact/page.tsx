import Title from "../../src/components/Title.js";
import ContactForm from "../../src/components/ContactForm";
import Dropdown from "../../src/components/Faq.js";

export default function Contact() {
    return (
      <>
        <Title name={"CONTACT US"}/>
        
        <ContactForm />

        <Dropdown />
      </>
    );
  }
  