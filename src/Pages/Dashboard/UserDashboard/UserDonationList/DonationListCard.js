import React from 'react';

const DonationListCard = (props) => {
  const { donations } = props;
  // const [cause, email, amount] = props.data;
  // console.log('props', donations);
  return (
    <div className="col">
      <div className="card">
        <img src="https://iili.io/BZKNyP.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{donations.cause}</h5>
          <h5 className="card-title">{donations.lastName}</h5>
          <p className="card-text">Thank you for your contribution of {donations.amount}.00 zł</p>
        </div>
      </div>
    </div>
  );
};

export default DonationListCard;
