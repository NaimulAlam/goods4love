import React, { useEffect, useState } from "react";
import Sidebar from "../../../../components/Sidebar/Sidebar";
import DonationListCard from "./DonationListCard";

const DonationList = () => {
  const [donationList, setDonationList] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = "http://localhost:5000/api/userDonations";

    const GetUserDonations = async () => {
      try {
        const res = await fetch(url, {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        });
        const data = await res.json();
        console.log("data", data);
        setDonationList(data.userDonations);
        setIsLoading(false);
      } catch (err) {
        console.log("error", err);
      } finally {
        setIsLoading(false);
        console.log("finally");
      }
    };
    GetUserDonations();
  }, [isLoading]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 side-menu">
          <Sidebar />
        </div>
        <div
          className="col-9 col-xl-10 px-sm-0 px-md-5 py-3 py-md-5"
          id="profile"
        >
          <h2>Your contributions for the society: </h2>
          {isLoading && <h1>Loading...</h1>}
          {donationList?.length > 0 && (
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row row-cols-1 row-cols-xl-3 row-cols-md-2 g-3">
                  {donationList.map((donations) => (
                    <DonationListCard
                      key={donations._id}
                      donations={donations}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonationList;
