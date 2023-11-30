const initializeState = {
  Date: '',
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