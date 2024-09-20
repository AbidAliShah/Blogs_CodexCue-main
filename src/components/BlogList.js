import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BlogCard from './BlogCard';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/blogs.json');
        console.log('Fetched data:', response.data);
        if (Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          setError('Fetched data is not an array');
          console.error('Fetched data is not an array:', response.data);
        }
      } catch (error) {
        setError('Error fetching the blogs');
        console.error('Error fetching the blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container>
      {blogs.length > 0 ? (
        blogs.map(blog => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            author={blog.author}
            profilePicture={blog.profilePicture}
            content={blog.content}
          />
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </Container>
  );
};

export default BlogList;
