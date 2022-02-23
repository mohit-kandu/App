import React from 'react'
import "./mainSidebar.css"
import export_img from "../images/export.png"
import export_grayscale from "../images/export_grayscale.png"
import left_arrow from "../images/left_arrow.png"
import avalanche from "../images/avalanche.png"
import down_arrow from "../images/down_arrow.png"
import wallet from "../images/Wallet.png"

export default function MainSidebar() {
    return (
        <div className='main_sidebar'>
            <div className='main_sidebar_dropdowns'>
                <div className='first_dropdown '>
                    <div>
                        <img src={avalanche} alt="" />
                    </div>
                    <span>
                        Avalanche
                    </span>
                    <div>
                        <img src={down_arrow} alt="" />
                    </div>

                </div>
                <div className='second_dropdown '>
                    <div>
                        <img src={wallet} alt="" />
                    </div>
                    <span>
                        0xf6...1353
                    </span>
                    <span>
                        <img src={down_arrow} alt="" />
                    </span>

                </div>
            </div>
            <div className='go_back cursor-pointer'>
                <div>
                    <img src={left_arrow} alt="" />
                </div>
                <div className='mt-1'>
                    Custom link
                </div>
            </div>
            <div className='text_url'>
                https://testnet.xyz.xyz/trade?ref=
            </div>
            <input placeholder="Enter" className='test_input' type="text" />
            <div className='buttons'>
                <span className='custom_link'>
                    <div>
                        <img src={export_img} alt="export_img_button" />
                    </div>
                    Custom link
                </span>
                <span className='custom_link'>
                    <div>
                        <img src={export_grayscale} alt="export_img_button" />
                    </div>
                    Cancel
                </span>

            </div>
        </div>
    )
}
