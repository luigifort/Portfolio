import Card from "@/_components/cards/Project-Card";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Progetti</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
