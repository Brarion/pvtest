import React from 'react'

type Props = {
  value: string
  onChange: (v: string) => void
}

const Input: React.FC<Props> = (props) => {
  const { value, onChange } = props;

  const handleChange = (e: any) => {
    const inputValue = e.target.value;

    onChange(inputValue);
  }


  return <input value={value} onChange={handleChange} />
}

export default Input