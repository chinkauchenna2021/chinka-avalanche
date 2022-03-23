import React , {useState} from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Nav from './Nav';
import SecondNav   from './SeconsNav';
import {Link} from 'react-router-dom';
import AffiliateProgram from './AffiliateProgram';
import App from '../App';
import Bgimage from '../bgimage.jpg';
import { BsLock , BsFillBarChartLineFill , BsFillTelephoneFill} from "react-icons/bs";


function TopSection({firstcol,secondcol,thirdcol,fimage1,fimage2,fimage3,fimage4,fimage5}) {
    console.log(Bgimage);
     const [bnb , setBnb] = useState(0.000);
     const [busd , setBusd] = useState(0.000);
     const [btc , setBtc] = useState(0.000);
     const [eth , setEth] = useState(0.000);
     const [xrp , setXrp] = useState(0.000);
     const [ada , setAda] = useState(0.000);
    //  const [cake , setCake] = useState(0.000);
    //  const [shib , setShib] = useState(0.000);
    //  const [doge , setDoge] = useState(0.000);
     const [truetty , setTruetty] = useState('');

     const avaxfn = ()=>{
        //  console.log(this)
         setBnb(0.000)
         setTruetty('bnb');
         console.log(truetty);
   

     }
     const ethafn = ()=>{
        //  console.log(this)
         setBusd(0.000)
         setTruetty('busd');
         console.log(truetty);
   

     }

     const usdtfn = ()=>{
        //  console.log(this)
         setBtc(0.000)
         setTruetty('btc');
         console.log(truetty);
   

     }
     const btcfn = ()=>{
        //  console.log(this)
         setEth(0.000)
         setTruetty('eth');
         console.log(truetty);
   

     }
     const joefn = ()=>{
        //  console.log(this)
         setXrp(0.000)
         setTruetty('xrp');
         console.log(truetty);
   

     }

     const pngfn = ()=>{
        //  console.log(this)
         setAda(0.000)
         setTruetty('ada');
         console.log(truetty);
   

     }

    //  const cakes = ()=>{
    //     //  console.log(this)
    //      setCake(2.846037)
    //      setTruetty('cake');
    //      console.log(truetty);
   

    //  }

    //  const shibs = ()=>{
    //     //  console.log(this)
    //      setShib(2.846037)
    //      setTruetty('shib');
    //      console.log(truetty);
   

    //  }
    //  const doges = ()=>{
    //     //  console.log(this)
    //      setDoge(2.846037)
    //      setTruetty('doge');
    //      console.log(truetty);
   

    //  }





 








    return (
        <div>
                
                <Nav connection="connect wallet" />
                <SecondNav  avax={'AVAX'} eth={'ETH'} bnb={'USDT'} xrp={'BTC'} ada={'JOE'} cake={'PNG'}  avaxer={()=>avaxfn()} ethas={()=>ethafn()} bnber={()=>usdtfn()} xrper={()=>btcfn()} adaer={()=>joefn()}
      caker={()=>pngfn()} />

      
            <div>

<div className="container-fliud">
<Holder bg={Bgimage} className="row  d-flex  justify-content-center align-items-center"  style={{minHeight:'95vh'}}>

<div className="" style={{flexDirection:"column",marginTop:'-100px'}}>
  <div className="w-100 mb-3 ">

    <div className="fs-3 text-danger text-center mb-2" style={{fontWeight:'bold'}} ><Link to='/' exact components={App} className="w-100 d-flex ign-items-center justify-content-center" style={{textDecoration:'none',height:'100%'}}>AvaxStorm</Link></div>
    <small className="fs-5 text-center text-danger d-flex align-items-center justify-content-center" style={{fontWeight:500,color:"#fff"}}>New Defi Yield Farm on Avalanche Network</small>
    

  </div>
   
<div className=" d-flex  justify-content-center align-items-center" style={{flexDirection:"column"}}>
<Fade right>
<Button><Link to='dashboard' components={AffiliateProgram} className=" d-flex align-items-center justify-content-center text-center" style={{textDecoration:'none',height:'100%',color:'#ee6c4d'}}>Dashboard</Link></Button>
</Fade>
<Fade left>
<Button>Information</Button>
</Fade>
<Fade bottom>
<Button>Verify Contract</Button>
</Fade>
<Fade right>
<Button>Telegram</Button>
</Fade>

</div>


</div>



    </Holder>
    </div>
 



        <div className="container">
                {/* <Fade left>
            <div className="mt-4  w-100 table-responsive ">
               <Hold className="d-flex align-items-center justify-content-center w-100">
                <Cryptosign className="ml-4" onClick={()=>bnbs()}>BNB</Cryptosign>
                <Bord ></Bord>
                <Cryptosign className="" onClick={()=>busds()}>BUSD</Cryptosign>
                <Bord ></Bord>
                <Cryptosign className="" onClick={()=>btcs()}>BTC</Cryptosign>
                <Bord ></Bord>
                <Cryptosign className=""onClick={()=>eths()}>ETH</Cryptosign>
                <Bord></Bord>
                <Cryptosign className="" onClick={()=>xrps()}>XRP</Cryptosign>
                <Bord ></Bord>
                <Cryptosign className="" onClick={()=>adas()}>ADA</Cryptosign>
                <Bord></Bord>
                <Cryptosign className="" onClick={()=>cakes()}>CAKE</Cryptosign>
                <Bord ></Bord>
                <Cryptosign className="" onClick={()=>shibs()}>SHIB</Cryptosign>
                <Bord></Bord>
                <Cryptosign className="" onClick={()=>doges()}>DOGE</Cryptosign>
             </Hold>
            </div>
            </Fade> */}

            
               
               
               
             









             <Fade right>
             <div className=" text-center row d-flex align-items-center justify-content-center">
                 <Textholder className="text-center text-danger col-md-4 d-flex align-items-center justify-content-center">
             #1 Community Experimental yield farm
              on Avalanche Network
                 </Textholder>
            </div>
            </Fade>
             <div className=" row d-flex align-items-center justify-content-center pt-4">
                 <div className="col-md-4">
                 <Fade left>
                    <Allholder className="card" >
                         <Body className="card-body  row">
                           <Title className="col-12">Total Value Deposited</Title>
                        <Price className="col-12">{(truetty == 'bnb' && bnb +' AVAX'  )  || (truetty == 'busd' && busd + ' ETH'  ) || (truetty == 'btc' && btc + ' USDT'  )  || (truetty == 'eth' && eth + ' BTC'  ) || (truetty == 'xrp' && xrp + ' JOE'  ) || (truetty == 'ada' && ada + ' PNG'  ) || (0.00 + ' AVAX')} </Price>  
                          <Pricesmall className="col-12">$ {(truetty == 'bnb' && (bnb).toFixed(2)   )  || (truetty == 'busd' && (busd).toFixed(2)   ) || (truetty == 'btc' && (btc).toFixed(2)   )  || (truetty == 'eth' && (eth).toFixed(2)   ) || (truetty == 'xrp' && (xrp).toFixed(2)   ) || (truetty == 'ada' && (ada).toFixed(2)   ) || ((0.000).toFixed(2)  )}</Pricesmall>

                            
                         </Body>

                    </Allholder>
                    </Fade>

                 </div>
                 <div className="col-md-4" >
                 <Fade right>
                    <Allholder className="card">
                         <Body className="card-body row">
                         <Title >Total Referral Earnings</Title>
                         <Price >{(truetty == 'bnb' && (bnb) +' AVAX'  )  || (truetty == 'busd' && (busd) + ' ETH'  ) || (truetty == 'btc' && (btc) + ' USDT'  )  || (truetty == 'eth' && (eth) + ' BTC'  ) || (truetty == 'xrp' && (xrp) + ' JOE'  ) || (truetty == 'ada' && (ada) + ' PNG'  ) || ((0.00) + ' AVAX')}</Price>  
                          <Pricesmall className="col-12">$0.00</Pricesmall>

                            
                         </Body>

                    </Allholder>
           </Fade>
                 </div>






            </div>
                     
             {/* button here */}


            </div>
        </div>
          {/* footer */}
          <div  className="container-fliud mt-4">
              <div className="" style={{backgroundColor:'#fff',minHeight:300}}>
                  <div className="text-center pt-4 d-flex align-items-center justify-content-center" style={{flexDirection:'column'}}>
                  <Fade left>
                      <First  className="text-danger">Start your yield farm journey</First>
                      <First className="text-danger">with AvaxStorm community</First>
                      </Fade>
                      <div className="container mt-4">
                      <div className="row w-100">
                           <div style={{flexDirection:'column'}} className="col-md-4 d-flex align-items-center justify-content-center">
                           <Fade right>
                                 <div style={{flexDirection:'column'}} className="col-12 d-flex align-items-center justify-content-center">
                                 <BsLock   className="mt-3 text-danger" style={{width:60,height:60}}></BsLock >
                                 <div className="mt-3" style={{fontSize:20,fontweight:'bolder',color:'#353535'}}>
                                 Ironclad security

                                

                                 </div>

                                 <div className=" text-center mt-2 mb-3 w-100 " style={{fontSize:14,fontWeight:'bold',color:'#555b6e '}}>
                                 The smart contract code has been successful audited by 2 independent companies HazeCrypto and CertiK which guarantees the protection of your assets from all external risks.


                                 </div>

                                 </div>
                                 </Fade>




                           </div>
                          <div style={{flexDirection:'column'}}  className="col-md-4 d-flex align-items-center justify-content-center ">

                          <Fade right>

                          <div style={{flexDirection:'column'}} className="col-12 d-flex align-items-center justify-content-center">
                          <BsFillBarChartLineFill   className="mt-3 text-danger" style={{width:60,height:60}}></BsFillBarChartLineFill >
                                 <div className="mt-3" style={{fontSize:20,fontweight:'bolder',color:'#353535'}}>
                                 High & Stable APR

                                 </div>

                                 <div className=" text-center mt-2 mb-3 w-100 " style={{fontSize:14,fontWeight:'bold',color:'#555b6e '}}>
                                 In the code sets the highest APR among all yield farms on BSC, rules of a smart contract can’t be changed, nothing can affect the amount of income.

                                 </div>

                                 </div>
                 
                                   </Fade>






                          </div>
                          <div style={{flexDirection:'column'}} className="col-md-4 d-flex align-items-center justify-content-center ">

                          <Fade right>
                          <div style={{flexDirection:'column'}} className="col-12 d-flex align-items-center justify-content-center">
                                 {/* <Images  className="" bgimage ={thirdcol}></Images> */}
                                 <BsFillTelephoneFill   className="mt-3 text-danger" style={{width:60,height:60}}></BsFillTelephoneFill>
                                 <div className="mt-2" style={{fontSize:20,fontweight:'bolder',color:'#353535'}}>
                                 Customer support

                                 </div>

                                 <div className=" text-center mt-2 mb-3 w-100 " style={{fontSize:14,fontWeight:'bold',color:'#555b6e '}}>
                                 AvaxStorm 24/7 provides you our knowledgable and experienced customer support team in Telegram.

                                 </div>

                                 </div>
                                 </Fade>






                          </div>


                      </div>

                      </div>

                  </div>


              </div>

                  {/* lastfooter */}
            <Lastholder className="w-100 " style={{backgroundColor:"silver"}}>
            <Fade right>
                  <Fimg fimage={fimage1}></Fimg>
                </Fade>

                <Fade left>
                  <Long fimage={fimage2}></Long>
               </Fade>
             
               <Fade right>
                  <Long fimage={fimage3}></Long>
            </Fade>
            <Fade left>
                  <Fimg fimage={fimage4}></Fimg>
              </Fade>
              <Fade bottom>
                  <Dove fimage={fimage5}></Dove>
                </Fade>
               







            </Lastholder>






          </div>
        



        </div>
    )
}


const Holder = styled.div`
width:100%;
margin:0px;
padding:0px;
background-image:${(prop)=> `url(${prop.bg})`};
background-position:center;
background-size:cover;
`;



const Dove = styled.div`
width:120px;
height:95px;
background-image:${prop=>`url(${prop.fimage})`};
background-size: cover;
background-position:center;
@media (max-width:768px){
    width: 140px;
    height:115px;
    background-size: cover;
    background-position:center;

}
`;

const Long = styled.div`
width:140px;
height:50px;
background-image:${prop=>`url(${prop.fimage})`};
background-size: cover;
background-position:center;
@media (max-width:768px){
    width: 140px;
    height:50px;
    background-size: cover;
    background-position:center;

}
`;

const Fimg = styled.div`
width:100px;
height:100px;
background-image:${prop=>`url(${prop.fimage})`};
background-size: cover;
background-position:center;
@media (max-width:768px){
    width: 100px;
    height:100px;
    background-size: cover;
    background-position:center;

}

`;
const Lastholder = styled.div`
width:100%;
display:flex;
flex-direction:row;
min-height:130px;
justify-content: center;
align-items: center;

@media (max-width:768px){
    width:100%;
    height:600px;
    flex-direction:column;

}

`;

const Images = styled.div`
width:70px;
height:70px;
background-image:${prop=> `url(${prop.bgimage})`};
background-size: cover;
background-position:center;


`;


const First = styled.div`
color:#161a1d;
font-size:25px;
font-weight:600;


`;

const Button = styled.div`
width:320px;
height:50px;
/* border:1px solid red; */
display: flex;
align-items: center;
justify-content:center;
background-color:transparent;
color:#ee6c4d;
margin-bottom:15px;
border-radius:20px;
font-weight:600;
cursor:pointer;
border:2px solid #ee6c4d;
transition:all 0.6s linear;

&:hover{
    transition:all 0.6s linear;
background-color:#ba181b;
color:#fff;

}



`;
const Price = styled.div`
font-size:32px;
font-weight:600;
min-height:auto;
`;
const Pricesmall = styled.div`
font-weight: 500;
color:#6c757d;


`;



const Title = styled.div`
font-size:24px;
font-weight:500;
display:flex;
align-items:flex-start;





`;


const Allholder = styled.div`
/* background-color:#fff !important; */
min-height:150px;
border:none;
-webkit-box-shadow: -4px -2px 13px 3px rgba(89,89,89,0.16); 
box-shadow: -4px -2px 13px 3px rgba(89,89,89,0.16);
border-radius:20px !important;
@media (max-width:768px){
margin-top:10px;
margin-bottom:30px;
}



`;


const Body = styled.div`
/* background-color:#fff !important; */


`;

const Textholder = styled.div`
font-size:18px;
font-weight:600;
line-height:25px;
padding-top:20px;
color:#495057;




`;
// const Cryptosign = styled.div`
// font-size:30px;
// font-weight:bold;
// color:#242423;
// cursor:pointer;
// @media (max-width:768px){
//     font-size:22px;

// }

// `;
// const Bord = styled.div`
// height:30px;
// display:block;
// width:4px;
// background-color:#242423;
// margin-left:8px;
// margin-right:8px;
// @media (max-width:768px){
//     max-height:25px;
//     transform:translateY(5px);
//     min-width:3px;
//  margin-left:8px;
// margin-right:8px;
// }

// `;
// const Hold = styled.div`

// @media (max-width:768px){
//    margin-left:150px;
//    height:70px;

// }
// `;

export default TopSection
