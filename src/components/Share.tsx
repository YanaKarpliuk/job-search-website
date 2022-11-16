import share from "../images/share.svg";

type ShareProps = {
  onClick: () => void;
};
export default function Share({ onClick }: ShareProps) {
  return (
    <button className="text-darkGrayText xl:normalText flex transitionClass hover:scale-110" onClick={onClick}>
      <img className={`mr-[11px] h-[20px]`} src={share} alt="share icon" />
      <p>Share</p>
    </button>
  );
}
