using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactPlanner.Models
{
    public class ToDo
    {
        public int ID { get; set; }
        public int ProjectID { get; set; }
        public DateTime DueDate { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public Project Project { get; set; }
    }
}
