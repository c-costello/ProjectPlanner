using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactPlanner.Models
{
    public class Project
    {
        public int ID { get; set; }
        public string User { get; set; }
        public ColorType Color { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime FinalDueDate { get; set; }

        public IEnumerable<ToDo> ToDo { get; set; }

        public enum ColorType { blue, green, yellow, orange, red, purple }
    }
}
