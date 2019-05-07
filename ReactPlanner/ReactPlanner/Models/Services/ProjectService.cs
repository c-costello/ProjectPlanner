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

        public async Task<Project> CreateProject(Project project)
        {
            _context.Projects.Add(project);
            await _context.SaveChangesAsync();
            return project;

        }

        public Task DeleteProjectById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Project> EditProject(Project project)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Project>> GetAllProjects()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Project>> GetAllUserProjects(string user)
        {
            throw new NotImplementedException();
        }

        public Task<Project> GetProjectByID(int id)
        {
            throw new NotImplementedException();
        }
    }
}
