namespace MedeStaff.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.FinanceProjects",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Bills",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        FinanceProject_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.FinanceProjects", t => t.FinanceProject_Id)
                .Index(t => t.FinanceProject_Id);
            
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
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Bills", "FinanceProject_Id", "dbo.FinanceProjects");
            DropIndex("dbo.Bills", new[] { "FinanceProject_Id" });
            DropTable("dbo.FinanceUsers");
            DropTable("dbo.Bills");
            DropTable("dbo.FinanceProjects");
        }
    }
}
