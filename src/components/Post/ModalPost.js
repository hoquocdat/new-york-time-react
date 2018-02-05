import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import moment from 'moment';


const ModalPost = ({ isOpen, toggle, headline, pub_date, snippet, source }) => {
	return (
				<Modal isOpen={isOpen} toggle={toggle} size="lg">
					<ModalHeader toggle={toggle} />
					<ModalBody>
						<h4>{headline.main}</h4>
						<p><small>{moment(pub_date).fromNow()}</small></p>
						<div className="pt-3 pb-3">
							{snippet}
						</div>
						<p className="text-right text-info">Source: {source}</p>
					</ModalBody>
				</Modal>
	);
};

export default ModalPost;