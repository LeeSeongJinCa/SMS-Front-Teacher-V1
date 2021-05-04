import { ResSchedule } from "../../../lib/api/payloads/Main";
import {
  TimetableAction,
  SET_SCHEDULES,
  SET_SCHEDULER_DATE,
  SET_TARGET_UUID,
  START_SCHEDULE,
  END_SCHEDULE,
  SET_SELECTED_DATE
} from "../../action/main";

export interface TimetableState {
  timetableLoading: boolean;
  scheduleLoading: boolean;
  schedules: ResSchedule[];
  schedulerDate: Date;
  targetUuid: string;
  selectedDate: string;
}

const initialState: TimetableState = {
  timetableLoading: false,
  scheduleLoading: false,
  schedules: [],
  schedulerDate: new Date(),
  targetUuid: "",
  selectedDate: ""
};

const ManagementInfoReduce = (
  state: TimetableState = initialState,
  action: TimetableAction
): TimetableState => {
  switch (action.type) {
    case SET_SCHEDULES:
      return {
        ...state,
        schedules: action.payload.schedules
      };
    case SET_SCHEDULER_DATE:
      return {
        ...state,
        schedulerDate: action.payload.date
      };
    case SET_TARGET_UUID:
      return {
        ...state,
        targetUuid: action.payload.scheduleUuid
      };
    case START_SCHEDULE:
      return {
        ...state,
        scheduleLoading: true
      };
    case END_SCHEDULE:
      return {
        ...state,
        scheduleLoading: false
      };
    case SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload.localDate
      };
    default:
      return state;
  }
};

export default ManagementInfoReduce;
