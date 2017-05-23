using System;
using System.ComponentModel;
// ReSharper disable UnusedMember.Global

namespace Finance.Common
{
    [Serializable]
    public enum LeaveType
    {
        [Description("Vacation")]
        Vacation = 1,
        [Description("Work on Holiday")]
        WorkOnHoliday = 2,
        [Description("Sick Leave")]
        Sickness = 3,
        [Description("Business Trip")]
        BusinessTrip = 4
    }

    [Serializable]
    public enum Status
    {
        Pending = 1,
        Approved = 2,
        Rejected = 3
    }

    [Serializable]
    public enum CalendarType
    {
        Ukraine = 1,
        Usa = 2,
        Uk = 3,
        China = 4
    }

    public enum Position
    {
        ProjectManager,
        DeveloperLead,
        Developer,
        QaLead,
        Qa,
        BusinessAnalytic,
        Administrator
    }

    public enum Gender
    {
        Male,
        Feemale
    }
    public enum ClaimType
    {
        UserIdClaimType,
        UserName,
        Password
    }

    public enum Mappings
    {
        AccountName,
        UsernameName,
        ProjectBu,
        Team,
        Location,
        Vacations
    }
}
