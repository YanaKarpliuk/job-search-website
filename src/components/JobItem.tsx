import locationTag from "../images/location.svg";
import bookmark from "../images/bookmark.svg";
import bookmarkColor from "../images/bookmark-colored.svg";
import getXDaysAgo from "../operations/getXDaysAgo";
import { Link } from "react-router-dom";
import SaveToMyList from "../components/SaveToMyList";

type CardItemProps = {
  id: string;
  createdAt: string;
  picture: string[];
  name: string;
  title: string;
  address: string;
  onClick: (item: string) => void;
  favorite: boolean;
};

export default function CardItem({
  id,
  createdAt,
  picture,
  name,
  title,
  address,
  onClick,
  favorite,
}: CardItemProps) {
  return (
    <li className="card-mobile card-desktop mb-[8px] mx-auto max-w-[750px] xl:max-w-maxWList">
      <div className=" flex flex-col flex-1 xl:flex-row-reverse xl:justify-between">
        <div className="flex justify-end mb-[17px] xl:mb-0">
          <div className="flex flex-col items-end justify-between h-[100%]">
            <div className="hidden xl:block">
              <SaveToMyList
                id={id}
                image={bookmark}
                imageColor={bookmarkColor}
                text=""
                mrImage={"0px"}
                onClick={onClick}
                favorite={favorite}
              />
            </div>

            <p className="lightText text-grayText xl:smallNormalTextOne">
              Posted {getXDaysAgo(createdAt)}
            </p>
          </div>
        </div>

        <Link to={`details/${id}`} className="flex w-[80%]">
          <img
            className=" h-[66px] min-w-[66px] xl:h-[85px] xl:min-w-[85px] rounded-[50%]"
            src={`${picture[0]}?random=${id}`}
          />
          <div className="ml-[19px] xl:ml-[26px]">
            <h3 className="smallNormalTextTwo s:normalText xl:boldText text-darkText mb-[5px] xl:mb-[8px]">
              {title}
            </h3>

            <p className="lightText s:smallNormalTextOne text-grayText mb-[7px] xl:mb-[8px]">
              Department name • {name}
            </p>

            <div className="flex">
              <img
                src={locationTag}
                className="mr-[8px] pb-[5px]"
                alt="location pointer"
              />
              <p className="lightText s:smallNormalTextOne text-grayText">
                {address}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
}
