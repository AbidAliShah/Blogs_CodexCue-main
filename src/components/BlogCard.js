import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  display: flex;
  align-items: flex-start;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 16px;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  margin: 0 0 8px;
  font-size: 1.5rem;
  color: #333;
`;

const Author = styled.h3`
  margin: 0 0 8px;
  font-size: 1rem;
  color: #777;
`;

const Description = styled.p`
  color: #555;
  line-height: 1.5;
`;

const BlogCard = ({ title, author, profilePicture, content }) => {
  return (
    <Card>
      <ProfilePicture src={profilePicture} alt={`${author}'s profile`} />
      <Content>
        <Title>{title}</Title>
        <Author>by {author}</Author>
        <Description>{content}</Description>
      </Content>
    </Card>
  );
};

export default BlogCard;
