/* eslint-disable import/no-cycle */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Sidebar from '../../../components/Sidebar/Sidebar';
// import { UserContext } from '../../../App';

const Donate = () => {
  const [loggedUser, setLoggedUser] = useState('');

  // form validation rules for yup
  const donateValidationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
      .required('Email is required')
      .lowercase(),
    contactNumber: Yup.string()
      .required('contact number is required')
      .min(9, 'contact No. must be 9 digits')
      .max(13, 'contact No. must be 13 digits'),
    cause: Yup.string().required('Please select a cause'),
    amount: Yup.number().required('Please enter amount'),
  });

  const formOptions = { resolver: yupResolver(donateValidationSchema) };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  useEffect(() => {
    async function LoggedUser() {
      const url = 'https://goods4love.herokuapp.com/api/userinfo';
      const req = await fetch(url, {
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
      });
      const data = await req.json();
      if (data.status === 'ok') {
        setLoggedUser(data.userInfo);
      } else {
        console.log(data.message);
      }
    }
    LoggedUser();
  }, []);

  // Donations Details Submit api call
  const onSubmit = (submit) => {
    const donationData = {
      ...submit,
      oldEmail: loggedUser.email,
      firstName: loggedUser.firstName,
      lastName: loggedUser.lastName,
      city: loggedUser.city,
      uid: loggedUser._id,
    };
    console.log('submit', donationData);
    const url = 'https://goods4love.herokuapp.com/api/donate';
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-access-token': localStorage.getItem('token') },
      body: JSON.stringify(donationData),
    })
      .then((res) => {
        // console.log('res', res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === 'ok') {
          reset();
          alert('Donation Successfull! Thank you for your support');
        } else {
          alert('Donation Failed! Please try again');
        }
        return data;
      })
      .catch((err) => {
        console.log('err', err);
      });
    // display form data on success
    // alert(`SUCCESS!! :-)\n\n${JSON.stringify(data, null, 4)}`);
  };
  console.log(errors);
  // console.log('loggedUser', loggedUser);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 side-menu">
          <Sidebar />
        </div>
        <div className="col py-3" id="profile">
          <div>
            <h1>Hi, {loggedUser?.lastName}! </h1>
            <p>You are so great! you are going to help on cause.</p>
          </div>
          <div className="card card-body mt-4 me-md-5 me-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="row g-4">
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
                  className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
                  type="text"
                  name="contactNumber"
                  placeholder="Contact/ Phone Number"
                  {...register('contactNumber')}
                />
                <div className="invalid-feedback">Please Use Valid Contact Number</div>
              </div>
              <div className="col-12 position-relative">
                <select
                  className={`form-control ${errors.cause ? 'is-invalid' : ''}`}
                  name="cause"
                  {...register('cause')}
                >
                  <option value="">Select your cause...</option>
                  <option value="Save Children">Save Children</option>
                  <option value="Save Earth">Save The Earth</option>
                  <option value="Help Elderly">Help Elderly</option>
                </select>
                <div className="invalid-feedback">{errors.cause?.message}</div>
              </div>
              <div className="col-12 position-relative">
                <input
                  className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  {...register('amount')}
                />
                <div className="invalid-feedback">Please enter valid amount</div>
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
                <div className="invalid-tooltip">Please agree to the terms and conditions.</div>
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-primary px-5" type="submit">
                  Submit form
                </button>
                <button
                  className="btn btn-danger float-end"
                  type="button"
                  onClick={() => {
                    reset();
                  }}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
