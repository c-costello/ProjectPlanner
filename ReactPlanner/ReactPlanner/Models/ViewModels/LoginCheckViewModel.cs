using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactPlanner.Models.ViewModels
{
    public class LoginCheckViewModel
    {
        public bool isLoggedIn { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
