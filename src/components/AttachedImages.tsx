type AttachedImagesProps = {
  pictures: string[],
  id: string
}

export default function AttachedImages({pictures, id}: AttachedImagesProps) {
  
  return (
    <section className="mt-[21px] mb-[63px] xl:mb-[97px] flex max-w-[767px] overflow-x-auto">
      {pictures.map(picture => {
        return <img className="h-[200px] rounded-[8px] mr-[10px]" src={`${picture}?random=${id}`}/>
      })}
    </section>
  );
}
