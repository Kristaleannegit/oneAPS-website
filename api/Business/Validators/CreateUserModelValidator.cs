using FluentValidation;
using Dta.OneAps.Api.Business.Models;

namespace Dta.OneAps.Api.Business.Validators {
    public class CreateUserModelValidator : AbstractValidator<CreateUserModel> {
        public CreateUserModelValidator(IUserBusiness userBusiness, ILookupBusiness lookupBusiness) {
            RuleFor(u => u.Name).NotEmpty();
            RuleFor(u => u.EmailAddress)
                .NotEmpty()
                .Matches(".+@.+\\.gov\\.au").WithMessage("{PropertyValue} must be a gov.au {PropertyName}")
                .MustAsync(async (e, c) => await userBusiness.GetByEmailAsync(e) == null).WithMessage("{PropertyValue} is already used.");
            RuleFor(u => u.Agency)
                .NotEmpty()
                .Must(e => lookupBusiness.Get("Agency", e) != null).WithMessage("{PropertyValue} is not a valid {PropertyName}.");
            RuleFor(u => u.Password).NotEmpty().MinimumLength(8);
        }
    }
}