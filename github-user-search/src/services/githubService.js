// const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

// export const fetchUserData = async (username) => {
//   const response = await fetch(`https://api.github.com/users/${username}`, {
//     headers: {
//       Authorization: `Bearer ${GITHUB_API_KEY}`,
//     },
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch GitHub data");
//   }

//   const data = await response.json();
//   return data;
// };


import axios from 'axios';

const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_API_KEY}`,
      },
    });
    
    return response.data;
    
  } catch (error) {
    throw new Error(`Failed to fetch GitHub data: ${error.response?.status || error.message}`);
  }
};
