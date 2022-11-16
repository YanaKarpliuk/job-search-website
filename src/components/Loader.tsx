import { Bars } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <Bars
        height="80"
        width="80"
        color="rgb(161, 177, 219)"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
