import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>User Profile: {userId}</h1>
      <p>Details for user {userId} will be displayed here.</p>
    </div>
  );
};

export default UserProfile;
