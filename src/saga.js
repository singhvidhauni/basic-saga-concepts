import {takeEvery, all, call, put} from 'redux-saga/effects';
const delay = ms => new Promise(res => setTimeout(res, ms));
function* helloSagas() {
    console.log('Hello Sagaas !!');
    yield 1;
}

function* incrementAsync() {
    console.log('onIncrement async Sagas ...');
    yield call(delay, 1000);
    console.log('INCREMENT is dispatched through SAGAS');
    yield put({type: 'INCREMENT'});
}
function* onIncrementAsynWatcher() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}
export default function* rootSagas() {
    yield all([helloSagas(), onIncrementAsynWatcher()]);
}
