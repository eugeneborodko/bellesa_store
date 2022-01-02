import { memo } from 'react'
import cl from './AdminModal.module.scss'

const CreateType = ({ value, setValue, placeholder }) => {
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <input
      className={cl.input}
      type="text"
      placeholder={`Название ${placeholder}`}
      value={value}
      onChange={handleChange}
    />
  )
}

export default memo(CreateType)
