using Finance.DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Finance.DataAccess.RepositoryInterfaces
{
    public interface IRepository<TEntity> where TEntity : IEntity
    {
        IEnumerable<TEntity> GetAll();
        TEntity Get(int id);
        IEnumerable<TEntity> GetRange(int page, int count = 20);
        IEnumerable<TEntity> Find(Func<TEntity, bool> predicate);
        TEntity FindOne(Func<TEntity, bool> predicate);

        void Add(TEntity item);
        void AddOrUpdate(Expression<Func<TEntity, object>> identifierExpression, TEntity entity);
        int GetCount();
        void Save();
    }
}