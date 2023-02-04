import React, { useState } from 'react'
import './EventPage.css'
import { FaPlus, FaMinus } from "react-icons/fa";
import localIssuesSampleData from '../../sampleData/localIssuesSample'
import NavBar from '../navbar/navbar';


function LocalIssues() {
    const data = localIssuesSampleData

    const [selected, setSelected] = useState(null)
    const toggle = (id) => {
        if (selected === id) {
            return setSelected(null)
        }
        setSelected(id)
    }


    return (
        <div className="wholePage">
            <NavBar />
        <div className='eventPage'>
            <div className="eventInfo">
                <h1 className="header">
                    Current Local Issues
                </h1>
                <div className="allInfo">
                    {data.map((item, id) =>
                        <div className="events" key={item.id}>
                            <div className="eventDetail">
                                <div className="eventName" onClick={() => toggle(id)}>
                                    <h2>{item.dateUpdate}</h2>
                                    <span>{selected === id ? <FaMinus /> : <FaPlus />}</span>
                                </div>
                                <div className={
                                    selected === id ? 'news show' : 'news'
                                }>
                                    <div className="eventRecent">
                                    <span>Most Recent Update:</span> {item.mostRecentStatus}
                                    </div>
                                    <div className="eventSummary">
                                        <span>Description:</span> {item.description}
                                    </div>
                                    <div className="eventDecs">
                                    <span>Summary:</span> {item.summary}
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}

                </div>
            </div>
        </div>
        </div>
    )
}
export default LocalIssues;