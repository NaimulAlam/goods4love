import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./UserDashboard.css";

const UserDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 side-menu">
          <Sidebar />
        </div>
        <div className="col py-3">
          <div className="tab-content">
            <div className="tab-pane fade show active" id="donationList">
              <h4 className="mt-2">Donation List</h4>
              <p>Aliquip placeat salvia cillum iphone. Seitan aliquip</p>
            </div>
            <div className="tab-pane fade" id="allDonations">
              <h4 className="mt-2">allDonations</h4>
              <p>
                Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.
              </p>
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

export default UserDashboard;
