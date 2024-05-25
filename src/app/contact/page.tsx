import { Hero } from "@/components/hero";
import { ContactForm } from "./_components/contact-form";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Hero
        pageLabel="contact"
        title="Let's grab a virtual coffee or drop a line"
        highlightedTitleWords={["drop", "a", "line"]}
        description="Whether you have a project you want to work on together or just want to have a chat, you are in the right place: let's get in touch."
      />
      <ContactForm/>
    </div>
  );
};

export default ContactPage;
