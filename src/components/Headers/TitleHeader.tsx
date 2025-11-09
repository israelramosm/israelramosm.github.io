export type HeaderTitle = {
  rightText: string;
  title: string;
  subtitle: string;
};

export default function TitleHeader({
  title,
  subtitle,
  rightText,
}: {
  title?: string;
  subtitle?: string;
  rightText?: string;
}) {
  return (
    <>      
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      <h4 className="text-sm">{subtitle} - <span className="text-gray-400">{rightText}</span></h4>
    </>
  );
}
