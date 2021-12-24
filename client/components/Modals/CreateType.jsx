import { memo } from 'react'

const CreateType = ({ value, setValue, placeholder }) => {
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <input
      type="text"
      placeholder={`Название ${placeholder}`}
      value={value}
      onChange={handleChange}
    />
  )
}

export default memo(CreateType)
