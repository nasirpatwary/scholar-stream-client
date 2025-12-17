import { Blocks } from "react-loader-spinner";
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-284px)]">
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  );
};

export default LoadingSpinner;
