import ContactCard from "@/_components/cards/Contact-Card";

export default function Contacts() {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Contatti</h2>
      <div className="flex flex-col items-center gap-4">
        <ContactCard
          contactType="Email"
          contact="luiForDev@gmail.com"
          type="email"
        />
        <ContactCard
          contactType="Linkedin"
          contact="https://www.linkedin.com/in/luigi-forte-0b8123143/"
          type="linkedin"
        />
      </div>
    </section>
  );
}
