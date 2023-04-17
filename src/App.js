/*eslint-disable*/
import { useState } from 'react';
import './App.css';
import Modal from './Component/Modal';

function App() {
  let [a, setA] = useState(['2023-04-12 일기','2023-04-13 일기','2023-04-14 일기']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0); // 현재 상태의 타이틀을 저장해줌
  let [input, setInput] = useState('');

  let right = function(){
    if(input == '' || input == undefined || input == null){
      alert('써')
    }else{
      let copyA = [...a];
      copyA.unshift(input);
      setA(copyA);

      let copyLike2 = [...like];
      copyLike2.unshift(0);
      setLike(copyLike2);
    }
  }
  


  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{color : "#fff"}}>예담 블로그</h4>
      </div>
      {
        a.map(function(parm, i){
          return (
            <div className='list' key={i}>
            <h4 onClick={()=>{
              setTitle(i);
              setModal(modal == true ? modal = false : modal = true)
              }}>{a[i]}</h4>
              <span onClick={()=>{
                let copyLike = [...like];
                copyLike[i] = copyLike[i] + 1;
                setLike(copyLike);
              }}>🤷‍♀️</span>{like[i]}
              <p>글쓴이</p>
              <button onClick={()=>{
                let deleteBtn = [...a];
                deleteBtn.splice(i, 1);
                setA(deleteBtn);
              }}>삭제</button>
            </div>
          ) 
        })
      }
      <input type="text" onChange={(e)=>{
        setInput(e.target.value);
        console.log(input);
      }}/>
      <button onClick={()=>{
        right()
      }}>글쓰기</button>
      {
        modal == true ? <Modal color='#549ed9' name={a} title={title}/> : null
      }
    </div>
  );
}

export default App;
