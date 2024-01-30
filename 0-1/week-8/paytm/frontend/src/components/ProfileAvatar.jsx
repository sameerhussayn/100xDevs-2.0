/* eslint-disable react/prop-types */
const ProfileAvatar = ({children}) => {
    const nameStr = children[0].toUpperCase()
  return (
    <div className="bg-slate-300 rounded-full w-8 h-8 text-center pt-1 ">{nameStr[0]}</div>
  )
}
export default ProfileAvatar