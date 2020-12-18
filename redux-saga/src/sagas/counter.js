import { INCREMENT_ASYNC, INCREMENT } from '../constants';
import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

function* increase() {
  yield call(delay, 1000); // 需要执行异步的时候，直接调用call
  yield put({ type: INCREMENT });    //发送对应的dispatch 触发对应的action
}

export function* add() {
  yield takeEvery(INCREMENT_ASYNC, increase);
  // 监听对应的action 每一次dispatch都会触发 例如 点击一个新增的按钮 2s后触发新增动作 在2s内不断点击按钮 这时候 每一次点击 都是有效的 
}


// call 发送api请求
// all 跟fork一样 同时并发多个action 没有顺序