import React from 'react'
import './Home.css'
import Product from './Product';

export default function Home() {

    //var id =Math.random();
    return (
        <div className="Home">
            <div className="Home_Container">
                <img src={require('./images/store.jpg')} alt="store" />

           
            <div className="home_product">
<Product id={Math.random()}
title ="Dettol Original Germ Protection Alcohol based Hand Sanitizer Refill Bottle, 500ml"  

price ="255"
image={require('./images/dettol.jpg')}
/>
<Product 
id={Math.random()}

 title="OxiClear N99 Pollution Mask with 2 Activated Carbon Filters, Reusable D.R.D.O Certified (Black) (NON VALVED)"
price="399"
image={require('./images/mask.jpg')}
/>
<Product 
id={Math.random()}
title ="FURN ASPIRE ® Virus Shut Out Neck Hanging Out Virus Protection Card/blocker Card/virus Shut Out Card/air Freshener Sterilization/protection"
price="399"
image={require('./images/virus.jpg')}/>  
            </div>
            <div className="home_product">
                <img src={require('./images/maggi.jpg')} alt ="maggie"/>
           
            </div>
            <div className="home_product">
            <Product 
            id={Math.random()}
            title ="Bikano Bikaneri Bhujia, 1kg"  

price ="199"
image={require('./images/bikano.jpg')}
/>
<Product 
id={Math.random()} title="Santoor Sandal & Turmeric Soap for Total Skin Care"
price="210"
image={require('./images/santoor.jpg')}
/>
<Product  
id={Math.random()}
title ="Sunfeast Dark Fantasy Choco Fills"
price="190"
image={require('./images/dark.jpg')}/> 
 </div> 

<div className="home_product">
<Product  
id={Math.random()}
title ="
Maggi 2-Minute Special Masala Instant Noodles"
price="162"
image={require('./images/maggie.jpg')}/>  
<Product  
id={Math.random()}
title ="
Dabur Honey - World's No.1 Honey Brand"
price="128"
image={require('./images/honey.jpg')}/> 
<Product  
id={Math.random()}
title ="

Sunfeast YiPPee! Magic Masala Long, slurpy Noodles"
price="152"
image={require('./images/yipee.jpg')}/> 
</div>
<div className="home_product">
                <img src={require('./images/choclatead.jpg')} alt ="maggie"/>
           
            </div>

            <div className="home_product">
<Product  
id={Math.random()}
title ="Cadbury Dairy Milk Silk Bubbly Chocolate bar"
price="70"
image={require('./images/cadbury.jpg')}/>  
<Product  
id={Math.random()}
title ="

Ferrero Rocher Moments"
price="128"
image={require('./images/moments.jpg')}/> 
<Product  
id={Math.random()}
title ="
Hershey's Chocolate Syrup"
price="152"
image={require('./images/syrub.jpg')}/> 
</div>

<div className="home_product">
                <img src={require('./images/breakfast.jpg')} alt ="maggie"/>
           
            </div>

            <div className="home_product">
<Product  
id={Math.random()}
title ="
Saffola Oats, 1 kg with Free Saffola Oats 400 gm"
price="195"
image={require('./images/oats.jpg')}/>  
<Product  
id={Math.random()}
title ="
Kellogg's Corn Flakes Original, Breakfast Cereal"
price="310"
image={require('./images/flakes.jpg')}/> 
<Product  
id={Math.random()}
title ="

Kellogg's Muesli with 21% Fruit and Nut Pouch"
price="415"
image={require('./images/muesli.jpg')}/> 
</div>


           
            </div>
            
        </div>
    )
}
