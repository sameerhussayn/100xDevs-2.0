/* eslint-disable react/prop-types */
const Button = ({children,margin,handleClick, isDisable = false}) => {
  return (
    <button onClick={handleClick} className={"bg-black text-white p-2 rounded-md  font-semibold px-4 " + (margin?'mt-2':'') + (isDisable?"opacity-50 cursor-not-allowed":"")}  type="submit" disabled={isDisable}>{children}</button>
  )
}
export default Button