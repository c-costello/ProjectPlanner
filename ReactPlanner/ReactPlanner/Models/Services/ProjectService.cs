using Microsoft.EntityFrameworkCore;
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

        public async Task DeleteProjectById(int id)
        {
            Project project = await GetProjectByID(id);
            _context.Projects.Remove(project);
            await _context.SaveChangesAsync();

        }

        public async Task<Project> EditProject(Project project)
        {
            _context.Projects.Update(project);
            await _context.SaveChangesAsync();
            return project;
        }

        public async Task<IEnumerable<Project>> GetAllProjects()
        {
            var projects = await _context.Projects.ToListAsync();
            return projects;
        }

        public async Task<IEnumerable<Project>> GetAllUserProjects(string user)
        {
            IEnumerable<Project> allProjects = await GetAllProjects();
            IEnumerable<Project> userProjects = allProjects.Where(p => p.User == user);
            return userProjects;
        }

        public async Task<Project> GetProjectByID(int id)
        {
            Project project = await _context.Projects.FirstOrDefaultAsync(p => p.ID == id);
            return project;
        }
    }
}
