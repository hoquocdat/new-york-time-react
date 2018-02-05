import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const SearchBar = ({ onChangeText }) => {

	const handleChangeText = (value) => {
		onChangeText(value.target.value);
	};

	return (
		<div className="mt-4 mb-4">
			<InputGroup>
				<Input onChange={(value) => handleChangeText(value)} />
				<InputGroupAddon addonType="append">
					<Button>Search</Button>
				</InputGroupAddon>
			</InputGroup>
		</div>
	)
};

export default SearchBar;