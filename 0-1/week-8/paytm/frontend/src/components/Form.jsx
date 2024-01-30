/* eslint-disable react/prop-types */
const Form = ({children,handleSubmit}) => {
  return (
    <div>
        <form className="flex flex-col my-3 px-2" onSubmit={handleSubmit}>
            {children}
        </form>
    </div>
  )
}
export default Form