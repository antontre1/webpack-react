export default function(state, action) {
  // compute and return the new state
  if(state === undefined) {
    return null
  }

  // handle actions
  if (action.type === "SELECT_GIF") {
    return action.payload
  } else {
    return state
  }


}
