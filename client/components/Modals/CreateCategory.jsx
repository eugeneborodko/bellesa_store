import { memo } from 'react'

const CreateCategory = ({ value, setValue }) => {
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <input
      type="text"
      placeholder="Название категории"
      value={value}
      onChange={handleChange}
    />
  )
}

export default memo(CreateCategory)
