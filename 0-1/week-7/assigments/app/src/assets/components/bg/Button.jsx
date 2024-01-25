/* eslint-disable react/prop-types */
const Button = ({color, setBgColor}) => {

    function handleChange(){
        setBgColor(cur => (cur == color? 'white':color))
    }
  return (
    <button className={`py-1 w-16 mx-4 rounded-lg  ` + (color == 'black'?'text-white':"")} style={{backgroundColor: color}} onClick={handleChange}>{color}</button>
  )
}
export default Button