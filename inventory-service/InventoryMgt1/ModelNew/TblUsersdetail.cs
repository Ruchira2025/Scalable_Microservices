using System;
using System.Collections.Generic;

namespace InventoryMgt1.ModelNew;

public partial class TblUsersdetail
{
    public int UserId { get; set; }

    public string? UserName { get; set; }

    public string? Email { get; set; }

    public DateOnly? RegistrationDate { get; set; }

    public string? CreatedBy { get; set; }

    public DateOnly? CreatedDate { get; set; }

    public int? Status1 { get; set; }

    public string? ModifiedBy { get; set; }

    public DateOnly? ModifiedDate { get; set; }
}
