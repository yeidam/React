/*eslint-disable*/
import { useState } from 'react';
import './App.css';
import Modal from './Component/Modal';

function App() {
  let [a, setA] = useState(['2023-04-12 일기','2023-04-13 일기','2023-04-14 일기']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0); // 현재 상태의 타이틀을 저장해줌

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
                setLike(copyLike)
              }}>🤷‍♀️</span>{like[i]}
              <p>4월15일 발행</p>
            </div>
          ) 
        })
      }
      {
        modal == true ? <Modal color='#549ed9' name={a} title={title}/> : null
      }
    </div>
  );
}

export default App;
