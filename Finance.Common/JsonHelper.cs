using System.IO;
using Newtonsoft.Json;

namespace Finance.Common
{
    public static class JsonHelper
    {
        public static string ToJson(object data)
        {
            JsonSerializer serializer = new JsonSerializer();
            StringWriter stringWriter = new StringWriter();
            using (JsonTextWriter writer = new JsonTextWriter(stringWriter))
            {
                writer.QuoteName = false;
                serializer.Serialize(writer, data);
            }
            string result = stringWriter.ToString();
            return result;
        }
    }
}
