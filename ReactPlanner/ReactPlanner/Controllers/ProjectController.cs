using Microsoft.AspNetCore.Mvc;
using ReactPlanner.Models.Interfaces;
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
    }
}
