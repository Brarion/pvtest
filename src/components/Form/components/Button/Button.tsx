import React from 'react'

type Props = {
  children: React.ReactNode
}

const Button: React.FC<Props> = (props) => {
  const { children } = props;

  return <button type="submit">{children}</button>
}

export default Button