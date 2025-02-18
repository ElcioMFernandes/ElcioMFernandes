import { Tag } from "./Tag";

interface CardProps {
  href: string;
  title: string;
  description: string;
  tags?: string[];
}

export const Card = (props: CardProps) => {
  return (
    <a
      href={props.href}
      className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 hover:box-shadow-pop-tr"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {props.title}
      </h5>
      <p className="font-normal text-gray-700">{props.description}</p>
      {props.tags ? (
        <div className="mt-4">
          {props.tags.map((tag, index) => (
            <Tag key={index} value={tag} />
          ))}
        </div>
      ) : null}
    </a>
  );
};
