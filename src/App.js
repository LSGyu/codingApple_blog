import { useState } from 'react';
import './App.css';

function App() {

  const [posts, setPost] = useState([
    { 'id': 1, 'title': '강남 우동 맛집', 'likes': 0, 'showModal': false, 'createDate': '2023-01-23', 'content': '존맛' },
    { 'id': 2, 'title': '강북 우동 맛집', 'likes': 0, 'showModal': false, 'createDate': '2023-01-24', 'content': '그저 그런 맛' }
  ]); //state가 변경되면 재렌더링하여 화면에 표현해줌

  const [newPost, setNewPost] = useState('');

  function setLike(index) {
    let postsTemp = [ ...posts ]; //newPost가 변경되고 재렌더링이 됨.
    //let newPosts = posts; newPost가 변경되지만 재렌더링이 되지 않음.
    //차이 확인하기
    //reference data type 찾아 확인하기.
    postsTemp[index].likes += 1;

    return postsTemp;
  }

  function setModal(index) {
    let postsTemp = [ ...posts ];
    postsTemp[index].showModal = postsTemp[index].showModal ? false : true;

    return postsTemp;
  }

  function addPost(title) {
    let postsTemp = [ ...posts ];
    postsTemp.push({'id': postsTemp.length + 1, 'title': title, 'likes': 0, 'showModal': false, 'createDate': '0000-00-000', 'content': 'xxxxxx'})

    return postsTemp;
  }

  return ( // return()은 하나의 부모 div로 존재해야한다.         
    <div className="App">
      <div className="black-nav"> {/* class 대신 className을 사용하여 속성 부여 */}
        <h4 style={ { color : 'red', fontSize : '16px' } }>블로그임</h4> {/* 객체형식으로 중괄호 안에 값을 입력 */}
      </div>
      {
        posts.map((eachPost, index) => {
          const postId = eachPost.id;
          const post = eachPost.title;
          const like = eachPost.likes;
          const modal = eachPost.showModal;
          const date = eachPost.createDate;
          const content = eachPost.content;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
          return (
            <div>
              <div className='list' key={ postId } onClick={() => { setPost(setModal(index)) }}>
                <h4>{ post } <span onClick={(event) => { event.stopPropagation(); setPost(setLike(index)); }}>❤️</span> { like } </h4> {/* 데이터바인딩 : 중괄호 안에 변수명을 입력하면 해당 값이 표현된다 */}
                <p>{ date }</p>
              </div>
              {
                modal ? <Modal title={ post } date={ date } content={ content } /> : '' //속성값을 Modal로 넘기는 작업
              }
            </div>
          );
        })
      }
      <div>
        <input onChange={(e) => { setNewPost(e.target.value);console.log(e.target.value) }}/>
        <button onClick={() => { setPost(addPost(newPost))}}>추가</button>
      </div>
    </div>
  );
}                                                                                                                                                          

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{ props.title }</h4>
      <p>{ props.date }</p>
      <p>{ props.content }</p>
    </div>
  );
}

export default App;