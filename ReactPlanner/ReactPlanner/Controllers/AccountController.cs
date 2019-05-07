using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ReactPlanner.Models;
using ReactPlanner.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactPlanner.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly SignInManager<ApplicationUser> _SignInManager;
        private readonly UserManager<ApplicationUser> _UserManager;

        public AccountController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            _SignInManager = signInManager;
            _UserManager = userManager;
        }

        [HttpGet("[action]")]
        public LoginCheckViewModel LoginCheck()
        {
            LoginCheckViewModel lcvm = new LoginCheckViewModel();
            if (_SignInManager.IsSignedIn(User))
            {
                lcvm.isLoggedIn = true;
                lcvm.FullName = User.Claims.First(name => name.Type == "FullName").Value;
                
            }
            else
            {
                lcvm.isLoggedIn = false;
                lcvm.FullName = null;

            }
            return lcvm;
        }

        [HttpPost("[action]")]
        public async Task<LoginCheckViewModel> Login(LoginViewModel lvm)
        {
            LoginCheckViewModel lcvm = new LoginCheckViewModel();
            Microsoft.AspNetCore.Identity.SignInResult result = await _SignInManager.PasswordSignInAsync(lvm.Username, lvm.Password, false, false);
            if ( result.Succeeded)
            {
                lcvm.isLoggedIn = true;
                lcvm.FullName = "ClariceCostello";
                bool check = _SignInManager.IsSignedIn(User);
                return lcvm;
            }
            lcvm.isLoggedIn = false;
            lcvm.FullName = null;
            return lcvm;

        }
    }
}
