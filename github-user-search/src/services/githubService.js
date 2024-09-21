import axios from 'axios';

const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

// export const fetchUserData = async (username) => {
//   try {
//     const response = await axios.get(`https://api.github.com/users/${username}`, {
//       headers: {
//         Authorization: `Bearer ${GITHUB_API_KEY}`,
//       },
//     });
    
//     return response.data;

//   } catch (error) {
//     throw new Error(`Failed to fetch GitHub data: ${error.response?.status || error.message}. Please Login`);
//   }
// };


export const fetchAdvancedUserData = async ({ username, location, minRepos, page }) => {
  const query = `${username ? `user:${username}` : ''} ${location ? `location:${location}` : ''} ${minRepos ? `repos:>${minRepos}` : ''}`;
  const response = await fetch(`https://api.github.com/search/users?q=${query}&page=${page}&per_page=10`, {
    headers: {
      Authorization: `token ${GITHUB_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch search results');
  }

  const data = await response.json();

 
  const detailedUsers = await Promise.all(
    data.items.map(async (user) => {
      const userDetailsResponse = await fetch(`https://api.github.com/users/${user.login}`, {
        headers: {
          Authorization: `token ${GITHUB_API_KEY}`,
        },
      });

      if (!userDetailsResponse.ok) {
        return user; 
      }

      const userDetails = await userDetailsResponse.json();
      return { ...user, ...userDetails };
    })
  );

  return { items: detailedUsers };
};
