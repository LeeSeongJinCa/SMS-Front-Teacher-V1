import { ResSchedule, ResTimetable } from "../../../lib/api/payloads/Main";

export const GET_TIMETABLES_SAGA = "main/GET_TIMETABLE_SAGA" as const;
export const SET_TIMETABLES = "main/SET_TIMETABLE" as const;
export const START_TIMETABLE = "main/START_TIMETABLE" as const;
export const END_TIMETABLE = "main/END_TIMETABLE" as const;

export const GET_SCHEDULES_SAGA = "main/GET_SCHEDULES_SAGA" as const;
export const SET_SCHEDULES = "main/FETCH_SCHEDULES" as const;
export const START_SCHEDULE = "main/START_SCHEDULE" as const;
export const END_SCHEDULE = "main/END_SCHEDULE" as const;

export const SET_SCHEDULER_DATE = "main/SET_SCHEDULER_DATE" as const;

export const SET_TARGET_UUID = "main/SET_TARGET_UUID" as const;

export const SET_SELECTED_DATE = "main/SET_SELECTED_DATE" as const;

export const getSchedulesSaga = (year: number, month: number) => ({
  type: GET_SCHEDULES_SAGA,
  payload: { year, month }
});
export const getTimetablesSaga = (
  year: number,
  month: number,
  day: number
) => ({
  type: GET_TIMETABLES_SAGA,
  payload: { year, month, day }
});
export const setTimetables = (timetable: ResTimetable) => ({
  type: SET_TIMETABLES,
  payload: { timetable }
});
export const setSchedules = (schedules: ResSchedule[]) => ({
  type: SET_SCHEDULES,
  payload: { schedules }
});
export const setSchedulerDate = (date: Date) => ({
  type: SET_SCHEDULER_DATE,
  payload: { date }
});
export const setTargetUuid = (scheduleUuid: string) => ({
  type: SET_TARGET_UUID,
  payload: { scheduleUuid }
});
export const startTimetableLoading = () => ({
  type: START_TIMETABLE
});
export const endTimetableLoading = () => ({
  type: END_TIMETABLE
});
export const startScheduleLoading = () => ({
  type: START_SCHEDULE
});
export const endScheduleLoading = () => ({
  type: END_SCHEDULE
});
export const setSelectedDate = (localDate: string) => ({
  type: SET_SELECTED_DATE,
  payload: { localDate }
});
export type TimetableAction = ReturnType<
  | typeof getSchedulesSaga
  | typeof setTimetables
  | typeof getTimetablesSaga
  | typeof setSchedules
  | typeof setSchedulerDate
  | typeof setTargetUuid
  | typeof startTimetableLoading
  | typeof endTimetableLoading
  | typeof startScheduleLoading
  | typeof endScheduleLoading
  | typeof setSelectedDate
>;
