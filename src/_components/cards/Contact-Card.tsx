import NextLink from "next/link";

type ContactCardProps = {
  contactType: string;
  contact: string;
  type?: "email" | "linkedin" | "github" | "phone";
};

export default function ContactCard(props: ContactCardProps) {
  return (
    <div className="max-h-min border border-[#385170] rounded-2xl py-3.5 px-6 max-w-108.25 w-full">
      <div>
        <h3 className="font-bold ">{props.contactType}</h3>
        {getLink(props)}
      </div>
    </div>
  );
}

function getLink(props: ContactCardProps) {
  switch (props.type) {
    case "email":
      return (
        <address>
          <NextLink
            href={`mailto:${props.contact}`}
            target="_blank"
            className="flex items-center gap-1"
          >
            {props.contact}
          </NextLink>
        </address>
      );
    case "linkedin":
      return (
        <NextLink
          href={props.contact}
          target="_blank"
          className="flex items-center gap-1"
        >
          {props.contact}
        </NextLink>
      );

    default:
      return;
  }
}
