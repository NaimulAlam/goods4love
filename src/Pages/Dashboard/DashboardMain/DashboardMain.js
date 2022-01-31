/* eslint-disable import/no-cycle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../../components/Sidebar/Sidebar';

const DashboardMain = () => {
  const [loggedUser, setLoggedUser] = useState('');

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

  return (
    <div className="container-fluid text-center">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 side-menu">
          <Sidebar />
        </div>
        <div className="col py-3">
          <div className="tab-content">
            <div className="tab-pane fade show active" id="donationList">
              <h1 className="mt-2">Main Dashboard</h1>
              <h3>Hello! {loggedUser?.lastName}.</h3>
              <h4>Welcome to your Dashboard.</h4>
            </div>
            <div className="m-5">
              <h5>Do you wnat to update your Profile?</h5>
              <Link className="btn btn-lg btn-outline-primary mt-5 " to="/profile">
                Update Your Profile
              </Link>
            </div>
            <div className="tab-pane fade" id="allDonations">
              <h4 className="mt-2">allDonations</h4>
              <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p>
            </div>
            <div className="tab-pane fade" id="addAdmin">
              <h4 className="mt-2">Add Admin</h4>
              <p>Donec vel placerat quam, ut euismod risus.</p>
            </div>
            <div className="tab-pane fade" id="addDonation">
              <h4 className="mt-2">Add Donation</h4>
              <p>Donec vel placerat quam, ut euismod risus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
