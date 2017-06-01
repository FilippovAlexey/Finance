namespace MedeStaff.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _9 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.FinanceProjects", "FinanceUser_Id", "dbo.FinanceUsers");
            DropForeignKey("dbo.FinanceUsers", "FinanceProject_Id", "dbo.FinanceProjects");
            DropIndex("dbo.FinanceProjects", new[] { "FinanceUser_Id" });
            DropIndex("dbo.FinanceUsers", new[] { "FinanceProject_Id" });
            CreateTable(
                "dbo.FinanceUserFinanceProjects",
                c => new
                    {
                        FinanceUser_Id = c.Int(nullable: false),
                        FinanceProject_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.FinanceUser_Id, t.FinanceProject_Id })
                .ForeignKey("dbo.FinanceUsers", t => t.FinanceUser_Id, cascadeDelete: true)
                .ForeignKey("dbo.FinanceProjects", t => t.FinanceProject_Id, cascadeDelete: true)
                .Index(t => t.FinanceUser_Id)
                .Index(t => t.FinanceProject_Id);
            
            DropColumn("dbo.FinanceProjects", "FinanceUser_Id");
            DropColumn("dbo.FinanceUsers", "FinanceProject_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.FinanceUsers", "FinanceProject_Id", c => c.Int());
            AddColumn("dbo.FinanceProjects", "FinanceUser_Id", c => c.Int());
            DropForeignKey("dbo.FinanceUserFinanceProjects", "FinanceProject_Id", "dbo.FinanceProjects");
            DropForeignKey("dbo.FinanceUserFinanceProjects", "FinanceUser_Id", "dbo.FinanceUsers");
            DropIndex("dbo.FinanceUserFinanceProjects", new[] { "FinanceProject_Id" });
            DropIndex("dbo.FinanceUserFinanceProjects", new[] { "FinanceUser_Id" });
            DropTable("dbo.FinanceUserFinanceProjects");
            CreateIndex("dbo.FinanceUsers", "FinanceProject_Id");
            CreateIndex("dbo.FinanceProjects", "FinanceUser_Id");
            AddForeignKey("dbo.FinanceUsers", "FinanceProject_Id", "dbo.FinanceProjects", "Id");
            AddForeignKey("dbo.FinanceProjects", "FinanceUser_Id", "dbo.FinanceUsers", "Id");
        }
    }
}
