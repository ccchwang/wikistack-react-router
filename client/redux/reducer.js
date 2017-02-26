
const initialState = {
  pages: []
}

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case "RECEIVE_PAGE":
      newState.pages = [...newState.pages, action.page]
      break;

    case "RECEIVE_PAGES":
      newState.pages = action.pages
      break;

    case "SELECT_PAGE":
      newState.selected = action.page
      break;

    default: return state
  }
  return newState;


}
