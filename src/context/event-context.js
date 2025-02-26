import {createContext} from "react";

const EventContext = createContext({
    totalEventCount: 0, // 특정 유저가 작성한 총 이벤트 수
    changeTotalEvent: (count) => {} // 총 이벤트 수를 갱신하는 함수
})

export default EventContext;