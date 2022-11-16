import CardItem from "../components/JobItem";
import { useState } from "react";
import ReactPaginate from "react-paginate";

type JobListProps = {
  jobData: {
    name: string;
    id: string;
    address: string;
    benefits: string[];
    createdAt: string;
    description: string;
    email: string;
    employment_type: string[];
    location: object;
    phone: string;
    pictures: string[];
    salary: string;
    title: string;
    updatedAt: string;
  }[];
  favorites: string[];
  handleSaveToLS: (type: string) => void;
  itemsPerPage: number;
};

export default function JobList({
  jobData,
  favorites,
  handleSaveToLS,
  itemsPerPage,
}: JobListProps) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = jobData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(jobData.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % jobData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ul className="bg-listBg p-[10px] min-h-[100vh]">
        {currentItems.map((item) => {
          return (
            <CardItem
              key={item.id}
              id={item.id}
              createdAt={item.createdAt}
              picture={item.pictures}
              name={item.name}
              title={item.title}
              address={item.address}
              onClick={handleSaveToLS}
              favorite={favorites.includes(item.id)}
            />
          );
        })}
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          className="pagination"
          activeClassName="text-blueText border-b-[1px] border-blueText"
        />
      </ul>
    </>
  );
}
