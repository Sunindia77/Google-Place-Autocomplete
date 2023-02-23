const initialState = {
    searchHistory: [],
    currentPlace: null
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_SEARCH_HISTORY':
        return {
          ...state,
          searchHistory: [...state.searchHistory, action.payload]
        };
      case 'SET_CURRENT_PLACE':
        return {
          ...state,
          currentPlace: action.payload
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  