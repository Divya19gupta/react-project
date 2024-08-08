import React, {useState} from 'react';
import data from './data';
import "./style.css";

export default function Accordian() {
    const [selected, setSelected] = useState(null);

    function handleSingleSelection(itemId) {
        setSelected(itemId === selected ? null : itemId);
    }
    debugger;
    return <div className='wrapper'>
        <div className='accordian'>
            {
            data && data.length > 0 ? (
                data.map((dataItem)=>
                    <div>
                        <div className='item'>
                            <div className='title'>
                                <h3>{dataItem.question}</h3>
                                <span onClick={() => handleSingleSelection(dataItem.id)}>+</span>
                            </div>
                        </div>
                        <div>
                            {
                                selected === dataItem.id ?
                                <div className='content'>{dataItem.answer}</div> : null
                            }

                        </div>
                    </div>
                )
            ): (
            <div> No data found.</div>
            )}
        </div>
    </div>
}