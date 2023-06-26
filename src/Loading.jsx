import { DotsLoader } from "react-loaders-kit";
export const Loading = () => {
  const loaderProps = {
    loading: true,
    size: 45,
    duration: 1.5,
    colors: ['#0078d4']
  };
  return (
    <>
    <div className="center-screen">
    <DotsLoader  {...loaderProps} />
    </div>
    </>
  );
};