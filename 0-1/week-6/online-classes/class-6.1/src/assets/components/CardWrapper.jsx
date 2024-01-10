/* eslint-disable react/prop-types */
const CardWrapper = ({children}) => {
  return (
    <div style={{border: '2px solid white', padding: '15px'}}>
        {children}
    </div>
  )
}
export default CardWrapper