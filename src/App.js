/*eslint-disable*/
import { useState } from 'react';
import './App.css';
import Modal from './Component/Modal';

function App() {
  let [a, setA] = useState(['맛있는거 먹어야지','재밌게 놀아야지','쇼핑해야지']);
  let [like, setLike] = useState(['','','']);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0); // 현재 상태의 타이틀을 저장해줌
  let [input, setInput] = useState('');
  let [date, setDate] = useState(getToday);

  function getToday() {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = `${year}-${month}-${day}`;
    return(dateString);
  }


  let write = function(){
    if(input == '' || input == undefined || input == null){
      alert('계획대로 살아보자')
    }else{
      let copyA = [...a];
      copyA.unshift(input);
      setA(copyA);

      let copyLike2 = [...like];
      copyLike2.unshift('');
      setLike(copyLike2);
    }
  }
  


  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{color : "#fff"}}>TODO LIST</h4>
      </div>
      <input type="text" placeholder='오늘 뭐해?' onChange={(e)=>{
        setInput(e.target.value);
        console.log(input);
      }}/>
      <button className='writeBtn' onClick={()=>{
        write()
      }}><span>글쓰기</span></button>
      <div className='inner'>
      {
        a.map(function(parm, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{
                setTitle(i);
                setModal(modal == true ? modal = false : modal = true)
                }}>{a[i]}</h4>
                <div className='depth1'>
                  <span onClick={()=>{
                    let copyLike = [...like];
                    copyLike[i] = copyLike[i] + '👊';
                    setLike(copyLike);
                  }}>{like[i]}👊중요!</span>
                  {/* <p>글쓴이</p> */}
                  <button className='deletebtn' onClick={()=>{
                    let deleteBtn = [...a];
                    deleteBtn.splice(i, 1);
                    setA(deleteBtn);
                  }}>❌</button>
                </div>
            </div>
          ) 
        })
      }
      </div>
      


      {
        modal == true ? <Modal color='#ed6335' name={a} title={title} date={date}/> : null
      }
    </div>
  );
}

export default App;
