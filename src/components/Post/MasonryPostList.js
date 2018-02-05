import React from 'react';
import Masonry from 'react-masonry-component';
import CardPost from "../../components/Post/CardPost";
import { masonryOptions} from "../../config";

const renderPosts = (posts) => {
	return posts.length > 0 ? posts.map((post,index) => (
		<div className="post-item" key={index}>
			<CardPost {...post} />
		</div>
	)) : null;
};

const MasonryPostList = ({ posts }) => {
	return (
		<Masonry
			className={'posts-container'} // default ''
			elementType={'div'} // default 'div'
			options={masonryOptions}
			disableImagesLoaded={false} // default false
			updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
		>
			{renderPosts(posts)}
		</Masonry>
	)
};

export default MasonryPostList;