import { memo } from 'react'

const CreateBrand = ({ value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <input
      type="text"
      placeholder="Название бренда"
      value={value}
      onChange={handleChange}
    />
  )
}

export default memo(CreateBrand)
