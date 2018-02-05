import {
	GET_POST_LIST,
	GET_LIST_BY_TOPIC
} from "./constants";

const collectionActions = {
	getLatestList: (pageNumber) => {
		return(dispatch) => {
			dispatch({
				type: GET_POST_LIST,
				payload: { pageNumber }
			})
		}
	},
	getListByTopic: (pageNumber, topic) => {
		return(dispatch) => {
			dispatch({
				type: GET_LIST_BY_TOPIC,
				payload: { pageNumber, topic }
			})
		}
	}
};

export default collectionActions;

