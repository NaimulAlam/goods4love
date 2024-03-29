import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const UserProfile = () => {
  const [user, setUser] = useState({});
  // const [tmpEmail, setTmpEmail] = useState('');
  // const [tmpfirstname, setTmpFirstName] = useState('');
  const [tmpLastName, setTmpLastName] = useState("");
  const [tmpOcupation, setTmpOcupation] = useState("");

  async function LoggedUser() {
    const url = "http://localhost:5000/api/userInfo";
    const req = await fetch(url, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();
    console.log("dt", data);
    if (data.status === "ok") {
      setUser(data.userInfo);
      // setTmpEmail(data.user.email);
      // setTmpFirstName(data.user.firstName);
      setTmpLastName(data?.userInfo.lastName);
      setTmpOcupation(data?.userInfo.ocupation);
      console.log(data);
    } else {
      console.log(data.message);
    }
  }

  useEffect(() => {
    LoggedUser();
  }, [user.lastName, user.ocupation]);

  const updateUserInfo = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/userInfoUpdate";
    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        lastName: tmpLastName,
        ocupation: tmpOcupation,
      }),
    });
    const data = await req.json();
    if (data.status === "ok") {
      setUser(tmpLastName, tmpOcupation);
    } else {
      console.log(data.message);
    }
    LoggedUser();
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
            <p>
              Your email: {user ? `${user.email}` : "Email address not found"}
            </p>
            <form onSubmit={updateUserInfo}>
              <div className="row">
                <div className="col-md-6">
                  <p>
                    Your last name is:{" "}
                    {user ? `${user?.lastName}` : "No last name found"}
                  </p>
                  <input
                    type="text"
                    placeholder="Update Last Name"
                    value={tmpLastName}
                    onChange={(e) => setTmpLastName(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <p>
                    Your ocupation is:{" "}
                    {user ? `${user?.ocupation}` : "No ocupation found"}
                  </p>
                  <input
                    type="text"
                    placeholder="Update ocupation"
                    value={tmpOcupation}
                    onChange={(e) => setTmpOcupation(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <input className="btn btn-info" type="submit" value="Update" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
