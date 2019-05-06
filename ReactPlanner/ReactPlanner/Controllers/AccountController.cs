using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ReactPlanner.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactPlanner.Controllers
{
    public class AccountController : Controller
    {
        private readonly SignInManager<ApplicationUser> _SignInManager;
        private readonly UserManager<ApplicationUser> _UserManager;

        public AccountController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            _SignInManager = signInManager;
            _UserManager = userManager;
        }
    }
}
