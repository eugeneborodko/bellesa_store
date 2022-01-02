const Select = ({ name, onChange, options, ...args }) => {
  return (
    <select name={name} onChange={onChange} {...args}>
      {options.map(({ id, name }) => {
        return (
          <option key={id} value={id}>
            {name}
          </option>
        )
      })}
    </select>
  )
}

export default Select
