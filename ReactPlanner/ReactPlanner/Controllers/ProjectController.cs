using Microsoft.AspNetCore.Mvc;
using ReactPlanner.Models;
using ReactPlanner.Models.Interfaces;
using ReactPlanner.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactPlanner.Controllers
{
    [Route("api/[controller]")]
    public class ProjectController : Controller
    {
        private readonly IProject _context;

        public ProjectController(IProject context)
        {
            _context = context;
        }

        [HttpPost("[action]")]
        public async Task<Project> CreateProject(ProjectViewModel pvm)
        {
            string user = User.Identity.Name;
            Project project = new Project()
            {
                User = user,
                Title = pvm.Title,
                Description = pvm.Description,
                Color = pvm.Color,
                FinalDueDate = pvm.FinalDueDate
            };
            await _context.CreateProject(project);
            return project;
        }

        [HttpGet("[action]")]
        public async Task<Project[]> GetAllProjects()
        {
            var projects = await _context.GetAllUserProjects(User.Identity.Name);
            return projects.ToArray();
        }

        [HttpPost("[action]")]
        public async Task<DeleteViewModel> DeleteProject(DeleteViewModel dvm)
        {
            await _context.DeleteProjectById(dvm.Id);
            return dvm;
        }
    }
}
