using Microsoft.AspNetCore.Mvc;
using MovieAPI.Models;
using System.Security.Cryptography.Xml;

namespace MovieAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MoviesDbContext context;
        public MovieController(MoviesDbContext temp) {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            

            return context.Movies
                .Where(x => x.Edited == "Yes")
                .OrderBy(x => x.Title)
                .ToArray();
        }
    }
}
