

export default function Card2(){
    return(
        <div className="absolute left-[952px] top-[307px] w-[824px] h-[514px] container  box-border border-r-2">
            <h1 className="absolute left-[47px] top-[37px] w-[238px] h-[30px] font-[Clash Display] text-[24px] line-height:28px">Use the components</h1>
            <p className="absolute left-[47px] top-[83px] w-[716px] h-[120px] font-[Satoshi] font-normal text-[16px] line-height:150%">There’s a bunch of pre-configured components typeof you to use in this free template. Simply go to the Style Guide page and under the components header you can see everything included.
            <br/>
            Buttons, steppers, filter options and more typeof you to integrate into your screens and modify to your tastes and requirements. </p>
                 
            <div className="absolute flex flex-col p-0 gap-[12.67px] w-[161px] h-[243.84px] left-[47px] top-[241px]">
                <img src="./card2p1.png" width={161} height={198} className="absolute w-[161px] h-[197.95px]"/>
                <p className="w-[81px] h-[33.22px] font-[satoshi] text-[10.56px] order-1">The Dandy chair</p>
                <p>£250</p>
                
            </div>
            <div className="absolute flex flex-col p-0 gap-[12.67px] w-[161px] h-[243.84px] left-[233px] top-[241px]">
                <img src="./card2p2.png" width={161} height={198} className="absolute w-[161px] h-[197.95px]"/>
                <p>Small tables</p>
                <p>£250</p>
            </div>
            
            <div className="absolute flex flex-row float-start p-[12px] pt-[24px] gap-[10px]">
               <button type="button" className="absolute w-[95px] h-[48px] left-[427px] top-[241px] bg-[#FFFFFF] font-[Satoshi] text-[16px] text-black">Button</button>
               <button type="button" className="absolute  w-[95px] h-[48px] left-[427px] top-[305px] bg-[#2A254B] font-[Satoshi] text-[16px] text-white">Button</button>
               <button type="button" className="absolute  w-[95px] h-[48px] left-[427px] top-[369px] bg-[#FFFFFF] font-[Satoshi] text-[16px] text-black">Button</button>
               <button type="button" className="absolute  w-[95px] h-[48px] left-[427px] top-[433px] bg-[#4E4D93] font-[Satoshi] text-[16px] text-white box-border border-2">Button</button>
            </div>
            
            
        </div>
        
    )
}