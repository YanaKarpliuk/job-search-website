type TitleProps = {
  title: string,
}
export default function Title({title}: TitleProps) {
  return (
    <div className="border-b-[1px]">
      <h2 className="extraLargeBoldText">{title}</h2>
    </div>
  );
}
