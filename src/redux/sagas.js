import { all } from 'redux-saga/effects';
import collectionSaga from './collection/saga';

export default function* rootSaga() {
	yield all([
		collectionSaga(),
	]);
}
