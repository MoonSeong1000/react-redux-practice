//현재 리듀서가 2개 생성.
//createStore 함수를 사용하여 스토어를 만들 때는 리듀서를 하나만 사용 해야 한다.
//리듀서들을 합쳐주어야 함

import {combineReducers} from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;


