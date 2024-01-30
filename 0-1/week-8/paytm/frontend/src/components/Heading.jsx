/* eslint-disable react/prop-types */
const Heading = ({heading, subHeading}) => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl my-2">{heading}</h1>
      {subHeading? (
        <h3 className="text-gray-500 font-medium">
        {subHeading}
      </h3>
      ):null}
    </div>
  );
};
export default Heading;
