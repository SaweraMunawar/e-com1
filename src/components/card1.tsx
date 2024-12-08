import card1p1 from "./public/card1p1.png";
import card1p2 from "./public/card1p2.png";
import card1p3 from "./public/card1p3.png";
 
 export default function Card1(){
    return(
        <div className="absolute left-[80px] top-[307px] w-[824px] h-[514px] container box-border border-r-2">
                <h1 className="absolute left-[47px] top-[37px] w-[157px] h-[30px] font-[Clash Display] text-2xl line-height: 28px">Use the styles</h1>
                <p className="absolute left-[47px] top-[83px] w-[716px] h-[120] font-[Satoshi] font-normal text-[16px] line-height:150%">Styles in Figma mean you don’t have to repetitively enter values for typography, colors and elevations minimising the risk of inconsistencies and streamlining the design process.
                <br/>
                <br/>
                Within this template you can find color and type styles, and their definitions on the style
                guide page. To use them simply select them from the Figma style panel as shown below.</p>
                <div className="absolut flex items-center justify-around top-[251px]">
                    <img src="./card1p1.png" width={234} height={220} className="absolute left-[36px] top-[296px]"/>
                    <img src="./card1p2.png" width={226} height={310} className="absolute left-[298px] top-[251px]"/>
                    <img src="./card1p3.png" width={236} height={245} className="absolute left-[552px] top-[296px]"/>
                </div>
            </div>
    )
 }