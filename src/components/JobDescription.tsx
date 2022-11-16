import getXDaysAgo from "../operations/getXDaysAgo";
import ApplyBtn from "../components/ApplyBtn";
import Salary from "../components/Salary";

type JobDescriptionProps = {
  title: string;
  createdAt: string;
  description: string;
  salary: string;
};

export default function JobDescription({
  title,
  createdAt,
  description,
  salary,
}: JobDescriptionProps) {
  const [generalDesc, responsibilitiesDesc, benefitsDesc] =
    cutDescription(description);

  return (
    <section className="mt-[28px] mb-[135px] xl:mb-[86px]">
      <div className="hidden xl:block">
        <ApplyBtn />
      </div>

      <div className="flex justify-between mb-[5px] xl:mb-[7px] xl:mt-[32px]">
        <h4 className="largeBoldtext xl:mr-[60px]">{title}</h4>
        <div className="hidden xl:flex flex-col w-[30%]">
          <Salary salary={salary} />
        </div>
      </div>

      <div className="flex justify-between items-center mb-[14px] xl:mb-[7px]">
        <p className="smallLightText xl:normalText text-lightGrayText">
          Posted {getXDaysAgo(createdAt)}
        </p>
        <div className="flex flex-col-reverse items-end xl:hidden">
          <Salary salary={salary} mb="4px" />
        </div>
      </div>

      <p className="normalText  text-darkGrayText mb-[43px]">{generalDesc}</p>
      <h4 className="boldText text-darkText mb-[5px]">Responsibilities:</h4>
      <p className="normalText text-darkGrayText">{responsibilitiesDesc}</p>
      <h4 className="boldText text-darkText mt-[20px] mb-[25px]">
        Compensation & Benefits:
      </h4>
      <ul className="normalText text-darkGrayText list-square list-inside xl:list-outside">
        {benefitsDesc.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <div className="flex justify-center xl:justify-start mt-[20px]">
        <ApplyBtn />
      </div>
    </section>
  );
}

function beautify(str: string) {
  return str
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, "") // deletes invisible characters (\r, \n, etc)
    .replace(/\s+/g, " ") // replaces multiple spaces to a single space
    .trim();
}

function cutDescription(description: string): [string, string, string[]] {
  const beautifiedDescription = beautify(description);
  const cutPointOne = "Responsopilities:";
  const cutPointTwo = "Compensation & Benefits:";

  const generalDesc = beautifiedDescription.split(cutPointOne)[0];

  const responsibilitiesDesc = beautifiedDescription.substring(
    beautifiedDescription.indexOf(cutPointOne) + cutPointOne.length,
    beautifiedDescription.indexOf(cutPointTwo)
  );

  const benefitsDesc = beautifiedDescription.substring(
    beautifiedDescription.indexOf(cutPointTwo) + cutPointTwo.length
  );

  const benefitsDescSplit = benefitsDesc.split(".").filter((item) => item);

  return [generalDesc, responsibilitiesDesc, benefitsDescSplit];
}
