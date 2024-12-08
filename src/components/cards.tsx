
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";

import card2p1 from "./public/card2p1.png";
import card2p2 from "./public/card2p2.png";

export default function Cards(){
    return(
        <div>
            <Card1/>
            <Card2/>
            <Card3/>
            <div className="absolute left-[952px] top-[869px] w-[824px] h-[514px] container box-border border-r-2">
                <h1 className="absolute left-[47px] top-[37px] w-[268px] h-[30px] font-[Clash Display] text-[24px] line-height:28px">Use the content blocks</h1>
                <p className="absolute left-[47px] top-[83px] w-[716px] h-[120px] font-[Satoshi] font-normal text-[16px] line-height:150%">We’ve built out a multitude of content blocks for you to use in your landing pages. From hero sections, forms, CTAs to pricing sections. Everything you need to get started building polished, modern landing pages.</p>
                <div className="absolute left-[46px] top-[200px] w-[730px] h-[264.12px] bg-white">
                <img src="./card4p1.png" width={365} height={264.12} className="absolute w-[365px] h-[264.12px] "/>
                <h1 className="absolute font-[Clash Display] text-[16px] text-black w-[251px] h-[20px] left-[401.5px] top-[35.99px]">Join the club and get the benefits </h1>
                <p className="absolute font-[Satoshi] font-normal text-[8.11px] text-black left-[403.02px] top-[66.41px] w-[238px] h-[24px]">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                </div>
            </div>
        </div>
    )
}