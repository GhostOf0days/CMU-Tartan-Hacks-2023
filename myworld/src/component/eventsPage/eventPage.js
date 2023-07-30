import React, { useState } from 'react'
import './eventPage.css'
import { FaPlus, FaMinus, FaMapMarkerAlt } from "react-icons/fa";
import EventData from '../../sampleData/recreationalSample'
import NavBar from '../navbar/navbar';

function EventPage() {
    const data = EventData

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
                <div className="header">
                    <h1>Recreational Events</h1>
                </div>
                <div className="allInfo">
                    {data.map((item, id) =>
                        <div className="events" key={item.id}>
                            <div className="eventDetail">
                                <div className="eventName" onClick={() => toggle(id)}>
                                    <h2>{item.title}</h2>
                                    <span className='iconSpan'>{selected === id ? <FaMinus /> : <FaPlus />}</span>
                                </div>
                                <div className={
                                    selected === id ? 'news show' : 'news'
                                }>
                                    <div className="eventDate">
                                        {item.date}
                                    </div>
                                    <div className="eventLocation">
                                        <span><FaMapMarkerAlt /></span> {item.location}
                                    </div>
                                    <div className="eventDecs">
                                        {item.desc}
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
export default EventPage;