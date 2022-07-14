# ref

https://www.youtube.com/watch?v=QZcYz2NrDIs&t=326s

ex1, ex2
https://www.youtube.com/watch?v=Jr9i3Lgb5Qc&list=PLuHgQVnccGMB-iGMgONoRPArZfjRuRNVc

ex3
https://www.youtube.com/watch?v=wSbjROmXTaY

# command

npm init -y
npm i redux
npm i redux-logger

# redux 란

- 상태관리 라이브러리

# redux 사용 이유.

- state 종속성 탈피
  > state가 컴포넌트에 종속되지 않고, 외부에서 관리
- 그로인한 porps 지옥 탈출
  > 컴포넌트에 종속되어 있는 경우 하위 컴포넌트에 모두 porps 전달이 필요
  > 컴포넌트에 종속되지 않는 경우 props전달 필요 없음 ( 외부에서 별도로 관리 )

# redux 개념 용어

- store ( state, reducer, getState, dispatch, subscribe)
- render, action

state :: 핸들링 데이터
reducer :: state의 값을 변경하는 역할
getState :: state의 값을 가져오는 역할
render :: getState를 통해 state를 가져온 후 반영하여 UI 생성
subscribe :: 등록 된 render 실행
action :: dispatch를 호출(전달)
dispatch :: reducer를 호출해서 satate값을 업데이트
-------- :: subscribe 호출

# redux-middleware

- action 과 reducer 사이에 중간자.
- 사진 참조 ( redux_action_flow.png & redux_middleware_action_flow.png )
- 로그, 비동기작업, 추가적인 규칙 등을 위해 사용
- redux-thunk, redux-saga 등이 있음.
