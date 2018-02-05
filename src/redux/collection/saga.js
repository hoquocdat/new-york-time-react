import { all, takeEvery, fork, put, call } from 'redux-saga/effects';
import {
	GET_POST_LIST,
	GET_POST_LIST_SUCCESS,
	GET_POST_LIST_FAILED,
	GET_LIST_BY_TOPIC,
	GET_LIST_BY_TOPIC_SUCCESS
} from "./constants";
import { apiConfig } from '../../config.js';

const getPostList = async (pageNumber,query) => {
	const q = query === null ? '' : `&q=${query}`;
	return await fetch(`${apiConfig.url}&page=${pageNumber}${q}`,{
		method: 'GET',
		headers: apiConfig.headerDefault
	}).then(res => res.json()).then(res => res).catch(e => e);
};


export function* getPostListRequest() {
	yield takeEvery(GET_POST_LIST, function*({ payload }) {
		const { pageNumber } = payload;
		try{
			const getPostListResult = yield call(getPostList, pageNumber, null);
			if (getPostListResult && getPostListResult.response) {
				yield put({
					type: GET_POST_LIST_SUCCESS,
					payload: { posts: getPostListResult.response.docs, meta: {...getPostListResult.meta, pageNumber }  }
				});
			} else {
				yield put({ type: GET_POST_LIST_FAILED });
			}
		}catch (error) {
			console.log(error);
		}
	});
}

export function* getListByTopicRequest() {
	yield takeEvery(GET_LIST_BY_TOPIC, function*({ payload }) {
		const { pageNumber, topic } = payload;
		try{
			const getPostListResult = yield call(getPostList, pageNumber, topic);
			if (getPostListResult && getPostListResult.response) {
				yield put({
					type: GET_LIST_BY_TOPIC_SUCCESS,
					payload: { posts_topic: getPostListResult.response.docs, meta: {...getPostListResult.meta, pageNumber, topic }  }
				});
			} else {
				yield put({ type: GET_POST_LIST_FAILED });
			}
		}catch (error) {
			console.log(error);
		}
	});
}


export default function* rootSaga() {
	yield all([
		fork(getPostListRequest),
		fork(getListByTopicRequest)
	]);
}
