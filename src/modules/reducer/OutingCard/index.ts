import { ResOutingCardListItem } from "../../../lib/api/payloads/OutingCard";
import {
  ADD_OUTING_CARD_LIST,
  CLOSE_OUTING_CARD_MODAL,
  GET_OUTING_CARD_LIST,
  OutingCardAction,
  SET_OUTING_CARD_LIST,
  SHOW_OUTING_CARD_MODAL
} from "../../action/outingCard";

interface OutingCardState {
  list: ResOutingCardListItem[];
  outingUuid: string;
  modalIsOpen: boolean;
  readMore: boolean;
}
const initialState: OutingCardState = {
  list: [],
  outingUuid: "",
  modalIsOpen: false,
  readMore: false
};

const OutingCardReducer = (
  state: OutingCardState = initialState,
  action: OutingCardAction
): OutingCardState => {
  switch (action.type) {
    case SET_OUTING_CARD_LIST: {
      return {
        ...state,
        list: action.payload.outingCard
      };
    }
    case ADD_OUTING_CARD_LIST: {
      let readMore = true;
      if (action.payload.length < 8) readMore = false;
      return {
        ...state,
        list: [...state.list, ...action.payload],
        readMore
      };
    }
    case GET_OUTING_CARD_LIST: {
      let readMore = true;
      if (action.payload.length < 8) readMore = false;
      return {
        ...state,
        list: action.payload,
        readMore
      };
    }
    case SHOW_OUTING_CARD_MODAL: {
      return {
        ...state,
        outingUuid: action.payload,
        modalIsOpen: true
      };
    }
    case CLOSE_OUTING_CARD_MODAL: {
      return {
        ...state,
        outingUuid: "",
        modalIsOpen: false
      };
    }
    default: {
      return state;
    }
  }
};

export default OutingCardReducer;
