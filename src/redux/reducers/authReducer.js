const initialState = {
  isAuthenticated: false,
  user: {},
  test: 'res'
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
