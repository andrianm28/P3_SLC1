const initialState = {
  tasks: [],
  task: {}
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TASKS":
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
}

export default taskReducer;
