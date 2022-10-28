import React from 'react';

import axios from 'axios'

import { Content } from './components/Content'
import { Form } from './components/Form'

import styles from './App.module.scss'

type GenerateCards = {
  success: boolean,
  deck_id: string,
  remaining: number,
  shuffled: boolean
}

type Images = {
  svg: string,
  png: string
}

type Card = {
  code: string,
  image: string,
  images: Images
  value: string,
  suit: string
}

type CardsResponse = {
  success: boolean,
  deck_id: string,
  cards: Card[],
  remaining: number
}


const App = () => {
  const [cardsId, setCardsId] = React.useState<string | null>(null)
  const [images, setImages] = React.useState<string[]>([])

  const generateCards = () => {
    axios.get<GenerateCards>('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=3').then(({ data }) => {
      setCardsId(data.deck_id)
    })
  }

  React.useEffect(generateCards, [])

  const handleSubmit = (count: number) => {
    axios.get<CardsResponse>(`https://deckofcardsapi.com/api/deck/${cardsId}/draw/?count=${count}`).then(({ data }) => {
      const newImages = data.cards.map(card => card.image)
      setImages(newImages)
    })
  }

  return <div className={styles.app}>
    <Content data={images} />
    <Form onSubmit={handleSubmit} />
  </div>
}

export default App;
