import { ResOutingCardListItem } from "../../../lib/api/payloads/OutingCard";
import {
  CLOSE_OUTING_CARD_MODAL,
  GET_OUTING_CARD_LIST,
  OutingCardAction,
  SHOW_OUTING_CARD_MODAL
} from "../../action/outingCard";

interface OutingCardState {
  list: ResOutingCardListItem[];
  outingUuid: string;
  modalIsOpen: boolean;
}
const initialState: OutingCardState = {
  list: [],
  outingUuid: "",
  modalIsOpen: false
};

const OutingCardReducer = (
  state: OutingCardState = initialState,
  action: OutingCardAction
): OutingCardState => {
  switch (action.type) {
    case GET_OUTING_CARD_LIST: {
      return {
        ...state,
        list: action.payload
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
