import React from 'react';

const AllDonationDetails = (props) => {
  const { email, cause, amount, lastName, firstName, city } = props.donations;

  return (
    <tr>
      <td />
      <td>
        {firstName} {lastName}
      </td>
      <td>{cause}</td>
      <td>{amount}</td>
      <td>{email}</td>
      <td>{city}</td>
    </tr>
  );
};

export default AllDonationDetails;
