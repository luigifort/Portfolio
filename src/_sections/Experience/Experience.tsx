import ExperienceCard from "@/_components/cards/Experience-Card";

export default function Experience() {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Esperienza</h2>
      <div className="timeline flex flex-col items-center justify-center">
        <ExperienceCard
          title="Frontend Developer"
          contact="A contratto"
          duration="set 205 - presente"
          location="Roma"
          mode="Ibrido"
        />
        <ExperienceCard
          title="Junior Frontend Developer"
          contact="Apprendistato"
          duration="lug 2023 - set 2025"
          location="Roma"
          mode="Ibrido"
        />
        <ExperienceCard
          title="Trainee Web Developer"
          contact="Stage"
          duration="feb 2023 - lug 2025"
          location="Roma"
          mode="Remoto"
        />
      </div>
    </section>
  );
}
