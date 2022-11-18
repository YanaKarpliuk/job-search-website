type SaveToMyListProps = {
  id: string;
  image: string;
  imageColor: string;
  text: string;
  mrImage: string;
  onClick: (type: string) => void;
  favorite: boolean;
};

export default function SaveToMyList({
  id,
  image,
  imageColor,
  text,
  mrImage,
  onClick,
  favorite,
}: SaveToMyListProps) {
  return (
    <button onClick={() => onClick(id)} className="flex items-center">
      {favorite ? (
        <img
          className={`mr-[${mrImage}] h-[25px]`}
          src={imageColor}
          alt="icon"
        />
      ) : (
        <img className={`mr-[${mrImage}] h-[25px]`} src={image} alt="icon" />
      )}
      <p className="text-darkGrayText xl:normalText">{text}</p>
    </button>
  );
}
