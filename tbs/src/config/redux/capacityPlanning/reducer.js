const initializeState = {
  Date: new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
};

const CapacityReducer = (state = initializeState, action) => {
  switch (action.type) {
    case 'SELECTED_DATE':
      return { ...state, Date: action.payload };
    default:
      return state;
  }
};

export default CapacityReducer;