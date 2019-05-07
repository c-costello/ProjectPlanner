using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactPlanner.Models.Interfaces
{
    public interface IProject
    {
        Task<IEnumerable<Project>> GetAllProjects();
        Task<IEnumerable<Project>> GetAllUserProjects(string user);
        Task<Project> GetProjectByID(int id);
        Task<Project> CreateProject();
        Task<Project> EditProject(Project project);
        Task DeleteProjectById(int id);

    }
}
