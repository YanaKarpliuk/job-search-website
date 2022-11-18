import star from "../images/star.svg";
import starColor from "../images/star-colored.svg";
import share from "../images/share.svg";
import bookmark from "../images/bookmark.svg";
import bookmarkColor from "../images/bookmark-colored.svg";
import arrow from "../images/Arrow.svg";
import SaveToMyList from "../components/SaveToMyList";
import JobDescription from "../components/JobDescription";
import AttachedImages from "../components/AttachedImages";
import AdditionalInfo from "../components/AddInfo";
import Contacts from "../components/Contacts";
import Modal from "../components/Modal";
import Share from "../components/Share";
import Title from "../components/Title";
import { Link, useParams, useLocation } from "react-router-dom";
import { useState } from "react";

type JobDetailsProps = {
  jobData: Job[];
  favorites: string[];
  handleSaveToLS: (type: string) => void;
};

interface Job {
  name: string;
  id: string;
  address: string;
  benefits: string[];
  createdAt: string;
  description: string;
  email: string;
  employment_type: string[];
  location: { lat: number; long: number };
  phone: string;
  pictures: string[];
  salary: string;
  title: string;
  updatedAt: string;
}

export default function JobDetails({
  jobData,
  favorites,
  handleSaveToLS,
}: JobDetailsProps) {
  const searchParams = useLocation();

  const [openModal, setOpenModal] = useState(false);
  const [urlValue, setUrlValue] = useState(window.location.href);

  const { id } = useParams();

  const job = jobData.find((item) => item.id === id);

  if (!job) {
    return null
  }

  function onModalClick() {
    setOpenModal((prev) => !prev);
  }

  return (
    <main className="py-[24px] xl:pt-[56px] xl:pb-[162px] px-[15px] max-w-[740px] xl:max-w-maxWList mx-auto">
      <div className=" xl:flex max-w-maxWDetails mx-auto ">
        <div className="xl:mr-[131px]">
          <div className="border-b-[1px] mb-[20px] xl:mb-[39px] flex items-center justify-between">
            <h2 className="extraLargeBoldText">Job Details</h2>
            <div className="hidden xl:flex">
              <div className="mr-[24px]">
                <SaveToMyList
                  id={job.id}
                  image={bookmark}
                  imageColor={bookmarkColor}
                  text="Save to my list"
                  mrImage={"8px"}
                  onClick={handleSaveToLS}
                  favorite={favorites.includes(job.id)}
                />
              </div>

              <Share onClick={onModalClick} />
            </div>
          </div>

          <div className="flex my-[4px] xl:hidden">
            <div className="mr-[36px]">
              <SaveToMyList
                id={job.id}
                image={star}
                imageColor={starColor}
                text="Save to my list"
                mrImage="11px"
                onClick={handleSaveToLS}
                favorite={favorites.includes(job.id)}
              />
            </div>

            <Share onClick={onModalClick} />
          </div>

          <JobDescription
            title={job.title}
            createdAt={job.createdAt}
            description={job.description}
            salary={job.salary}
          />

          <div className="flex flex-col xl:flex-col-reverse">
            <div>
              <Title title="Attached images" />
              <AttachedImages pictures={job.pictures} id={job.id} />
            </div>
            <div>
              <Title title="Additional info" />
              <AdditionalInfo
                employment_type={job.employment_type}
                benefits={job.benefits}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="xl:hidden mb-[21px]">
            <Title title="Contacts" />
          </div>
          <Contacts
            name={job.name}
            address={job.address}
            phone={job.phone}
            email={job.email}
            location={job.location}
          />
        </div>

        {openModal && <Modal onClick={onModalClick} value={urlValue} />}
      </div>

      <Link to="/" className="returnBtn">
        <img className="mr-[19px]" src={arrow} alt="arrow" />
        <p className="semiBoldSmallText text-darkText">RETURN TO JOB BOARD</p>
      </Link>
    </main>
  );
}
