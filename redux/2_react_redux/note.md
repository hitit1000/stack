# ref

ex1
https://www.youtube.com/watch?v=yjuwpf7VH74

connect를 사용한 예제
https://www.youtube.com/watch?v=T-q4cmSEX-E

# command

- ex1

  > npx create-react-app .
  > npm i redux react-redux

- ex2
  > npx create-react-app .
  > npm i redux react-redux

# react-redux

- reducer 함수 생성
- createStore로 store 생성 ( from reducer )
- useSelector 를 통해 state를 가져옴
  -> pure_redux :: getState()를 통해 store전체를 가져옴
  -> react_redux :: useSelector를 통해 함수로 store를 가져옴
  ex) useSelector((state)=>state.number)
- useDispatch 를 통해 dispatch 함수를 실행

# folder tree

reducer, action, store를 구조화하여 사용
