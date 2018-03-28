import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tile from "../components/Tile";
import { secondaryText } from "../colors";

const Description = styled.p`
  margin-top: 10px;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled(Tile)`
  object-fit: contain;
`;

const Title = styled.h3`
  a {
    color: ${secondaryText};
  }
`;

const mediumCDNUrl = "https://cdn-images-1.medium.com/fit/t/800/240/";

const BlogTile = ({ blog }) => (
  <Wrapper list key={blog.id}>
    <Title>
      <a target="_blank" href={`https://blog.binoy.io/${blog.uniqueSlug}`}>
        {blog.title}
      </a>
    </Title>
    <p>{blog.createdAt}</p>
    {blog.virtuals.previewImage.imageId && (
      <BackgroundImage
        src={`${mediumCDNUrl}${blog.virtuals.previewImage.imageId}`}
        alt="Blog background"
      />
    )}
    <Description>{blog.virtuals.subtitle}</Description>
  </Wrapper>
);

BlogTile.propTypes = {
  blog: PropTypes.shape({
    uniqueSlug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    virtuals: PropTypes.shape({
      previewImage: PropTypes.shape({
        imageId: PropTypes.string,
      }),
      subtitle: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogTile;
