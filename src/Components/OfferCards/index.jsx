import React from 'react';
import { TfiWallet } from "react-icons/tfi";
import { GoArchive } from "react-icons/go";
import { PiTruckThin } from "react-icons/pi";
import './index.css';

function OfferCards() {
    const cardData = [
        { icon: <TfiWallet className='cards-medicines-icon' />, text: '100% Money Back' },
        { icon: <GoArchive className='cards-medicines-icon' />, text: 'Non-contact shipping' },
        { icon: <PiTruckThin className='cards-medicines-icon' />, text: 'Free delivery over $200' }
    ];

    return (
        <div className='cards-medicnes-main-container'>
            <div className='cards-medicnes-sub-container'>
                {cardData.map((card, index) => (
                    <div key={index} className='cards-medicines-mini-container'>
                        {card.icon}
                        <h3 className='cards-medicines-heading'>{card.text}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OfferCards;
