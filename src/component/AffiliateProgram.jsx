import React , {useState} from 'react';
import '../App.css';
import Nav from './Nav';
import SecondNav   from './SeconsNav';
import Fade from 'react-reveal/Fade';
import TopSection from './TopSection';
import styled from 'styled-components';
import {  FaInfinity } from "react-icons/fa";
import {Link} from 'react-router-dom';
import Bgimage from '../bgimage.jpg';
// FaInfinity

function AffiliateProgram(){

    const [coinavax , setAvax] = useState('');
    const [coineth , setEth] = useState('');
    const [coinusdt , setUsdt] = useState('');
    const [coinbtn , setBtc] = useState('');
    const [coinjoe , setJoe] = useState('');
    const [coinpng , setPng] = useState('');
    // const [busd , setBusd] = useState(0.000);
    // const [btc , setBtc] = useState(0.000);
    // const [eth , setEth] = useState(0.000);
    // const [xrp , setXrp] = useState(0.000);
    // const [ada , setAda] = useState(0.000);
    // const [cake , setCake] = useState(0.000);
    // const [shib , setShib] = useState(0.000);
    // const [doge , setDoge] = useState(0.000);
    const [truetty , setTruetty] = useState('');



    const avaxfn = ()=>{

        setTruetty('AVAX');
    }

    const ethafn = ()=>{

        setTruetty('ETH');
    }

    const usdtfn = ()=>{

        setTruetty('USDT');
    }
    const btcfn = ()=>{

        setTruetty('BTC');
    }


    const joefn = ()=>{

        setTruetty('JOE');
    }
    const pngfn = ()=>{

        setTruetty('PNG');
    }

  












return (
    <Holdall>
      <Nav connection="connect wallet" />
      <SecondNav  avax={'AVAX'} eth={'ETH'} bnb={'USDT'} xrp={'BTC'} ada={'JOE'} cake={'PNG'}  avaxer={()=>avaxfn()} ethas={()=>ethafn()} bnber={()=>usdtfn()} xrper={()=>btcfn()} adaer={()=>joefn()}
      caker={()=>pngfn()} />

  {/* <TopSection firstcol={firstss} secondcol={secondcolumn} thirdcol={thirdcolumn} fimage1={haze} fimage2={certic} fimage3={dapp} fimage4={youtube}  fimage5={twitter} />  */}
    
    <div className="container mt-5">
            <div className="row">
                   <div className="col-md-8">
                           <div className="card">
                              <Fade left>

                               <div clasName="card-body">
                                       <div className="col-12 h-50 mt-3" style={{minHeight:80}} ><span className="fs-2 pl-2 ml-3 w-100 text-danger" style={{fontWeight:500,textSpacing:3,marginLeft:10}}>Stake {(truetty == 'AVAX'? 'AVAX' : '') || (truetty == 'ETH'? 'ETH' : '') ||  (truetty == 'USDT'? 'USDT' : '') || (truetty == 'BTC'? 'BTC' : '') || (truetty == 'JOE'? 'JOE' : '') || (truetty == 'PNG'? 'PNG' : '') ||(truetty == ''? 'AVAX' : '')}</span>
                                       
                                       <div className="w-100 row mt-5"> 

                                       <div className="col-4">
                                          <span className="pl-4 w-100" style={{paddingLeft:22,fontWeight:500}}> Days</span></div>
                                       <div className="col-4" style={{paddingLeft:10,fontWeight:500}}>%Daily</div>
                                       <div className="col-4" style={{paddingLeft:10,fontWeight:500}}>Total</div>
                                           
                                       
                                       </div>
                                       
                                       </div>

                                       <div className="col-12">

                              {/* acordion start */}


                              <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header border-top d-flex align-items-center mt-4" id="flush-headingOne">
      <button className="accordion-button collapsed shadow-none " style={{outline:'0px',height:'75px'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        
      <div className="col-4"> <span  style={{fontWeight:500}}>Forever</span></div>
    <div className="col-4" style={{fontWeight:500}}>2%</div>
    <div className="col-2 text-secondary" style={{paddingLeft:10,fontWeight:500}}><FaInfinity /></div>
                                           
                                       


      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body row">
          <div className='col-12 text-danger'>Total Earn: <span className="ml-2"><FaInfinity /></span></div>

         <div className="col-12">
                       <div className="form-group mt-3">
                               <input className="form-control "  placeholder={`Enter ${(truetty == 'AVAX'? 'AVAX' : '') || (truetty == 'ETH'? 'ETH' : '') ||  (truetty == 'USDT'? 'USDT' : '') || (truetty == 'BTC'? 'BTC' : '') || (truetty == 'JOE'? 'JOE' : '') || (truetty == 'PNG'? 'PNG' : '') ||(truetty == ''? 'AVAX' : '')} amount`}/>
                               <button className="btn btn-danger btn-lg col-md-3 col-sm-6 mt-3">Approve</button>
                           </div>
         </div>


      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed shadow-none " style={{outline:'0px',height:'75px'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <div className="col-4"> <span  style={{fontWeight:500}}>40</span></div>
    <div className="col-4" style={{fontWeight:500}}>4%</div>
    <div className="col-2 text-secondary" style={{paddingLeft:10,fontWeight:500}}>160%</div>
                                           
                                       

      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body row">
          <div className='col-12 text-danger'>Total Earn: <span className="ml-2">0 {(truetty == 'AVAX'? 'AVAX' : '') || (truetty == 'ETH'? 'ETH' : '') ||  (truetty == 'USDT'? 'USDT' : '') || (truetty == 'BTC'? 'BTC' : '') || (truetty == 'JOE'? 'JOE' : '') || (truetty == 'PNG'? 'PNG' : '') ||(truetty == ''? 'AVAX' : '')}</span></div>

         <div className="col-12">
                       <div className="form-group mt-3">
                               <input className="form-control "  placeholder={`Enter ${(truetty == 'AVAX'? 'AVAX' : '') || (truetty == 'ETH'? 'ETH' : '') ||  (truetty == 'USDT'? 'USDT' : '') || (truetty == 'BTC'? 'BTC' : '') || (truetty == 'JOE'? 'JOE' : '') || (truetty == 'PNG'? 'PNG' : '') ||(truetty == ''? 'AVAX' : '')} amount`}/>
                               <button className="btn btn-danger btn-lg col-md-3 col-sm-6 mt-3">Approve</button>
                           </div>
         </div>


      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed shadow-none " style={{outline:'0px',height:'75px'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <div className="col-4"> <span  style={{fontWeight:500}}>60</span></div>
    <div className="col-4" style={{fontWeight:500}}>3.5%</div>
    <div className="col-2 text-secondary" style={{paddingLeft:10,fontWeight:500}}>210%</div>
                                           
              
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body row">
          <div className='col-12 text-danger'>Total Earn: <span className="ml-2">{`0 ${(truetty == 'AVAX'? 'AVAX' : '') || (truetty == 'ETH'? 'ETH' : '') ||  (truetty == 'USDT'? 'USDT' : '') || (truetty == 'BTC'? 'BTC' : '') || (truetty == 'JOE'? 'JOE' : '') || (truetty == 'PNG'? 'PNG' : '') ||(truetty == ''? 'AVAX' : '')}`}</span></div>

         <div className="col-12">
                       <div className="form-group mt-3">
                               <input className="form-control "  placeholder={`Enter ${(truetty == 'AVAX'? 'AVAX' : '') || (truetty == 'ETH'? 'ETH' : '') ||  (truetty == 'USDT'? 'USDT' : '') || (truetty == 'BTC'? 'BTC' : '') || (truetty == 'JOE'? 'JOE' : '') || (truetty == 'PNG'? 'PNG' : '') ||(truetty == ''? 'AVAX' : '')} amount`}/>
                               <button className="btn btn-danger btn-lg col-md-3 col-sm-6 mt-3">Approve</button>
                           </div>
         </div>


      </div>
          
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed shadow-none " style={{outline:'0px',height:'75px'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <div className="col-4"> <span  style={{fontWeight:500}}>90</span></div>
    <div className="col-4" style={{fontWeight:500}}>3%</div>
    <div className="col-2 text-secondary" style={{paddingLeft:10,fontWeight:500}}>270%</div>
                                           
              
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body row">
          <div className='col-12 text-danger'>Total Earn: <span className="ml-2">{`0 ${(truetty == 'AVAX'? 'AVAX' : '') || (truetty == 'ETH'? 'ETH' : '') ||  (truetty == 'USDT'? 'USDT' : '') || (truetty == 'BTC'? 'BTC' : '') || (truetty == 'JOE'? 'JOE' : '') || (truetty == 'PNG'? 'PNG' : '') ||(truetty == ''? 'AVAX' : '')}`}</span></div>

         <div className="col-12">
                       <div className="form-group mt-3">
                               <input className="form-contro"  placeholder={`Enter ${(truetty == 'AVAX'? 'AVAX' : '') || (truetty == 'ETH'? 'ETH' : '') ||  (truetty == 'USDT'? 'USDT' : '') || (truetty == 'BTC'? 'BTC' : '') || (truetty == 'JOE'? 'JOE' : '') || (truetty == 'PNG'? 'PNG' : '') ||(truetty == ''? 'AVAX' : '')} amount`}/>
                               <button className="btn btn-danger btn-lg col-md-3 col-sm-6 mt-3">Approve</button>
                           </div>
         </div>


      </div>
    </div>
  </div>
</div>


{/* accordion end */}






                                       </div>



                                   </div>

                                   </Fade>
                               </div>

              

                          <div className="card mt-4">
                          <Fade right>

                                     <div className="card-body">
                                         <div className="fs-4 w-100 p-2" style={{fontWeight:500}}>Read before use</div>
                                           <h6 className="text-secondary">The principal deposit cannot be withdrawn, the only return users can get are daily dividends and referral rewards. Payments is possible only if contract balance have enough AVAX. Please analyze the transaction history and balance of the smart contract before investing. High risk - high profit, DYOR</h6>





                                         </div>
                                         </Fade>
                              </div>














                       </div>
                       <div className="col-md-4 mb-5">
                           <div className="col-12">
                       <div className="card">

                            <Fade left>
                               <div clasName="card-body row">
                                   <div className="text-danger fs-4 p-3 w-100" style={{fontWeight:500,height:80}}>Your Farm</div>
                                     


                                     <div  className="col-12 row">
                                         <div className=" text-secondary w-100 px-4" style={{fontSize:15,fontWeight:500}}>{(truetty == 'AVAX'? 'AVAX' : '') || (truetty == 'ETH'? 'ETH' : '') ||  (truetty == 'USDT'? 'USDT' : '') || (truetty == 'BTC'? 'BTC' : '') || (truetty == 'JOE'? 'JOE' : '') || (truetty == 'PNG'? 'PNG' : '') ||(truetty == ''? 'AVAX' : '')} to Harvest:</div>
                                         <div className=" pl-4 w-100" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                                <div className="fs-5" style={{marginLeft:10,fontWeight:500}} >{`0.00 ${(truetty == 'AVAX'? 'AVAX' : '') || (truetty == 'ETH'? 'ETH' : '') ||  (truetty == 'USDT'? 'USDT' : '') || (truetty == 'BTC'? 'BTC' : '') || (truetty == 'JOE'? 'JOE' : '') || (truetty == 'PNG'? 'PNG' : '') ||(truetty == ''? 'AVAX' : '')}`}</div>
                                                <div className="btn btn-md btn-outline-danger" >{`Harvest`}</div>
                                             </div>
                                             <div className=" text-secondary w-100 px-4" style={{fontSize:15,fontWeight:500}}>{`$0.00`}</div>
                                     </div>
                                       
                                     <div  className="col-12 row mt-4 mb-3">
                                         <div className=" text-secondary w-100 px-4" style={{fontSize:15,fontWeight:500}}>{(truetty == 'AVAX'? 'AVAX' : '') || (truetty == 'ETH'? 'ETH' : '') ||  (truetty == 'USDT'? 'USDT' : '') || (truetty == 'BTC'? 'BTC' : '') || (truetty == 'JOE'? 'JOE' : '') || (truetty == 'PNG'? 'PNG' : '') ||(truetty == ''? 'AVAX' : '')} in Wallet:</div>
                                         <div className=" pl-4 w-100" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                                <div className="fs-5" style={{marginLeft:10,fontWeight:500}} >{`0.00 ${(truetty == 'AVAX'? 'AVAX' : '') || (truetty == 'ETH'? 'ETH' : '') ||  (truetty == 'USDT'? 'USDT' : '') || (truetty == 'BTC'? 'BTC' : '') || (truetty == 'JOE'? 'JOE' : '') || (truetty == 'PNG'? 'PNG' : '') ||(truetty == ''? 'AVAX' : '')}`}</div>
                                                <div className="btn btn-md btn-outline-danger" >{`History`}</div>
                                             </div>
                                             <div className=" text-secondary w-100 px-4" style={{fontSize:15,fontWeight:500}}>{`$0.00`}</div>
                                     </div>
                                       
                                   </div>
                                   </Fade>
                               </div>
                               </div>


                               <div className="col-md-12">
                       <div className="card">

                       <Fade bottom>
                               <div clasName="card-body row">
                               <div className="text-danger fs-4 p-3 w-100" style={{fontWeight:500,height:80}}>Affiliate Program</div>
                               {/* 2 LVL (user invited by your 1 lvl) - 3% */}
                               <div className="mb-3">
                                   <div className=" text-secondary w-100" style={{fontSize:16,fontWeight:500,paddingLeft:10}}>1 LVL (your invited user) - 7%</div>
                                   <div className=" text-secondary w-100" style={{fontSize:16,fontWeight:500,paddingLeft:10}}>2 LVL (user invited by your 1 lvl) - 3% </div>
                                   <div className=" text-secondary w-100" style={{fontSize:16,fontWeight:500,paddingLeft:10}}>3 LVL - 1.5% </div>
                                   <div className=" text-secondary w-100" style={{fontSize:16,fontWeight:500,paddingLeft:10}}>4 LVL - 1% </div>
                                   <div className=" text-secondary w-100" style={{fontSize:16,fontWeight:500,paddingLeft:10}}>5 LVL - 0.5% </div>
                                </div>
                                     <div className="container mb-3">
                                           <div className="card">
                                                 <div className="card-header ">
                                                        <div className="fs-5 p-1" style={{fontWeight:500}}>Your personal link:</div>
                                                        
                                                        <div className="form-group mt-3">
                                                            <div className="btn btn-group">
                                                                  <input className="form-control text-danger shadow-none" style={{height:50}} value={'https://www.avaxstorm.com/234443'}/>
                                                                  <button className="btn btn-outline-danger btn-lg">copy</button>
                                                                </div>


                                                            
                                                            
                                                            </div>



                                                     </div>
                                               </div>


                                         </div>

                                         <div className=" text-secondary w-100 mt-4 " style={{fontSize:16,fontWeight:500,paddingLeft:10}}>Invited users: {`0`} </div>
                                         <div className=" text-secondary w-100 mb-3 " style={{fontSize:16,fontWeight:500,paddingLeft:10}}>Total Earnings: {`0 ${(truetty == 'AVAX'? 'AVAX' : '') || (truetty == 'ETH'? 'ETH' : '') ||  (truetty == 'USDT'? 'USDT' : '') || (truetty == 'BTC'? 'BTC' : '') || (truetty == 'JOE'? 'JOE' : '') || (truetty == 'PNG'? 'PNG' : '') ||(truetty == ''? 'AVAX' : '')}`} </div>
                                         


                                   </div>
                                   </Fade>
                               </div>
                               </div>
                       </div>







                </div>








    </div>
    
    
    
    
    
    
    
    
    </Holdall>
);




}


const Holdall = styled.div`
min-height:100vh;
width:100%;
background-color:#f8f9fa;

`;
export default AffiliateProgram;