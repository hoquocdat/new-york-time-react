import _ from 'lodash';

export const minimalize = (string, length) => {
	return _.truncate(string, { length, omission: '...'});
};