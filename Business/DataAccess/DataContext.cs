using System;
using Business.Entities;
using Microsoft.EntityFrameworkCore;

namespace Business.DataAccess
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
        : base(options)
        { }
        public DbSet<User> Users { get; set; }
        public DbSet<VideoGame> VideoGames { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Specify the path of the database here
            optionsBuilder.UseSqlite("Data Source=/Business/App_Data/database/photoDB.db");
        }
    }
}
