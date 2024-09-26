/* eslint-disable react/prop-types */
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const CardBoard = ({ shuffledImages }) => {
  const [flippedIndex, setFlippedIndex] = useState([])
  const [foundPhoto, setFoundPhoto] = useState({})

  const handleClick = (index) => {
    if (foundPhoto[index] || flippedIndex.includes(index)) {
      return
    }

    const newFlippedIndex = [...flippedIndex, index]
    setFlippedIndex(newFlippedIndex)

    if (newFlippedIndex.length === 2) {
      const [firstIndex, secondIndex] = newFlippedIndex

      if (shuffledImages[firstIndex] === shuffledImages[secondIndex]) {
        setFoundPhoto({
          ...foundPhoto,
          [firstIndex]: true,
          [secondIndex]: true,
        })
        setFlippedIndex([])
      } else {
        setTimeout(() => {
          setFlippedIndex([])
        }, 1000)
      }
    }
  }

  const isPhotoVisible = (index) => {
    return foundPhoto[index] || flippedIndex.includes(index)
  }

  return (
    <div className='game-board'>
      {shuffledImages.map((image, index) =>
        isPhotoVisible(index) ? (
          <img src={image} key={uuidv4()} className='game-photo' alt='card' />
        ) : (
          <div
            onClick={() => handleClick(index)}
            key={uuidv4()}
            className='game-photo'
          ></div>
        )
      )}
    </div>
  )
}

export default CardBoard
