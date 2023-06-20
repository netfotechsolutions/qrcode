import { WaveLoader  } from "react-loaders-kit";
import Typed from 'react-typed';
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
    <Typed
    style={{marginTop:"90px", marginLeft:"-63px"}}
          className="loader-text"
          strings={["Please wait..."]}
          typeSpeed={0}
          backSpeed={0}
        />
    </div>
    </>
  );
};