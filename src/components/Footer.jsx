import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-info">
                <div className="footer-info-left">
                    <div className="footer-info__name">
                        Krupa Desai
                    </div>        
                </div>
                <div className="footer-info-center">
                    <div className="footer-info__email">
                        desaikrupa7890@gmail.com
                    </div>
                </div>
                <div className="footer-info-right">
                    <div className="footer-info__number">
                        (408)460-2741
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
