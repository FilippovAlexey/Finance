namespace MedeStaff.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _2 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Bills", "FinanceProject_Id", "dbo.FinanceProjects");
            DropIndex("dbo.Bills", new[] { "FinanceProject_Id" });
            AddColumn("dbo.FinanceProjects", "Owner_Id", c => c.Int());
            CreateIndex("dbo.FinanceProjects", "Owner_Id");
            AddForeignKey("dbo.FinanceProjects", "Owner_Id", "dbo.FinanceUsers", "Id");
            DropTable("dbo.Bills");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Bills",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        FinanceProject_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id);
            
            DropForeignKey("dbo.FinanceProjects", "Owner_Id", "dbo.FinanceUsers");
            DropIndex("dbo.FinanceProjects", new[] { "Owner_Id" });
            DropColumn("dbo.FinanceProjects", "Owner_Id");
            CreateIndex("dbo.Bills", "FinanceProject_Id");
            AddForeignKey("dbo.Bills", "FinanceProject_Id", "dbo.FinanceProjects", "Id");
        }
    }
}
