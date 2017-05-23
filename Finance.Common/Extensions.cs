using System;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace Finance.Common
{
    public static class Extensions
    {
        private const string EncryptionKey = "MAKV2SPBNI99212";

        public static string Encrypt(this string clearText)
        {
            Rfc2898DeriveBytes pdb = GetDeriveBytes();
            byte[] clearBytes = Encoding.Unicode.GetBytes(clearText);
            using (Aes encryptor = Aes.Create())
            {
                if (encryptor == null) return clearText;
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateEncryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(clearBytes, 0, clearBytes.Length);
                        cs.Close();
                    }
                    clearText = Convert.ToBase64String(ms.ToArray());
                }
            }
            return clearText;
        }

        private static string Decrypt(this string cipherText)
        {
            Rfc2898DeriveBytes pdb = GetDeriveBytes();
            byte[] cipherBytes = Convert.FromBase64String(cipherText);
            using (Aes encryptor = Aes.Create())
            {
                if (encryptor == null) return cipherText;
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateDecryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(cipherBytes, 0, cipherBytes.Length);
                        cs.Close();
                    }
                    cipherText = Encoding.Unicode.GetString(ms.ToArray());
                }
            }
            return cipherText;
        }

        public static string GetUserName(this System.Security.Principal.IPrincipal user)
        {
            string userName = ((ClaimsIdentity)user.Identity)?.Claims?.FirstOrDefault(x => x.Type == "UserName")?.Value;
            return userName;
        }

        public static string GetPass(this System.Security.Principal.IPrincipal user)
        {
            string pass = ((ClaimsIdentity)user.Identity)?.Claims?.FirstOrDefault(x => x.Type == "Password")?.Value.Decrypt();
            return pass;
        }

        private static Rfc2898DeriveBytes GetDeriveBytes()
        {
            Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
            return pdb;
        }

    }
}
