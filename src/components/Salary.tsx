type SalaryProps = {
  salary: string;
  mb?: string
};

export default function Salary({ salary, mb }: SalaryProps) {
  return (
    <>
      <p className="boldText text-darkText">€ {salary}</p>
      <p className={`normalText text-darkGrayText mb-[${mb}]`}>Brutto, per year</p>
    </>
  );
}
