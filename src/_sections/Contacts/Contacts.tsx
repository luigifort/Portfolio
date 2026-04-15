import ContactCard from "@/_components/cards/Contact-Card";
import NextLink from "next/link";

export default function Contacts() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Contatti</h2>
      <div>
        <p className="text-sm mb-8">
          Se vuoi discutere di un progetto, collaborare o semplicemente
          connetterti, non esitare a contattarmi!
        </p>
      </div>
    </section>
  );
}
