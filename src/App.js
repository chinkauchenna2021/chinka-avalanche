import React from 'react';
import './App.css';
import Nav from './component/Nav';
import SecondNav   from './component/SeconsNav';
import TopSection from './component/TopSection';
import AffiliateProgram from './component/AffiliateProgram';
import styled from 'styled-components';
import firstss from './firstcolumn.svg';
import secondcolumn from './secondcolumn.svg';
import thirdcolumn from './thirdcolumn.svg';
import haze from './haze.png';
import certic from './certic.svg';
import dapp from './dapprader.svg';
import youtube from './youtube.svg';
import twitter from './twitter.png';
import CustomModal from './component/CustomModal';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';

function App() {
  return (
    <Holdall  className="container-fliud">
      <Router>
      <CustomModal />
      <TopSection firstcol={firstss} secondcol={secondcolumn} thirdcol={thirdcolumn} fimage1={haze} fimage2={certic} fimage3={dapp} fimage4={youtube}  fimage5={twitter} /> 
        <Switch>
      {/* <Nav connection="connect wallet" /> */}
      {/* <SecondNav  avax={'AVAX'} eth={'ETH'} bnb={'USDT'} xrp={'BTC'} ada={'JOE'} cake={'PNG'}  avaxer={()=>avaxfn()} ethas={()=>ethafn()} bnber={()=>usdtfn()} xrper={()=>btcfn()} adaer={()=>joefn()}
      caker={()=>pngfn()} /> */}
  {/* <Route path={'/'} exact>
  <TopSection firstcol={firstss} secondcol={secondcolumn} thirdcol={thirdcolumn} fimage1={haze} fimage2={certic} fimage3={dapp} fimage4={youtube}  fimage5={twitter} /> 
    </Route>

    <Route path={'/dashboard'} >
    <AffiliateProgram />
    </Route> */}
    
    </Switch>
     {/* <AffiliateProgram /> */}
   </Router>
    </Holdall>
  );
}


const Holdall = styled.div`
min-height:100vh;
width:100%;
background-color:#f8f9fa;

`;
export default App;
