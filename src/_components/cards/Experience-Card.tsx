type ExperienceCardProps = {
  title: string;
  contact: string;
  duration: string;
  location: string;
  mode: string;
};

export default function ExperienceCard(props: ExperienceCardProps) {
  return (
    <div className="experience-wrapper right">
      <div className="content">
        <p className="font-bold">{props.title}</p>
        <p>{props.contact}</p>
        <p className="text-gray-400 text-sm">{props.duration}</p>
        <p className="text-gray-400 text-sm">
          {props.location} | {props.mode}
        </p>
      </div>
    </div>
  );
}
