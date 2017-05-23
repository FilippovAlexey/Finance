import { User } from './user';

export class Leave {
    type: string;
    status: string;
    startDate: Date;
    endDate: Date;
    actualDuration: number;
    userId: number;
    user: User;
    approver: string;
  //  backup: string;
    issueKey: string;
}