import React from 'react';

type Props = {
  data: string[]
}

const Content: React.FC<Props> = ({data}) => {
  return <div>{data.map(src => <img key={src} src={src} alt="alt"/>)}</div>
}

export default Content