
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Bcpg;
using viavem_api.Models;


namespace viavem_api.Context
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        
        public DbSet<Aeroportos> Aeroportos { get; set; }
        public DbSet<Passagens> Passagens { get; set; }
        public DbSet<Usuarios> Usuarios { get; set; }
        public DbSet<Comentarios> Comentarios { get; set; }

    }
}
