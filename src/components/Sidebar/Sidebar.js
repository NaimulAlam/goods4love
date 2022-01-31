/* eslint-disable import/no-cycle */
import React, { useContext, useEffect, useState } from 'react';
import { UserInfoContext } from '../../App';
import AdminSidebar from './AdminSidebar';
import UserSidebar from './UserSidebar';

const Sidebar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [userInfo, setUserInfo] = useContext(UserInfoContext);

  useEffect(() => {
    const url = 'https://goods4love.herokuapp.com/api/isAdmin';
    const userInfoEmail = userInfo?.email;
    if (userInfoEmail) {
      fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(userInfo),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.status === 'ok') {
            setIsAdmin(true);
            console.log('you are an admin', data);
          } else {
            setIsAdmin(false);
            setUserInfo(null);
            console.log('You are not an admin');
          }
          return data;
        });
    } else {
      console.log('err');
    }
  }, [isAdmin, userInfo, setUserInfo]);

  return <>{userInfo?.email && isAdmin ? <AdminSidebar /> : <UserSidebar />}</>;
};

export default Sidebar;
