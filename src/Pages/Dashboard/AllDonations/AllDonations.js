import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import AllDonationDetails from "./AllDonationDetails";
import "./AllDonations.css";

const AllDonations = () => {
  const [allDonations, setAllDonations] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = "http://localhost:5000/api/alldonations";

    const GetAllDonations = async () => {
      try {
        const res = await fetch(url, {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        });
        const data = await res.json();
        console.log("allDonation", data.alldonations);
        setAllDonations(data.alldonations);
        setIsLoading(false);
      } catch (err) {
        console.log("error", err);
      } finally {
        console.log("finally");
      }
    };
    GetAllDonations();
  }, [isLoading]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 side-menu">
          <Sidebar />
        </div>
        <div
          className="col-9 col-xl-10 px-sm-0 px-md-5 py-3 py-md-5"
          id="alldonations"
        >
          <h2>All Donations: </h2>
          {isLoading && <h1>Loading...</h1>}
          {allDonations?.length > 0 && (
            <div className="table-responsive">
              <table className="table donationTable table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Surname</th>
                    <th scope="col">DonationsAmount</th>
                    <th scope="col">Served Cause</th>
                    <th scope="col">Email</th>
                    <th scope="col">City</th>
                  </tr>
                </thead>
                <tbody>
                  {allDonations.map((donations) => (
                    <AllDonationDetails
                      key={donations._id}
                      donations={donations}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllDonations;
