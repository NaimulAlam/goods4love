import React from 'react';

const RegistrationForm = () => {
  (function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener(
        'submit',
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add('was-validated');
        },
        false
      );
    });
  })();

  return (
    <div id="SignUp" className="container my-3 px-lg-5">
      <h3 className="text-center py-3">This Registration also will be on a single page</h3>
      <form className="row g-3 needs-validation mx-md-5 px-md-5" noValidate>
        <div className="col-12 position-relative">
          <label htmlFor="validationTooltip01" className="form-label">
            First name
          </label>
          <input type="text" className="form-control" id="validationTooltip01" placeholder="First name" required />
        </div>
        <div className="col-12 position-relative">
          <label htmlFor="validationTooltip02" className="form-label">
            Last name
          </label>
          <input type="text" className="form-control" id="validationTooltip02" placeholder="Last name" required />
        </div>
        <div className="col-12 position-relative">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="col-12 position-relative">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="exampleInputPassword1" required />
        </div>
        <div className="col-12 position-relative">
          <label htmlFor="validationTooltip03" className="form-label">
            Ocupation
          </label>
          <input type="text" className="form-control" id="validationTooltip03" required />
          <div className="invalid-tooltip">Please write your Ocupation.</div>
        </div>

        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltip04" className="form-label">
            city
          </label>
          <select className="form-select" id="validationTooltip04" required>
            <option selected disabled value="">
              Choose your city...
            </option>
            <option value="1">Bydgoszcz</option>
            <option value="2">Torun</option>
            <option value="2">other</option>
          </select>
          <div className="invalid-tooltip">Please select a valid city.</div>
        </div>
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltip05" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="validationTooltip05" required />
          <div className="invalid-tooltip">Please provide a valid zip.</div>
        </div>
        <div className="col-md-4 position-relative">
          <label htmlFor="validationTooltip04" className="form-label">
            Do you want to be a valounteer?
          </label>
          <select className="form-select" id="validationTooltip04" required>
            <option selected value="NO">
              NO
            </option>
            <option value="Yes">Yes</option>
          </select>
          <div className="invalid-tooltip">Please select a valid city.</div>
        </div>
        <div className="col-12 position-relative">
          <input type="checkbox" className="form-check-input" id="validationTooltip05" required />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I agree to all terms and conditions
          </label>
          <div className="invalid-tooltip">Please check the terms and conditions.</div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
