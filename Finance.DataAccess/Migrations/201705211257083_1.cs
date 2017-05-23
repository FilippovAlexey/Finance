namespace MedeStaff.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.AccountNameMappings",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Key = c.String(),
                        ValueId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Accounts", t => t.ValueId)
                .Index(t => t.ValueId);
            
            CreateTable(
                "dbo.Accounts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.BizUnits",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Calendars",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Type = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Holidays",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Date = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        Calendar_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Calendars", t => t.Calendar_Id)
                .Index(t => t.Calendar_Id);
            
            CreateTable(
                "dbo.Components",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Departments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        UserName = c.String(),
                        LocationId = c.Int(),
                        BirthDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        JobStartDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        Gender = c.Int(nullable: false),
                        Position = c.Int(nullable: false),
                        DepartmentId = c.Int(),
                        CalendarId = c.Int(),
                        TeamId = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Calendars", t => t.CalendarId)
                .ForeignKey("dbo.Departments", t => t.DepartmentId)
                .ForeignKey("dbo.Locations", t => t.LocationId)
                .ForeignKey("dbo.Teams", t => t.TeamId)
                .Index(t => t.LocationId)
                .Index(t => t.DepartmentId)
                .Index(t => t.CalendarId)
                .Index(t => t.TeamId);
            
            CreateTable(
                "dbo.Locations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Teams",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.FinanceUsers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        UserName = c.String(),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Leaves",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        StartDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        EndDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        Type = c.Int(nullable: false),
                        Status = c.Int(nullable: false),
                        ActualDuration = c.Int(nullable: false),
                        UserId = c.Int(nullable: false),
                        Approver = c.String(),
                        IssueKey = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.UserId)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.Products",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.ProjectBuMappings",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Key = c.String(),
                        ValueId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.BizUnits", t => t.ValueId)
                .Index(t => t.ValueId);
            
            CreateTable(
                "dbo.TimeReports",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Hours = c.Double(nullable: false),
                        WorkDate = c.DateTime(nullable: false),
                        UserId = c.Int(),
                        LocationId = c.Int(),
                        AccountId = c.Int(),
                        AccountName = c.String(),
                        BizUnitId = c.Int(),
                        ProjectName = c.String(),
                        ProjectId = c.Int(),
                        TeamId = c.Int(),
                        ComponentId = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Accounts", t => t.AccountId)
                .ForeignKey("dbo.BizUnits", t => t.BizUnitId)
                .ForeignKey("dbo.Components", t => t.ComponentId)
                .ForeignKey("dbo.Locations", t => t.LocationId)
                .ForeignKey("dbo.ProjectBuMappings", t => t.ProjectId)
                .ForeignKey("dbo.Teams", t => t.TeamId)
                .ForeignKey("dbo.Users", t => t.UserId)
                .Index(t => t.WorkDate)
                .Index(t => t.UserId)
                .Index(t => t.LocationId)
                .Index(t => t.AccountId)
                .Index(t => t.BizUnitId)
                .Index(t => t.ProjectId)
                .Index(t => t.TeamId)
                .Index(t => t.ComponentId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.TimeReports", "UserId", "dbo.Users");
            DropForeignKey("dbo.TimeReports", "TeamId", "dbo.Teams");
            DropForeignKey("dbo.TimeReports", "ProjectId", "dbo.ProjectBuMappings");
            DropForeignKey("dbo.TimeReports", "LocationId", "dbo.Locations");
            DropForeignKey("dbo.TimeReports", "ComponentId", "dbo.Components");
            DropForeignKey("dbo.TimeReports", "BizUnitId", "dbo.BizUnits");
            DropForeignKey("dbo.TimeReports", "AccountId", "dbo.Accounts");
            DropForeignKey("dbo.ProjectBuMappings", "ValueId", "dbo.BizUnits");
            DropForeignKey("dbo.Leaves", "UserId", "dbo.Users");
            DropForeignKey("dbo.Users", "TeamId", "dbo.Teams");
            DropForeignKey("dbo.Users", "LocationId", "dbo.Locations");
            DropForeignKey("dbo.Users", "DepartmentId", "dbo.Departments");
            DropForeignKey("dbo.Users", "CalendarId", "dbo.Calendars");
            DropForeignKey("dbo.Holidays", "Calendar_Id", "dbo.Calendars");
            DropForeignKey("dbo.AccountNameMappings", "ValueId", "dbo.Accounts");
            DropIndex("dbo.TimeReports", new[] { "ComponentId" });
            DropIndex("dbo.TimeReports", new[] { "TeamId" });
            DropIndex("dbo.TimeReports", new[] { "ProjectId" });
            DropIndex("dbo.TimeReports", new[] { "BizUnitId" });
            DropIndex("dbo.TimeReports", new[] { "AccountId" });
            DropIndex("dbo.TimeReports", new[] { "LocationId" });
            DropIndex("dbo.TimeReports", new[] { "UserId" });
            DropIndex("dbo.TimeReports", new[] { "WorkDate" });
            DropIndex("dbo.ProjectBuMappings", new[] { "ValueId" });
            DropIndex("dbo.Leaves", new[] { "UserId" });
            DropIndex("dbo.Users", new[] { "TeamId" });
            DropIndex("dbo.Users", new[] { "CalendarId" });
            DropIndex("dbo.Users", new[] { "DepartmentId" });
            DropIndex("dbo.Users", new[] { "LocationId" });
            DropIndex("dbo.Holidays", new[] { "Calendar_Id" });
            DropIndex("dbo.AccountNameMappings", new[] { "ValueId" });
            DropTable("dbo.TimeReports");
            DropTable("dbo.ProjectBuMappings");
            DropTable("dbo.Products");
            DropTable("dbo.Leaves");
            DropTable("dbo.FinanceUsers");
            DropTable("dbo.Teams");
            DropTable("dbo.Locations");
            DropTable("dbo.Users");
            DropTable("dbo.Departments");
            DropTable("dbo.Components");
            DropTable("dbo.Holidays");
            DropTable("dbo.Calendars");
            DropTable("dbo.BizUnits");
            DropTable("dbo.Accounts");
            DropTable("dbo.AccountNameMappings");
        }
    }
}
