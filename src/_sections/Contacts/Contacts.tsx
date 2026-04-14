import ContactCard from "@/_components/cards/Contact-Card";

export default function Contacts() {
  return (
    <section className="min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Contatti</h2>
      <div className="grid grid-cols-1 gap-4">
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
