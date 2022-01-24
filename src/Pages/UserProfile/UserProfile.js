import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import Sidebar from '../../components/Sidebar/Sidebar';

const UserProfile = () => {
  const navigate = useNavigate();
  const [ocupation, setOcupation] = useState('');
  const [tmpOcupation, setTmpOcupation] = useState('');

  async function LoggedUser() {
    const req = await fetch('https://goods4love.herokuapp.com/api/userinfo', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    });
    const data = await req.json();
    console.log(data);
    if (data.status === 'ok') {
      setOcupation(data.ocupation);
    } else {
      alert(data.message);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt.decode(token);

      if (!user) {
        // console.log('user', user);
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        // console.log('err', user);
        LoggedUser();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateOcupation = async (e) => {
    e.preventDefault();
    const req = await fetch('https://goods4love.herokuapp.com/api/userInfoUpdate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({ ocupation: tmpOcupation }),
    });
    const data = await req.json();
    if (data.status === 'ok') {
      setOcupation(tmpOcupation);
      setTmpOcupation('');
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 side-menu">
          <Sidebar />
        </div>
        <div className="col py-3" id="profile">
          <div className="card card-body mt-4">
            <h2 className="card-title">User Profile</h2>
            <h2>Your ocupation is: {`${ocupation}` || 'No ocupation found'}</h2>
            <form onSubmit={updateOcupation}>
              <input
                type="text"
                placeholder="Ocupation"
                value={tmpOcupation}
                onChange={(e) => {
                  return setTmpOcupation(e.target.value);
                }}
              />
              <input type="submit" value="Update Ocupation" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
