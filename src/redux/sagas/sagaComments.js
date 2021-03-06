import { put, call } from 'redux-saga/effects';
import { FETCH_COMMENTS, } from "../types";
import requestData from './requestData';

export default function* (post) { 
    try {
        const payload = yield call(requestData, `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);  
        yield put({type: FETCH_COMMENTS, payload: payload.data})
    } 
    catch {
        alert('Что то пошло не так');
    }
}