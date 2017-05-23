namespace Finance.Web.DependencyResolution
{
    using Services;
    using StructureMap;

    public static class IoC
    {
        public static IContainer Initialize()
        {
            return new Container(c =>
            {
                c.AddRegistry<DefaultRegistry>();
                c.AddRegistry<ServicesRegistry>();
            }
            );
        }
    }
}