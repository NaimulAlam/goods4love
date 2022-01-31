/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { UserInfoContext } from '../../../App';

const AddReview = () => {
  const [userInfo] = useContext(UserInfoContext);

  console.log('addReviewContext', userInfo);
  // form validation rules for yup
  const AddReviewValidation = Yup.object().shape({
    addReview: Yup.string().min(100).required('text is required').lowercase(),
  });

  const formOptions = { resolver: yupResolver(AddReviewValidation) };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  // Donations Details Submit api call
  const onSubmit = (submit) => {
    const addReviewData = {
      ...submit,
      userEmail: userInfo.email,
    };
    const url = 'https://goods4love.herokuapp.com/api/addReview';
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-access-token': localStorage.getItem('token') },
      body: JSON.stringify(addReviewData),
    })
      .then((res) => {
        console.log('admin res', res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === 'ok') {
          reset();
          alert('Admin Added Successfully');
        } else {
          alert('Admin not added, Duplicate Admin Email.');
        }
        return data;
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 side-menu">
          <Sidebar />
        </div>
        <div className="col-9 mt-2 mt-md-5 col-xl-10 px-sm-0 px-md-5 py-3 py-md-5" id="profile">
          <h4 className="m-2">Add Your Review Here: </h4>
          <div className="card card-body mt-5 me-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="col-12 position-relative">
                <textarea
                  className={`py-5 form-control ${errors.addReview ? 'is-invalid' : ''}`}
                  type="textarea"
                  name="addReview"
                  placeholder="Leave a comment here"
                  {...register('addReview')}
                />
                <div className="invalid-feedback">Please Use Valid Email Address</div>
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-primary my-3 px-5" type="submit">
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

export default AddReview;
