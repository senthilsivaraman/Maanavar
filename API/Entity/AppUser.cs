using System;
using System.Collections.Generic;

namespace API.Entity
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }

        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public string Email { get; set; }
        public string FullName { get; set; }
        public string ShortName { get; set; }
        public string Gender { get; set; }
        public DateTime Dob { get; set; }
        public string AlternateEmail { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string Address3 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int Pincode { get; set; }
        public int MobileNumber { get; set; }
        public int AdditionalNumber { get; set; }
        public ICollection<Photo> Photos { get; set; }

        public string Department { get; set; }
        public int DepartmentId { get; set; }
        public int Semester { get; set; }
        
    }
}