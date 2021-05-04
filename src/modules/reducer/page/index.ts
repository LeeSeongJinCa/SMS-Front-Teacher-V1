import {
  PageAction,
  PAGE_MOVE,
  SET_TUTORIAL,
  SUB_PAGE_MOVE
} from "../../action/page/index";

export interface PageState {
  mainUrl: string;
  subUrl: string;
  isTutorialOpen?: boolean;
}

const initialState = {
  mainUrl: "",
  subUrl: "",
  isTutorialOpen: false
};

const pageReducer = (
  state: PageState = initialState,
  action: PageAction
): PageState => {
  switch (action.type) {
    case PAGE_MOVE: {
      return {
        ...state,
        mainUrl: action.payload
      };
    }
    case SUB_PAGE_MOVE: {
      return {
        ...state,
        subUrl: action.payload
      };
    }
    case SET_TUTORIAL: {
      return {
        ...state,
        isTutorialOpen: action.payload.isOpen
      };
    }
    default: {
      return state;
    }
  }
};

export default pageReducer;
