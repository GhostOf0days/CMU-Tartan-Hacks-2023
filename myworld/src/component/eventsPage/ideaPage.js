import React, { useState } from 'react'
import './ideaPage.css'
import { FaPlus, FaMinus } from "react-icons/fa";
import ideaBoardSampleData from '../../sampleData/ideaBoardSample'

function ideaPage() {
    const data = ideaBoardSampleData

    const [selected, setSelected] = useState(null)
    const toggle = (id) => {
        if (selected === id) {
            return setSelected(null)
        }
        setSelected(id)
    }


    return (
        <div className='Idea and Voting Boards Page'>
            <div className="ideaInfo">
                <div className="header">
                    Upcoming Proposals and Voting
                </div>
                <div className="allInfo">
                    {data.map((item, id) =>
                        <div className="ideas" key={item.id}>
                            <div className="ideaDetail">
                                <div className="ideaName" onClick={() => toggle(id)}>
                                    <h2>{item.dateUpdate}</h2>
                                    <span>{selected === id ? <FaMinus /> : <FaPlus />}</span>
                                </div>
                                <div className={
                                    selected === id ? 'news show' : 'news'
                                }>
                                    <div className = "ideaType">
                                        <div class="dropdown">
                                        <button class="dropbtn">Item Type</button> {item.type}
                                        <div class="dropdown-content">
                                            <a href="#">University</a>
                                            <a href="#">Neighborhood</a>
                                            <a href="#">City</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="ideaProposal">
                                    <span>Proposal:</span> {item.proposal}
                                    </div>
                                    <div className="ideaSummary">
                                        <span>Description:</span> {item.description}
                                    </div>
                                    <div className="ideaDescription">
                                    <span>Summary:</span> {item.summary}
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}
export default ideaPage;