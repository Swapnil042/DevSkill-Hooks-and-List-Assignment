import React, { useState } from 'react';

const ProductPage = (props) => {
    const [product, setProduct] = useState([
        {
            name: 'iPhone 12',
            description: "The iPhone 12 and iPhone 12 mini are Apple's mainstream flagship iPhones for 2020. The phones come in 6.1-inch and 5.4-inch sizes with identical features, including support for faster 5G cellular networks, OLED displays, improved cameras, and Apple's latest A14 chip, all in a completely refreshed design.",
            price: '$ 1,099.00',
            category: 'Cell Phone',
        },
        {
            name: 'MacBook Pro M1',
            description: "The MacBook Pro 13-inch (M1, 2020) is the most exciting laptop Apple has released in years. The new M1 chip offers exceptional battery life, and in our early testing performance has been excellent. It's just a shame about the old design.",
            price: '$1,219',
            category: 'Laptop',
        },
        {
            name: 'Samsung Galaxy S21',
            description: "Samsung Galaxy S21 is powered by a 2.2GHz octa-core Samsung Exynos 2100 processor that features 3 cores clocked at 2.8GHz, 4 cores clocked at 2.2GHz and 1 cores clocked at 2.9GHz. It comes with 8GB of RAM. The Samsung Galaxy S21 runs Android 11 and is powered by a 4000mAh battery.",
            price: '$999',
            category: 'Cell Phone',
        },
        {
            name: 'GTX Titan Z ',
            description: "The GeForce GTX Titan Z will blast beyond the majority of games requirements at 1080p, so crank up your screen resolution to 1440p or 4K and let the beautiful AAA game visuals wash over you. This is how gaming is meant to be played but you are likely to have to pay top dollar for the GeForce GTX Titan Z privilege. But if you can get this graphics solution, then its happy gaming. Capable of running games with up to a DirectX 11 requirement.",
            price: '$3,000',
            category: 'Graphics Card',
        },
        {
            name: 'AK-47',
            description: "The AK-47, officially known as the Avtomat Kalashnikova (Russian: Автома́т Кала́шникова, lit. 'Kalashnikov's assault rifle'; also known as the Kalashnikov or just AK), is a gas-operated, 7.62×39mm assault rifle developed in the Soviet Union by Mikhail Kalashnikov in the aftermath of World War II. It is the originating firearm of the Kalashnikov rifle (or 'AK') family. The number 47 refers to the year it was finished.",
            price: '$1000',
            category: "Rifle",
        }
    ]);
    
    return (
        <div style={{margin: 'auto', maxWidth: '40%', border: '2px solid grey', boxShadow: '5px 5px grey', borderRadius: '5px', padding: '20px'}}>
            <h3>Product Page</h3>
            {
                product.map((data, idx) => {
                    return <p key={idx} onClick={()=>props.onProductClicked(data)}>
                                {idx + 1}. <b>{data.name}</b>, <b>Price: </b>{data.price}
                            </p>
                })
            }
            
        </div>

    );
}

export default ProductPage;