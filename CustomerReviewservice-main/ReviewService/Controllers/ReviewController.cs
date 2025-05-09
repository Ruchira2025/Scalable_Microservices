using Microsoft.AspNetCore.Mvc;

namespace ReviewService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReviewsController : ControllerBase
    {
        public class Review
        {
            public int PurchaseId { get; set; }
            public int ProductId { get; set; }
            public string Rating { get; set; }
            public string Comment { get; set; }
        }

        private static readonly List<Review> reviews = new();

        [HttpPost]
        public IActionResult Post([FromBody] Review review)
        {
            if (review == null || review.ProductId == 0 || string.IsNullOrEmpty(review.Rating))
            {
                return BadRequest("Invalid review data");
            }

            reviews.Add(review);
            return Ok(new { message = "Review submitted", review });
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(reviews);
        }
    }
}

