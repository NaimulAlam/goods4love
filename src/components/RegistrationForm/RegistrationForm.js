import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Navbar from '../Shared/Navbar/Navbar';
import './RegistrationForm.css';

const RegistrationForm = () => {
  // form validation rules for yup
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required').max(100),
    lastName: Yup.string().required('Last name is required').max(100),
    email: Yup.string()
      .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
      .lowercase()
      .required('Email is required'),
    password: Yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/)
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(150),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
    city: Yup.string().required('City name is required'),
    zipCode: Yup.string()
      .matches(/^\d{5}?$/)
      .required('Zip Code is required'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  function onSubmit(data) {
    // display form data on success
    alert(`SUCCESS!! :-)\n\n${JSON.stringify(data, null, 4)}`);
    return console.log(data);
  }
  console.log(errors);

  return (
    <div>
      <Navbar />
      <div datatype="form" id="SignUp" className="container my-3 px-lg-5">
        <h3 className="text-center py-3"> Create An Acount </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="formDiv row g-3 px-md-5">
          <div className="col-12 position-relative">
            <input
              className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
              type="text"
              name="firstName"
              placeholder="First name"
              {...register('firstName')}
            />
            <div className="invalid-feedback">{errors.firstName?.message}</div>
          </div>
          <div className="col-12 position-relative">
            <input
              className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
              type="text"
              name="lastName"
              placeholder="Last name"
              {...register('lastName')}
            />
            <div className="invalid-feedback">{errors.lastName?.message}</div>
          </div>
          <div className="col-12 position-relative">
            <input
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              type="text"
              name="email"
              placeholder="Email"
              {...register('email')}
            />
            <div className="invalid-feedback">Please Use Valid Email Address</div>
          </div>
          <div className="col-12 position-relative">
            <input
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              type="password"
              name="password"
              placeholder="Password"
              {...register('password')}
            />
            <div className="invalid-feedback">
              Password Must Contain A Uppercase, A lowercase, A number, A special Charecter with min 6 Charecter
            </div>
          </div>
          <div className="col-12 position-relative">
            <input
              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              {...register('confirmPassword')}
            />
            <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
          </div>
          <div className="col-12 position-relative">
            <input
              className="form-control"
              type="text"
              name="Ocupation"
              placeholder="Ocupation"
              {...register('ocupation')}
            />
          </div>
          <div className="col-12 position-relative">
            <select className={`form-control ${errors.city ? 'is-invalid' : ''}`} name="city" {...register('city')}>
              <option value="">Select your city...</option>
              <option value="Bydgoszcz">Bydgoszcz</option>
              <option value=" Torun">Torun</option>
              <option value=" Other">Other</option>
            </select>
            <div className="invalid-feedback">{errors.city?.message}</div>
          </div>
          <div className="col-12 position-relative">
            <input
              className="form-control"
              type="number"
              name="zipCode"
              placeholder="Zip Code"
              {...register('zipCode')}
            />
          </div>
          <div className="col-12 position-relative">
            <input
              className="form-check-input"
              type="checkbox"
              name="termsAndConditions"
              id="termsAndConditions"
              required
            />
            <label className="form-check-label mx-2" htmlFor="termsAndConditions">
              I agree to all terms and conditions
            </label>
            <div className="invalid-tooltip"> Please check the terms and conditions.</div>
          </div>
          <div className="col-12 text-center">
            <button className="btn btn-primary px-5" type="submit">
              Submit form
            </button>
            <button
              className="btn btn-danger float-end"
              type="button"
              onClick={() => {
                return reset();
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
