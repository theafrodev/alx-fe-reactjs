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
import { fetchAdvancedUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserData([]);
    setLoading(true);
    setError(false);
    setPage(1);  

    try {
      const data = await fetchAdvancedUserData({ username, location, minRepos, page: 1 });
      setUserData(data.items); 
      setHasMore(data.items.length > 0);  
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setLoading(true);

    try {
      const nextPage = page + 1;
      const data = await fetchAdvancedUserData({ username, location, minRepos, page: nextPage });
      setUserData(prevData => [...prevData, ...data.items]); 
      setPage(nextPage);
      setHasMore(data.items.length > 0);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div>
      <form className='bg-slate-400 p-4 rounded flex flex-col lg:flex-row gap-2' onSubmit={handleSubmit}>
        <input className='rounded bg-white px-3 py-2 text-black'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <input className='rounded bg-white px-3 py-2 text-black'
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
        <input className='rounded bg-white px-3 py-2 text-black'
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min number of repositories"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find any users matching your criteria.</p>}
      
      {!loading && !error && userData.length === 0 && (
        <p>No user found</p>
      )}

      {userData && userData.length > 0 && (
        <div className>
          <h2>Search Results:</h2>
          {userData.map(user => (
            <div key={user.id} className='bg-slate-600 p-6 my-6 w-fit mx-auto rounded-lg'>
              <h3>{user.login}</h3>
              <img className='m-auto' src={user.avatar_url} alt={`${user.login}'s avatar`} width={200} />
              <p>Location: {user.location || 'Not specified'}</p>
              <p>Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </a>
            </div>
          ))}
          {hasMore && !loading && (
            <button onClick={loadMore}>Load More</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
