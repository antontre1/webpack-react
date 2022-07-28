export default function(state, action) {
  // compute and return the new state
  if(state === undefined) {
    return []
  }

  // handle actions
  switch(action.type) {
    case 'SET_GIFS':
      return action.payload
    default:
      return state
  }

}
