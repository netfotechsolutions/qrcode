export const ImageWrapper = (props) => {
  return (
    <>
      <p className="flex justify-content-center mt-4">
        <div className="w-full md:w-8 lg:w-6">
          <img
            className="responsive"
            src={props.path}
            alt="step1_1"
            width="600"
            height="300"
          />
        </div>
      </p>
    </>
  );
};
