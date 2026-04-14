import Card from "@/_components/Card";

export default function Projects() {
  return (
    <section className="min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Progetti</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
