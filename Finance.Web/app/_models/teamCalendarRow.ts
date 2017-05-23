import { CalendarCell as Cell } from './calendarCell';

export class TeamCalendarRow {
    fullUserName: string;
    cells: Array<Cell>;
    totalLeaveDays: number;
}