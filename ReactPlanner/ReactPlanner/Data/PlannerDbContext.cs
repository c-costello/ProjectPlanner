using Microsoft.EntityFrameworkCore;
using ReactPlanner.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactPlanner.Data
{
    public class PlannerDbContext : DbContext
    {
        public PlannerDbContext(DbContextOptions<PlannerDbContext> options) : base(options)
        {

        }
        public DbSet<Project> Projects { get; set; }
        public DbSet<ToDo> ToDos { get; set; }
    }
}
