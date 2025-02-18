interface TagProps {
  value: string;
}

export const Tag = (props: TagProps) => {
  return (
    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm shadow-md shadow-blue-100/50">
      {props.value}
    </span>
  );
};
