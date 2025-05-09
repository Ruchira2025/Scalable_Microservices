using System;
using System.Collections.Generic;

namespace ReviewService.Models;

public partial class Review
{
    public int ReviewId { get; set; }

    public int ProductId { get; set; }

    public int UserId { get; set; }

    public int? Rating { get; set; }

    public string? ReviewText { get; set; }

    public DateOnly? CreatedAt { get; set; }

    public DateOnly? UpdatedAt { get; set; }

    public int? Status { get; set; }
}
