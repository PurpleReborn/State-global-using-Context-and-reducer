export const initialState = {
  data: 0,
};

export const addItems = () => ({
  type: 'INCREMENT',
});

export const minItems = () => ({
    type: 'DECREMENT',
  });

export const dataReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
          return {
            ...state,
            data: state.data + 1,
          };
        case 'DECREMENT':
          return {
            ...state,
            data: state.data - 1,
          };
        default:
          return state;
      }
};