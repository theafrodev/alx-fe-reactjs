// import React, { useState } from 'react';
// import { fetchUserData } from '../services/githubService';

// function Search() {
 
//   const [username, setUsername] = useState('');
//   const [userData, setUserData] = useState(null);


//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//         const data = await fetchUserData(username);
//         setUserData(data);
//       } catch (error) {
//         console.error("Error fetching GitHub data:", error);
//       }
//     };
  
//     return (
//       <div>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter username"
//             required
//           />
//           <button type="submit">Search</button>
//         </form>
//         {userData && (
//           <div>
//             <h2>{userData.name}</h2>
//             <img src={userData.avatar_url} alt="GitHub avatar" />
//             <p>{userData.bio}</p>
//           </div>
//         )}
//       </div>
//     );
//   }
  
//   export default Search;


import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);  
    setUserData(null); 

    try {
      const data = await fetchUserData(username);
      setUserData(data);  
      setLoading(false); 
    } catch (err) {
      setError(true); 
      setLoading(false); 
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          required
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}  
      {error && <p>Looks like we can't find the user</p>} 

      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <img src={userData.avatar_url} alt={`${userData.name}'s avatar`} width={200} />
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
