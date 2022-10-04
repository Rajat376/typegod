import Inbox from "./inbox";
import Below from "./below";
import Script from "next/script";
import TimeBox from "./timebox";
import Sub from "./sub";
import Result from "./result";
import Try from "./try";
function HomePage() {
    return <>
    <Script src='script/main.js' strategy="beforeInteractive"></Script>
    <Result></Result>
    <Try></Try>
   <TimeBox></TimeBox>
  <div className="outbox" id='Outbox'><Inbox></Inbox>
    </div><Below></Below>
    <Sub></Sub>
    
    </>
    
    
  }
  
  export default HomePage;