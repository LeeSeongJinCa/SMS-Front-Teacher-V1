import { SubNavAction, CHANGE_SUB_NAV_OPEN } from "../../action/subNav";

interface SubNavState {
  isClose: boolean;
}

const initialState: SubNavState = {
  isClose: false
};

const subNavReducer = (
  state: SubNavState = initialState,
  action: SubNavAction
): SubNavState => {
  switch (action.type) {
    case CHANGE_SUB_NAV_OPEN: {
      return {
        ...state,
        isClose: !state.isClose
      };
    }
    default: {
      return state;
    }
  }
};

export default subNavReducer;
