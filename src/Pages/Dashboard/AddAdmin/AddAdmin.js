/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { UserInfoContext } from '../../../App';

const AddAdmin = () => {
  const [userInfo] = useContext(UserInfoContext);

  console.log('userContext Add Admin', userInfo);
  // form validation rules for yup
  const AdminEmailValidation = Yup.object().shape({
    adminEmail: Yup.string()
      .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
      .required('Email is required')
      .lowercase(),
  });

  const formOptions = { resolver: yupResolver(AdminEmailValidation) };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  // Donations Details Submit api call
  const onSubmit = (submit) => {
    const AdminData = {
      ...submit,
      user: userInfo.email,
    };
    const url = 'https://goods4love.herokuapp.com/api/addAdmin';
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-access-token': localStorage.getItem('token') },
      body: JSON.stringify(AdminData),
    })
      .then((res) => {
        console.log('admin res', res);
        return res.json();
      })
      .then((data) => {
        console.log('AddAdmin resdata', data);
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
          <h4 className="m-2">Add an Admin: </h4>
          <div className="card card-body mt-4 me-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="col-12 position-relative">
                <input
                  className={`form-control ${errors.adminEmail ? 'is-invalid' : ''}`}
                  type="text"
                  name="adminEmail"
                  placeholder="Add An Admin with Email"
                  {...register('adminEmail')}
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

export default AddAdmin;
