namespace MedeStaff.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _8 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.FinanceUsers", "Project_Id", "dbo.FinanceProjects");
            DropIndex("dbo.FinanceUsers", new[] { "Project_Id" });
            AddColumn("dbo.FinanceProjects", "FinanceUser_Id", c => c.Int());
            CreateIndex("dbo.FinanceProjects", "FinanceUser_Id");
            AddForeignKey("dbo.FinanceProjects", "FinanceUser_Id", "dbo.FinanceUsers", "Id");
            DropColumn("dbo.FinanceUsers", "Project_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.FinanceUsers", "Project_Id", c => c.Int());
            DropForeignKey("dbo.FinanceProjects", "FinanceUser_Id", "dbo.FinanceUsers");
            DropIndex("dbo.FinanceProjects", new[] { "FinanceUser_Id" });
            DropColumn("dbo.FinanceProjects", "FinanceUser_Id");
            CreateIndex("dbo.FinanceUsers", "Project_Id");
            AddForeignKey("dbo.FinanceUsers", "Project_Id", "dbo.FinanceProjects", "Id");
        }
    }
}
