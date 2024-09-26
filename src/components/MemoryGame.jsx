/* eslint-disable react/prop-types */
import { shuffle } from 'lodash'

import CardBoard from './CardBoard'
import './MemoryGame.css'

const MemoryGame = ({ images }) => {
  const shuffledImages = shuffle(images)

  return <CardBoard shuffledImages={shuffledImages} />
}

export default MemoryGame
