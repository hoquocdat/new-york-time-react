import { Map } from 'immutable';
import {
	GET_LIST_BY_TOPIC, GET_LIST_BY_TOPIC_SUCCESS,
	GET_POST_LIST,
	GET_POST_LIST_SUCCESS,
} from "./constants";

const meta = {
	loading: false,
	status: false,
	pageNumber: 0,
	pageSize: 10,
	topic: ''
};

const posts = [];
const posts_topic = [];

const initState = new Map({
	posts,
	posts_topic,
	meta
});

export default function collectionReducers(state = initState, action) {
	const meta = state.get("meta");
	switch (action.type) {
		case GET_LIST_BY_TOPIC:
			const topic = action.payload.topic;
			if(topic !== meta.topic ) {
				 return state.set("posts_topic",[]).set("meta", { ...meta, loading: true });
			}
			return state.set("meta", { ...meta, loading: true });
		case GET_LIST_BY_TOPIC_SUCCESS:
			let posts_topic = [...state.get('posts_topic'),...action.payload.posts_topic];
			return state.set("posts_topic",posts_topic)
			.set("meta",{
				...meta,
				loading: false,
				message: 'Get posts successful !',
				...action.payload.meta
			});
		case GET_POST_LIST:
			return state.set("meta", {...meta, loading: true });
		case GET_POST_LIST_SUCCESS:
			let posts = [...state.get('posts'),...action.payload.posts];
			return state.set("posts",posts)
			.set("meta",{
				...meta,
				loading: false,
				message: 'Get posts successful !',
				...action.payload.meta
			});

		default:
			return state;
	}
}

export { posts };