// import { QueryClient, QueryClientProvider } from 'react-query';

// const queryClient = new QueryClient();

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <PostsComponent />
//     </QueryClientProvider>
//   );
// }

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient();

function App() {
  const [currentPage, setCurrentPage] = useState('empty'); 

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        
        <nav>
          <button onClick={() => setCurrentPage('empty')}>Empty Page</button>
          <button onClick={() => setCurrentPage('posts')}>Posts</button>
        </nav>

        
        {currentPage === 'empty' && <div>This is an empty page. Navigate to Posts.</div>}
        {currentPage === 'posts' && <PostsComponent/>}
      </div>
    </QueryClientProvider>
  );
}

export default App;


