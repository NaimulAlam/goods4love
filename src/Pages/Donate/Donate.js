import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const Donate = () => {
  const [donation, setDonation] = React.useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    console.log('clicked');
    return setDonation(donation + 1);
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 side-menu">
            <Sidebar />
          </div>
          <div className="col py-3" id="profile">
            <div className="card card-body mt-4 me-auto">
              <h2 className="card-title" id="showDonation">
                {donation}
              </h2>
              <input className="btn btn-primary" onClick={handleClick} type="button" value="Donate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
