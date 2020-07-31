import * as uiTypes from "./../constants/ui";

const initialState = {
  showLoading: false,
  showSideBar: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case uiTypes.SHOW_LOADING: {
      return {
        ...state,
        showLoading: true,
      };
    }
    case uiTypes.HIDE_LOADING: {
      return {
        ...state,
        showLoading: false,
      };
    }

    case uiTypes.SHOW_SIDEBAR: {
      return {
        ...state,
        showSideBar: true,
      };
    }
    case uiTypes.HIDE_SIDEBAR: {
      return {
        ...state,
        showSideBar: false,
      };
    }

    default:
      return state;
  }
};

export default reducer;
