/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const BottomWarning = ({label, linkText, to}) => {
  return (
    <div className="text-center text-sm font-semibold">{label}<Link to={to} className="underline">{linkText}</Link></div>)
}
export default BottomWarning