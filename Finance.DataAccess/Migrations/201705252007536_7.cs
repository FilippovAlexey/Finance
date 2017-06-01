namespace MedeStaff.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _7 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.FinanceUsers", "Project_Id", c => c.Int());
            CreateIndex("dbo.FinanceUsers", "Project_Id");
            AddForeignKey("dbo.FinanceUsers", "Project_Id", "dbo.FinanceProjects", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.FinanceUsers", "Project_Id", "dbo.FinanceProjects");
            DropIndex("dbo.FinanceUsers", new[] { "Project_Id" });
            DropColumn("dbo.FinanceUsers", "Project_Id");
        }
    }
}
