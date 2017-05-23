namespace MedeStaff.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _2 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.AccountNameMappings", "ValueId", "dbo.Accounts");
            DropForeignKey("dbo.Holidays", "Calendar_Id", "dbo.Calendars");
            DropForeignKey("dbo.Users", "CalendarId", "dbo.Calendars");
            DropForeignKey("dbo.Users", "DepartmentId", "dbo.Departments");
            DropForeignKey("dbo.Users", "LocationId", "dbo.Locations");
            DropForeignKey("dbo.Users", "TeamId", "dbo.Teams");
            DropForeignKey("dbo.Leaves", "UserId", "dbo.Users");
            DropForeignKey("dbo.ProjectBuMappings", "ValueId", "dbo.BizUnits");
            DropForeignKey("dbo.TimeReports", "AccountId", "dbo.Accounts");
            DropForeignKey("dbo.TimeReports", "BizUnitId", "dbo.BizUnits");
            DropForeignKey("dbo.TimeReports", "ComponentId", "dbo.Components");
            DropForeignKey("dbo.TimeReports", "LocationId", "dbo.Locations");
            DropForeignKey("dbo.TimeReports", "ProjectId", "dbo.ProjectBuMappings");
            DropForeignKey("dbo.TimeReports", "TeamId", "dbo.Teams");
            DropForeignKey("dbo.TimeReports", "UserId", "dbo.Users");
            DropIndex("dbo.AccountNameMappings", new[] { "ValueId" });
            DropIndex("dbo.Holidays", new[] { "Calendar_Id" });
            DropIndex("dbo.Users", new[] { "LocationId" });
            DropIndex("dbo.Users", new[] { "DepartmentId" });
            DropIndex("dbo.Users", new[] { "CalendarId" });
            DropIndex("dbo.Users", new[] { "TeamId" });
            DropIndex("dbo.Leaves", new[] { "UserId" });
            DropIndex("dbo.ProjectBuMappings", new[] { "ValueId" });
            DropIndex("dbo.TimeReports", new[] { "WorkDate" });
            DropIndex("dbo.TimeReports", new[] { "UserId" });
            DropIndex("dbo.TimeReports", new[] { "LocationId" });
            DropIndex("dbo.TimeReports", new[] { "AccountId" });
            DropIndex("dbo.TimeReports", new[] { "BizUnitId" });
            DropIndex("dbo.TimeReports", new[] { "ProjectId" });
            DropIndex("dbo.TimeReports", new[] { "TeamId" });
            DropIndex("dbo.TimeReports", new[] { "ComponentId" });
            DropTable("dbo.AccountNameMappings");
            DropTable("dbo.Accounts");
            DropTable("dbo.BizUnits");
            DropTable("dbo.Calendars");
            DropTable("dbo.Holidays");
            DropTable("dbo.Components");
            DropTable("dbo.Departments");
            DropTable("dbo.Users");
            DropTable("dbo.Locations");
            DropTable("dbo.Teams");
            DropTable("dbo.Leaves");
            DropTable("dbo.Products");
            DropTable("dbo.ProjectBuMappings");
            DropTable("dbo.TimeReports");
        }
        
        public override void Down()
        {
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
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.ProjectBuMappings",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Key = c.String(),
                        ValueId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Products",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
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
                "dbo.Locations",
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
                "dbo.Components",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
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
                "dbo.BizUnits",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Accounts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.AccountNameMappings",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Key = c.String(),
                        ValueId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateIndex("dbo.TimeReports", "ComponentId");
            CreateIndex("dbo.TimeReports", "TeamId");
            CreateIndex("dbo.TimeReports", "ProjectId");
            CreateIndex("dbo.TimeReports", "BizUnitId");
            CreateIndex("dbo.TimeReports", "AccountId");
            CreateIndex("dbo.TimeReports", "LocationId");
            CreateIndex("dbo.TimeReports", "UserId");
            CreateIndex("dbo.TimeReports", "WorkDate");
            CreateIndex("dbo.ProjectBuMappings", "ValueId");
            CreateIndex("dbo.Leaves", "UserId");
            CreateIndex("dbo.Users", "TeamId");
            CreateIndex("dbo.Users", "CalendarId");
            CreateIndex("dbo.Users", "DepartmentId");
            CreateIndex("dbo.Users", "LocationId");
            CreateIndex("dbo.Holidays", "Calendar_Id");
            CreateIndex("dbo.AccountNameMappings", "ValueId");
            AddForeignKey("dbo.TimeReports", "UserId", "dbo.Users", "Id");
            AddForeignKey("dbo.TimeReports", "TeamId", "dbo.Teams", "Id");
            AddForeignKey("dbo.TimeReports", "ProjectId", "dbo.ProjectBuMappings", "Id");
            AddForeignKey("dbo.TimeReports", "LocationId", "dbo.Locations", "Id");
            AddForeignKey("dbo.TimeReports", "ComponentId", "dbo.Components", "Id");
            AddForeignKey("dbo.TimeReports", "BizUnitId", "dbo.BizUnits", "Id");
            AddForeignKey("dbo.TimeReports", "AccountId", "dbo.Accounts", "Id");
            AddForeignKey("dbo.ProjectBuMappings", "ValueId", "dbo.BizUnits", "Id");
            AddForeignKey("dbo.Leaves", "UserId", "dbo.Users", "Id");
            AddForeignKey("dbo.Users", "TeamId", "dbo.Teams", "Id");
            AddForeignKey("dbo.Users", "LocationId", "dbo.Locations", "Id");
            AddForeignKey("dbo.Users", "DepartmentId", "dbo.Departments", "Id");
            AddForeignKey("dbo.Users", "CalendarId", "dbo.Calendars", "Id");
            AddForeignKey("dbo.Holidays", "Calendar_Id", "dbo.Calendars", "Id");
            AddForeignKey("dbo.AccountNameMappings", "ValueId", "dbo.Accounts", "Id");
        }
    }
}
