import React from 'react';
import moment from 'moment';

const Footer = () => {
	return(
		<p className="text-center">Copyrights ©{moment().format("YYYY")}. All rights reserved </p>
	)
};

export default Footer;