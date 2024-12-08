import card3p1 from "./public/card3p1.png";
import card3p2 from "./public/card3p2.png";
import card3p3 from "./public/card3p3.png";

export default function Card3(){
    return(
        <div className="absolute left-[80px] top-[869px] w-[824px] h-[514px] container box-border border-r-2">
            <h1 className="absolute left-[47px] top-[37px] w-[238px] h-[30px] font-[Clash Display] text-[24px] line-height:28px">Check the layouts</h1>
            <p className="absolute left-[47px] top-[83px] w-[716px] h-[120px] font-[Satoshi] font-normal text-[16px] line-height:150%">As well as components and styles we’ve built a bunch of layouts in both mobile and desktop sizes. Play around with replacing and modifying the nested content blocks and to switch device, simply use
                the content block property ‘device’ to toggle between mobile and desktop.
            </p>
            <div className="absolute flex flex-row p-0 gap-[12.67px] w-auto">
              <img src="./card3p1.png" width={191.2} height={186} className="absolute left-[54px] top-[200px] w-[191px] h-[186]"/>
              <img src="./card3p2.png" width={191.2} height={186} className="absolute left-[316.2px] top-[200px] w-[191px] h-[186]"/>
              <img src="./card3p3.png" width={191.2} height={186} className="absolute left-[578.39px] top-[200px] w-[191px] h-[186]"/>
            </div>
        </div>
    )
}