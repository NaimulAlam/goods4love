/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { UserInfoContext } from '../../../App';

const AddDonation = () => {
  const [userInfo] = useContext(UserInfoContext);

  // form validation rules for yup
  const AddDonationSchema = Yup.object().shape({
    donationTitle: Yup.string().min(5, 'Please add min 5 letter').required('Please add the donation/cause name'),
    description: Yup.string().min(40, 'Please add min 40 letter').required('Please add description of it'),
  });

  const formOptions = { resolver: yupResolver(AddDonationSchema) };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  // Donations Details Submit api call
  const onSubmit = (submit) => {
    console.log('submit', submit);
    const AddDonationData = {
      ...submit,
      adminEmail: userInfo.email,
    };
    const url = 'https://goods4love.herokuapp.com/api/addDonation';
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(AddDonationData),
    })
      .then((res) => {
        console.log('AddDonationData res', res);
        return res.json();
      })
      .then((data) => {
        console.log('AddDonationData resdata', data);
        if (data.status === 'ok') {
          reset();
          alert('Donation Data Added Successfully');
        } else {
          alert('Error!! Donation Data not added');
        }
        return data;
      })
      .catch((err) => {
        console.log('err', err);
      });
    console.log('AddDonationData', AddDonationData);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 side-menu">
          <Sidebar />
        </div>
        <div className="col py-3" id="addDonation">
          <div>
            <h1>Add A Donation/ Cause</h1>
          </div>
          <div className="card card-body mt-4 me-md-5 me-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="row g-4">
              <div className="col-12 position-relative">
                <input
                  className={`form-control ${errors.donationTitle ? 'is-invalid' : ''}`}
                  type="text"
                  name="donationTitle"
                  placeholder="Donation/Cause Title"
                  {...register('donationTitle')}
                />
                <div className="invalid-feedback">{errors.donationTitle?.message}</div>
              </div>
              <div className="col-12 position-relative">
                <textarea
                  className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                  type="text"
                  name="description"
                  placeholder="Description"
                  {...register('description')}
                />
                <div className="invalid-feedback">{errors.description?.message}</div>
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
                  Check Before Submittion
                </label>
                <div className="invalid-tooltip">Please! Check Before Submittion</div>
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-primary px-5" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDonation;
