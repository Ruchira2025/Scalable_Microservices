using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ReviewService.Models;

public partial class InventoryContext : DbContext
{
    public InventoryContext()
    {
    }

    public InventoryContext(DbContextOptions<InventoryContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Ratingssummary> Ratingssummaries { get; set; }

    public virtual DbSet<Review> Reviews { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=Inventory;Username=postgres;Password=Vivek*01");


    //postgresql://postgres:[YOUR-PASSWORD]@db.zgsajxgzstnpvkfhvslz.supabase.co:5432/postgres

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Ratingssummary>(entity =>
        {
            entity.HasKey(e => e.ProductId).HasName("ratingssummary_pkey");

            entity.ToTable("ratingssummary", "reviewmgt");

            entity.Property(e => e.ProductId)
                .ValueGeneratedNever()
                .HasColumnName("product_id");
            entity.Property(e => e.AverageRating)
                .HasPrecision(3, 2)
                .HasDefaultValueSql("0.00")
                .HasColumnName("average_rating");
            entity.Property(e => e.TotalReviews)
                .HasDefaultValue(0)
                .HasColumnName("total_reviews");
        });

        modelBuilder.Entity<Review>(entity =>
        {
            entity.HasKey(e => e.ReviewId).HasName("reviews_pkey");

            entity.ToTable("reviews", "reviewmgt");

            entity.Property(e => e.ReviewId)
                .HasDefaultValueSql("nextval('reviews_review_id_seq'::regclass)")
                .HasColumnName("review_id");
            entity.Property(e => e.CreatedAt).HasColumnName("created_at");
            entity.Property(e => e.ProductId).HasColumnName("product_id");
            entity.Property(e => e.Rating).HasColumnName("rating");
            entity.Property(e => e.ReviewText).HasColumnName("review_text");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.UpdatedAt).HasColumnName("updated_at");
            entity.Property(e => e.UserId).HasColumnName("user_id");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
