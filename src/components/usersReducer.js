import { shuffle } from 'lodash'
import { images } from './../data/imagesData'

const gameImages = [...images, ...images]
export const initialState = {
  board: shuffle(gameImages),
}

export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'RESET':
      return {
        ...state,
        board: shuffle(gameImages),
      }
  }
  return state
}
