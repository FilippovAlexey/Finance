namespace MedeStaff.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _6 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Bills", "FinanceProject_Id", c => c.Int());
            AddColumn("dbo.FinanceUsers", "FinanceProject_Id", c => c.Int());
            CreateIndex("dbo.Bills", "FinanceProject_Id");
            CreateIndex("dbo.FinanceUsers", "FinanceProject_Id");
            AddForeignKey("dbo.Bills", "FinanceProject_Id", "dbo.FinanceProjects", "Id");
            AddForeignKey("dbo.FinanceUsers", "FinanceProject_Id", "dbo.FinanceProjects", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.FinanceUsers", "FinanceProject_Id", "dbo.FinanceProjects");
            DropForeignKey("dbo.Bills", "FinanceProject_Id", "dbo.FinanceProjects");
            DropIndex("dbo.FinanceUsers", new[] { "FinanceProject_Id" });
            DropIndex("dbo.Bills", new[] { "FinanceProject_Id" });
            DropColumn("dbo.FinanceUsers", "FinanceProject_Id");
            DropColumn("dbo.Bills", "FinanceProject_Id");
        }
    }
}
