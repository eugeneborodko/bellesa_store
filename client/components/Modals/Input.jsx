const Input = ({ type, placeholder, value, onChange, ...args }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...args}
      />
    </div>
  )
}

export default Input
