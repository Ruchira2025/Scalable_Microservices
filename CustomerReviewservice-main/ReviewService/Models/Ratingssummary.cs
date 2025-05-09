using System;
using System.Collections.Generic;

namespace ReviewService.Models;

public partial class Ratingssummary
{
    public int ProductId { get; set; }

    public decimal? AverageRating { get; set; }

    public int? TotalReviews { get; set; }
}
