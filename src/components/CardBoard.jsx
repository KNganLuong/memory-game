/* eslint-disable no-unused-vars */

import React, { useReducer, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { initialState, gameReducer } from './usersReducer'
import './CardBoard.css'

const CardBoard = () => {
  const [flippedIndex, setFlippedIndex] = useState([])
  const [foundPhoto, setFoundPhoto] = useState([])

  const handleClick = (index) => {
    // Ajoute la carte cliquée à flippedIndex
    const newFlippedIndex = [...flippedIndex, index]
    setFlippedIndex(newFlippedIndex)

    // Si deux cartes sont retournées, compare-les
    if (newFlippedIndex.length === 2) {
      const [firstIndex, secondIndex] = newFlippedIndex

      if (state.board[firstIndex] === state.board[secondIndex]) {
        // Si les cartes correspondent, ajoute-les à foundPhoto
        setFoundPhoto([...foundPhoto, firstIndex, secondIndex])
        setFlippedIndex([])
      } else {
        setTimeout(() => {
          setFlippedIndex([])
        }, 500)
      }
    }
  }

  // Vérifie si une carte est visible (trouvée ou retournée)
  const isPhotoVisible = (index) => {
    return foundPhoto.includes(index) || flippedIndex.includes(index)
  }

  const [state, dispatch] = useReducer(gameReducer, initialState)

  const handleResetGame = () => {
    dispatch({ type: 'RESET' })
    setFlippedIndex([])
    setFoundPhoto([])
  }

  return (
    <>
      <div className='game-board'>
        {state.board.map((image, index) =>
          // Condition quand la photo est visble, la photo affiche grace à l'url, si non on déclenche l'événement handleClick
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
      <button className='game-reset' onClick={handleResetGame}>
        Reset Game
      </button>
    </>
  )
}

export default CardBoard
