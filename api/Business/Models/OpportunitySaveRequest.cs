using System;

namespace Dta.OneAps.Api.Business.Models {
    public class OpportunitySaveRequest {
        public int Id { get; set; }
        public string JobTitle { get; set; }
        public string JobDescription { get; set; }
        public string WhatYoullGain { get; set; }
        public string AboutTeam { get; set; }
        public string NumberOfPeople { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string CommitmentTime { get; set; }
        public string Agency { get; set; }
        public string ContactPersonName { get; set; }
        public string ContactPersonPhone { get; set; }
        public string Location { get; set; }
        public string Skills { get; set; }
        public string AdditionalInfo { get; set; }
        public string SecurityClearance { get; set; }
        public DateTime? Modifed { get; set; }
        public DateTime Created { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
    }
}
