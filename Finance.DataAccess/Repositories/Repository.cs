using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Linq.Expressions;
using JetBrains.Annotations;
using Finance.DataAccess.Entities;
using Finance.DataAccess.Interfaces;
using Finance.DataAccess.Interfaces.RepositoryInterfaces;
using Finance.DataAccess.RepositoryInterfaces;

namespace Finance.DataAccess.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class, IEntity
    {
        // ReSharper disable once InconsistentNaming
        protected readonly IContext _db;

        [UsedImplicitly]
        public Repository(IContext db)
        {
            _db = db;
        }

        public virtual void Add(TEntity item)
        {
            _db.Set<TEntity>().Add(item);
        }

        public virtual IEnumerable<TEntity> Find(Func<TEntity, bool> predicate)
        {
            return _db.Set<TEntity>().Where(predicate).ToList();
        }

        public virtual TEntity FindOne(Func<TEntity, bool> predicate)
        {
            try
            {
                return _db.Set<TEntity>().Where(predicate).FirstOrDefault();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public virtual TEntity Get(int id)
        {
            return _db.Set<TEntity>().Find(id);
        }

        public virtual IEnumerable<TEntity> GetAll()
        {
            return _db.Set<TEntity>();
        }

        // get range of [count] entities
        public virtual IEnumerable<TEntity> GetRange(int page, int count = 20)
        {
            var res = (from x in _db.Set<TEntity>()
                       orderby x.Id
                       select x).Skip((page - 1) * count)
                    .Take(count);

            return res;
        }

        public int GetCount()
        {
            return _db.Set<TEntity>().Count();
        }

        public virtual void Save()
        {
            _db.SaveChanges();
        }

        public virtual void AddOrUpdate(Expression<Func<TEntity, object>> identifierExpression, TEntity entity)
        {
            _db.Set<TEntity>().AddOrUpdate(identifierExpression, entity);
        }
    }
}