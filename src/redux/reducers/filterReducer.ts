interface FilterState {
  category: string;
}

const initialState: FilterState = {
  category: "",
};

export const filterReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "filter/setCategory":
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
