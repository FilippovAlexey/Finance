using Finance.DataAccess.Interfaces;

namespace Finance.DataAccess.Entities
{
    public class FinanceUser:IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
