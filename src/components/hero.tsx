import Cards from "./cards";


export default function Hero(){
    return(
        <div>
            <h1 className="absolute left-[119px] top-[100px] w-[626px] h-[67px] font-[clash] text-[48px]">Build ecom sites, super fast</h1>
            <p className="absolute left-[121px] top-[183px] w-[1412px] h-[60px] font-[Satoshi] spacing-[20px]">This template was built to help you rapidly, and modularly, build out high quality e-commerce concepts using pre-built content blocks, components and styles.Customise and play around with the template to match your specific requirements, and most of all have fun with it! </p>
            
            <Cards/>
           
        </div>
    )
}