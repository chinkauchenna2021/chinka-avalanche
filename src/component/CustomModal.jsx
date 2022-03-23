import React , { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


function CustomModal (){

    const [timerDays , setTimerDays] = useState('00');
    const [timerHours , setTimerHours] = useState('00');
    const [timerMinutes , setTimerMinutes] = useState('00');
    const [timerSeconds , setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = ()=>{
       const countdowndate = new Date('january 4 2022 00:00:00').getTime();

       interval = setInterval(()=>{
    const now = new Date().getTime();
     const distance = countdowndate - now;

     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
     const minutes = Math.floor((distance % (1000 * 60 * 60)) /  (1000 * 60) );
     const seconds = Math.floor((distance % (1000 * 60)) / (1000));

    if(distance < 0 ){

        clearInterval(interval.current);
    }else{
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);

    }





       },1000)

    }

useEffect(()=>{
startTimer();
return ()=>{
    clearInterval(interval.current);
}

})


 // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    // const Ref = useRef(null);
  
    // // The state for our timer
    // const [timer, setTimer] = useState('00:00:00');
  
  
    // const getTimeRemaining = (e) => {
    //     const total = Date.parse(e) - Date.parse(new Date());
    //     const seconds = Math.floor((total / 1000) % 60);
    //     const minutes = Math.floor((total / 1000 / 60) % 60);
    //     const hours = Math.floor((total / 1000 * 60 * 60) % 24);
    //     return {
    //         total, hours, minutes, seconds
    //     };
    // }
  
    // const startTimer = (e) => {
    //     let { total, hours, minutes, seconds } 
    //                 = getTimeRemaining(e);
    //     if (total >= 0) {
  
    //         // update the timer
    //         // check if less than 10 then we need to 
    //         // add '0' at the begining of the variable
    //         setTimer(
    //             (hours > 9 ? hours : '0' + hours) + ':' +
    //             (minutes > 9 ? minutes : '0' + minutes) + ':'
    //             + (seconds > 9 ? seconds : '0' + seconds)
    //         )
    //     }
    // }
  
    // const clearTimer = (e) => {
  
    //     // If you adjust it you should also need to
    //     // adjust the Endtime formula we are about
    //     // to code next    
    //     setTimer('00:00:00');
  
    //     // If you try to remove this line the 
    //     // updating of timer Variable will be
    //     // after 1000ms or 1sec
    //     if (Ref.current) clearInterval(Ref.current);
    //     const id = setInterval(() => {
    //         startTimer(e);
    //     }, 1000)
    //     Ref.current = id;
    // }
  

    // const getDeadTime = () => {
    //     let deadline = new Date();
  
    //     // This is where you need to adjust if 
    //     // you entend to add more time
    //     deadline.setSeconds(deadline.getSeconds() + 8);
    //     return deadline;
    // }
  
    // // We can use useEffect so that when the component
    // // mount the timer will start as soon as possible
  
    // // We put empty array to act as componentDid
    // // mount only
    // useEffect(() => {
    //     clearTimer(getDeadTime());
    // }, []);
  
    //  // Another way to call the clearTimer() to start
    // // the countdown is via action event from the
    // // button first we create function to be called
    // // by the button
    // // const onClickReset = () => {
    // //     clearTimer(getDeadTime());
    // // }
  











return (
 <div className="container-fluid" style={{width:'100%',height:'100vh',backgroundColor:'rgba(0,0,0,0.8)',zIndex:99,display:'flex',alignItems:'center',justifyContent:'center',position:'fixed',top:0,left:0}}>
     <Modals  className="bg-light col-md-5" style={{backgroundColor:'#fff'}}>
    <Fade bottom>
    <Modaltitle style={{color:'#00a8e8'}}>CountDown To Launch of AvaxStorm</Modaltitle>

     <Timmerholder>
        <section className="d-flex">
             <p >{timerDays}</p>
             <p><small>Days</small></p>
             <span>:</span>
        </section>
             <section className="d-flex">
             <p>{timerHours}</p>
             <p><small>Hrs</small></p>
             <span>:</span>
        </section>
             <section className="d-flex">
             <p>{timerMinutes}</p>
             <p><small>Min</small></p>
             <span>:</span>
        </section>
             <section className="d-flex">
             <p>{timerSeconds}</p>
             <p><small>Sec</small></p>
        </section>
         </Timmerholder>



       </Fade>

     </Modals>





</div>




);




}

export default CustomModal;

const Modaltitle = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:28px;
    text-align:center;
    font-weight:bold;
    margin-top:50px;

    @media (max-width:1000px){
        margin-top:15px;
        font-size:18px;


    }



`;




const Timmerholder = styled.div`
height:20%;
display:flex;
align-items:flex-end;
justify-content:center;
font-size:30px;
font-weight:bold;

@media (max-width:1000px){
    font-size:16px;
    font-weight:'bolder';   

}

p{
  margin:0px 2px;
  /* #fe5f55 */
  color:#fe5f55;
  /* color:#495867; */
}

span{
margin:0px 10px;

}




`;



const Modals = styled.div`
width:50%;
height:250px;

@media (max-width:1000px){
    width:100%;
    height:200px;
}




`;