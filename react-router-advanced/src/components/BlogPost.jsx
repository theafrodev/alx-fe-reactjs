import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { blogId } = useParams();

  return (
    <div>
      <h1>Blog Post: {blogId}</h1>
      <p>Content for post {blogId} will be displayed here.</p>
    </div>
  );
};

export default BlogPost;
