using System;
using System.Linq;

namespace Finance.Common
{
    public static class EnumHelper
    {
        public static string GetJsonFromEnum<T>() where T : struct, IConvertible
        {
            if (!typeof(T).IsEnum)
                throw new ArgumentException("T must be an enumerated type");

            var data = Enum
              .GetNames(typeof(T))
              .Select(name => new
              {
                  id = (int)Enum.Parse(typeof(T), name),
                  caption = name
              })
              .ToArray();

            string result = JsonHelper.ToJson(data);
            return result;
        }
    }
}
