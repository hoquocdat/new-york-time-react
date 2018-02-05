import React from 'react';

const Loading = ({ isLoading }) => {
	const classImage = (isLoading) => {
		return isLoading ? ` d-block` : ` d-none`;
	};
	return <img className={`m-auto ${classImage(isLoading)}`} src={require('../../assets/images/spinner.svg')} alt="Loading" />
};

export default Loading;