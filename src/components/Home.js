import React from 'react';
import '../style/Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt=""
                />
                <div className="home__row">
                    <Product 
                        id = '12321341'
                        title='The Lean Startup: How Constant Inovation Creates Radically Successful Business Paperback' 
                        price={11.96} 
                        image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                        rating={5}
                    />
                    <Product 
                        id = '49538094'
                        title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5Litre Glass Bowl' 
                        price={239.0} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg'
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id = '4903850'
                        title="MI Band 5 Sports Band"
                        price={49.0} 
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLyubTHU1y9XP1kxbmK_vkHFI_JPyEWTUw87WlSEH-Dj_ecgiZ5D7aZm2Gw8cCFN2HC6GpRDK&usqp=CAc'
                        rating={3}
                    />
                    <Product 
                        id = '23445930'
                        title="Amazon Eco (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric"
                        price={98.99} 
                        image='https://www.reliancedigital.in/medias/Amazon-B07P9B3W1G-Computer-Speakers-491600509-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzkzNzl8aW1hZ2UvanBlZ3xpbWFnZXMvaDZlL2g4ZC85MjE2NjcyODI1Mzc0LmpwZ3wzZmEwYjdmOTZkNDYwY2M4ZDg3YmVhZGQ4NzliNDE1ZTBiYzAwMzA5MGQ0Yjc5NmUwZjc4ZjFkOWMyMjI1YTE1'
                        rating={5}
                    />
                    <Product 
                        id = '3254354345'
                        title="New Apple iPad Pro(12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg'
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id = '90829332'
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Moniter"
                        price={1994.98} 
                        image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg'
                        rating={4}
                    />
                </div>
            </div>            
        </div>
    );
};

export default Home;
