type AddInfoProps = {
  employment_type: string[];
  benefits: string[];
};

export default function AdditionalInfo({
  employment_type,
  benefits,
}: AddInfoProps) {
  return (
    <section className="mt-[15px] mb-[53px] xl:mb-[87px]">
      <div className="mb-[13px]">
        <p className="normalText text-darkGrayText mb-[10px]">
          Employment type
        </p>
        <ul className="flex flex-wrap">
          {employment_type.map((type) => {
            return (
              <li
                className="general-box blue-box general-box-text blue-box-text"
                key={type}
              >
                {type}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p className="normalText text-darkGrayText mb-[10px]">Benefits</p>
        <ul className="flex">
          {benefits.map((benefit) => {
            return (
              <li
                className="general-box yellow-box general-box-text yellow-box-text"
                key={benefit}
              >
                {benefit}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
