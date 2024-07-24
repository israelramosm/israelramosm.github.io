export type HeaderTitle = { 
  rightText: string;
  title: string;
  subtitle: string;
}

export default function TitleHeader({
  rightText,
  title,
  subtitle,
}: {
  rightText: string;
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <span className="float-end text-gray-400">{rightText}</span>
      <h3 className="text-lg font-semibold ">{title}</h3>
      <h4 className="text-sm text-gray-400">{subtitle}</h4>
    </>
  );
}