//컴포넌트에서 리덕스 상태에 접근하고, 디스패치를 해주기 위한 작업
//리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 부른다

import React from "react";
import Counter from "../component/Counter";
import {connect, useDispatch, useSelector} from "react-redux";
import {decrease, increase} from "../modules/counter";

const CounterContainer = () => {
    const number = useSelector(state=>state.counter.number)
    const dispatch = useDispatch();
    return (
        <Counter number={number} onIncrease={dispatch(increase())} onDecrease={dispatch(decrease())}/>
    );
};

export default CounterContainer;

//Counter 컴포넌트를 리덕스와 연결하기 위해서는 connect 함수를 사용한다.
//connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
//
