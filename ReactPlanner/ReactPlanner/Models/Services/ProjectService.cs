using ReactPlanner.Data;
using ReactPlanner.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactPlanner.Models.Services
{
    public class ProjectService : IProject
    {
        private readonly PlannerDbContext _context;

        public ProjectService(PlannerDbContext context)
        {
            _context = context;
        }
    }
}
