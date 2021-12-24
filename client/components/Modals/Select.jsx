const Select = ({name, onChange, options}) => {
  return (
    <select name={name} onChange={onChange}>
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