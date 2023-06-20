import { WaveLoader  } from "react-loaders-kit";
export const Loading = () => {
  const loaderProps = {
    loading: true,
    size: 45,
    duration: 0.6,
    colors: ['#5e22f0']
  };
  return (
    <>
    <div className="center-screen">
    <WaveLoader  {...loaderProps} />
    <div style={{marginTop:"90px", marginLeft:"-63px"}}>Please wait...</div>
    </div>
    </>
  );
};