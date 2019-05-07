using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactPlanner.Models.ViewModels
{
    public class ProjectViewModel
    {
        public Project.ColorType Color { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime FinalDueDate { get; set; }
    }
}
