import React from 'react';

import { Input } from './components/Input';
import { Button } from './components/Button';

type Props = {
  onSubmit: (count: number) => void
}

const Form: React.FC<Props> = ({onSubmit}) => {
  const [input, setInput] = React.useState('');

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.length && !Number.isNaN(+input)) {
      onSubmit(+input)
    }    
  }

  return <form onSubmit={handleClick}>
    <Input value={input} onChange={setInput} />
    <Button>НАЖМИ</Button>
  </form>
}

export default Form;