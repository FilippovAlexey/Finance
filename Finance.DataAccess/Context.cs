using System.Data.Entity;
using Finance.DataAccess.Entities;
using Finance.DataAccess.Interfaces;
using System.Data.Entity.ModelConfiguration.Conventions;
using JetBrains.Annotations;

namespace Finance.DataAccess
{
    [UsedImplicitly]
    public class Context : DbContext, IContext
    {
        public Context() : base("FinanceDb")
        {
            
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
	        modelBuilder.Entity<FinanceUser>()
		        .HasMany<FinanceProject>(s => s.Projects)
		        .WithMany(c => c.Members);
	        //modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
        }

        public DbSet<FinanceUser> FinanceUsers { get; set; }
        public DbSet<FinanceProject> FinanceProjects { get; set; }
	    public DbSet<Bill> Bills { get; set; }
	}
}