// ReSharper disable UnusedMember.Global

using System.Data.Entity;
using JetBrains.Annotations;

namespace Finance.DataAccess.Interfaces
{
    public interface IContext
    {
       
        [UsedImplicitly]
        int SaveChanges();
        DbSet<TEntity> Set<TEntity>() where TEntity : class;
    }
}