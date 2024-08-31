import React from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>

      {/* Nested Routes */}
      <Outlet />
    </div>
  );
};

const ProfileRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />}>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route>
    </Routes>
  );
};

export default ProfileRoutes;
