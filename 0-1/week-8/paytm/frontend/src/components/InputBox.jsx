// eslint-disable-next-line react/prop-types
const InputBox = ({handleChange, value, placeholder='', label, id, type = 'text', minLength=1}) => {
  return (
    <>
      {label &&<label htmlFor={id} className="font-bold text-gray-700 ">{label}</label >}

      <input type={type} className="border border-gray-300 my-1  p-2 rounded-md w-full" id={id} placeholder={placeholder} onChange={handleChange} required value={value} minLength={minLength}/>
    </>
  )
}
export default InputBox