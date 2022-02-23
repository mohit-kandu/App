import React, { useState, useEffect } from 'react'
import wallet from "../images/Wallet.png"
import bitcoinimg from "../images/bitcoin_img.png"
import export_img from "../images/export.png"
import money_bag from "../images/money_bag.png"
import copyImg from "../images/copy.png"
import export2 from "../images/export2.png"
import "./mainbody.css"
import axios from "axios"

export default function Mainbody() {
    const [data, setData] = useState([])
    const [dataSize, setDataSize] = useState(0)
    const [loading, setLoading] = useState(true)
    const [activeTab, setActiveTab] = useState('tab0')
    const tabName = ["First Tab", "Second Tab"]
    console.log(data)

    const url = "https://raw.githubusercontent.com/akshita151199/APIs/main/data"

    useEffect(() => {
        const fetchData = async () => {
            await axios(url)
                .then(resp => {
                    setDataSize(resp.data.data.length)
                    setData(resp.data.data[activeTab[3]])
                    setLoading(false)
                })
                .catch(err => {
                    console.log(err)
                    setLoading(false)
                })
        }
        fetchData()
    }, [activeTab])

    const switchTab = (e) => {
        setActiveTab(e.target.id)
    }

    const returnTabs = () => {
        let tabData = []
        for (let index = 0; index < dataSize; index++)
            tabData.push(<span id={`tab${index}`}
                key={`tabID${index}`}
                onClick={(e) => switchTab(e)}
                className={`${activeTab === 'tab' + index ? "active_tab" : ""}`}>{tabName[index]}
            </span>)

        return tabData
    }


    if (loading) {
        return <div>loading..</div>
    }

    return (
        <>
            <div className='mainbody mainbody_header'>
                <div className=" d-flex justify-content-between px-2">
                    <h3 style={{ fontSize: "1.5rem" }}>Section</h3>
                    <div className='wallet-info'>
                        <div className='gap-2 d-flex'>
                            <div>
                                <img src={wallet} alt="" />
                            </div>
                            <div>0.2 $XYZ</div>
                        </div>
                        <div className="tier1">Tier 1</div>
                    </div>
                </div>
                <div className='main_banner' style={{ padding: "1em" }}>
                    <div className='d-flex flex-column align-items-center ps-3' >
                        <div>
                            <p style={{ color: "#2B2557", fontWeight: 600, fontSize: "1.2rem" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="#">Tutorial</a>

                        </div>
                        <span className='close_banner'>X</span>
                    </div>
                    <div className='position-relative'>
                        <img className='bitcoin_img' src={bitcoinimg} alt="main_banner" />
                    </div>
                </div>

                {/* your rewards */}
                <div className='mt-4 your_rewards d-flex flex-column gap-2'>
                    <h4 className='fw-600'>Your rewards</h4>
                    <div className='your_rewards_body'>
                        <div className='d-flex justify-content-between mb-3'>
                            <span className='fs-3 fw-bold'>$ 0.26231428</span>
                            <span className='custom_link'>
                                <div>
                                    <img src={export_img} alt="export_img_button" />
                                </div>
                                Custom link
                            </span>
                        </div>
                        <div className='d-flex gap-2 your_rewards_footer'>
                            <span>$40 AVAX</span>
                            <span>$10 BNB</span>
                            <span>$210 BTC</span>
                        </div>
                    </div>
                </div>

                {/* referral link */}
                <div className='referral_link mt-4'>
                    {
                        [1, 2].map((item, index) => <div key={index} className='referral_link_item'>
                            <div className='d-flex gap-2' style={{ width: "fit-content" }}>
                                <div>
                                    <img src={money_bag} alt="" />
                                </div>
                                <span><strong>12.5%</strong> of fee</span>
                            </div>
                            <p>Your Referral Link for xyz</p>
                            <div className='referral_link_url'>
                                <div>
                                    <p>https://unityexchange.design </p>
                                </div>
                                <div>
                                    <img src={copyImg} alt="copy_image_button" />
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>

                {/* tabs */}
                {
                    loading ? <p>loading..</p>
                        :
                        <>
                            <div className='tabs'>
                                {
                                    returnTabs().map(item => item)
                                }

                            </div>
                            <div className="table_container">
                                <table className='mt-3 main_table '>
                                    <thead className='table_header '>
                                        <tr className=''>
                                            <th>ASSET</th>
                                            <th>AMOUNT</th>
                                            <th>USER ACCOUNT</th>
                                            <th>REFERRAL EARNING</th>
                                        </tr>
                                    </thead>
                                    <tbody className='table_body' >
                                        {
                                            <tr>
                                                <td className='td-1'>
                                                    <div className='td-img' >
                                                        <img src={data.img} alt="bitcoin_icon" />
                                                    </div>
                                                    <div>
                                                        <h5>{data.asset}</h5>
                                                        <div className="d-flex gap-2">
                                                            <span style={{ color: "var(--text_grey)", fontWeight: 600 }}>{data.type}</span>
                                                            <div className='td-2'>
                                                                <div>
                                                                    <img src={data.chain.img} alt="chain_logo" />
                                                                </div>
                                                                <div>
                                                                    <span style={{ fontSize: ".6rem", fontWeight: 700 }}>{data.chain.name.toUpperCase()}</span>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                {/* second td item */}
                                                <td >
                                                    <div style={{ textAlign: "center" }}>
                                                        {data.amount} BNB
                                                    </div>
                                                    <div style={{ textTransform: "capitalize", color: "var(--text_grey)", textAlign: "center" }}>
                                                        {data.state}
                                                        {/* {activeTab === `tab0` ? "Open" : "Expired"} */}
                                                    </div>
                                                </td>
                                                {/* third td item */}
                                                <td className='td-3' >
                                                    <div >
                                                        {data.user}

                                                    </div>
                                                </td>
                                                {/* fourth td item */}
                                                <td className='text-center'>
                                                    <div >
                                                        {data.referral_earnings}.BNB
                                                    </div>
                                                    <div style={{ fontWeight: "600", display: "flex", justifyContent: "center", gap: '.5em', color: "var(--text_grey)", fontSize: ".8rem", textAlign: "center" }}>
                                                        View on BSC Scan
                                                        <div>
                                                            <img src={export2} alt="export darker" />
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>


                        </>
                }


            </div>
        </>
    )
}
