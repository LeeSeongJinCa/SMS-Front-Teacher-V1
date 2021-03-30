import { ResSchedule, ResTimetable } from "../../../lib/api/payloads/Main";
import {
  TimetableAction,
  SET_TIMETABLES,
  SET_SCHEDULES,
  SET_SCHEDULER_DATE,
  SET_TARGET_UUID,
  START_TIMETABLE,
  END_TIMETABLE,
  START_SCHEDULE,
  END_SCHEDULE,
  SET_SELECTED_DATE
} from "../../action/main";

export interface TimetableState {
  timetableLoading: boolean;
  scheduleLoading: boolean;
  timetable: ResTimetable;
  schedules: ResSchedule[];
  schedulerDate: Date;
  targetUuid: string;
  selectedDate: string;
}

const initialState: TimetableState = {
  timetableLoading: false,
  scheduleLoading: false,
  timetable: {
    time1: "-",
    time2: "-",
    time3: "-",
    time4: "-",
    time5: "-",
    time6: "-",
    time7: "-"
  },
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
    case SET_TIMETABLES:
      return {
        ...state,
        timetable: action.payload.timetable
      };
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
    case START_TIMETABLE:
      return {
        ...state,
        timetableLoading: true
      };
    case END_TIMETABLE:
      return {
        ...state,
        timetableLoading: false
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
