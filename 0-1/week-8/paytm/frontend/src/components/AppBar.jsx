import ProfileAvatar from "./ProfileAvatar"

/* eslint-disable react/prop-types */
const AppBar = ({name=""}) => {

  return (
    <>
        <div className="p-4 flex justify-between items-center border-b-2">
        <h1 className="font-bold text-2xl">Payments App</h1>
        <div className="flex  gap-4 items-center">
          <p className="font-semibold">Hello, {name}</p>
          <ProfileAvatar>{name}</ProfileAvatar>
        </div>
      </div>
    </>
  )
}
export default AppBar