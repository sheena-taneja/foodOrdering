import React, { useState } from 'react';

const Accordion = ({ title, count, children, showItem, setShowIndex, index }) => {

    const toggleAccordion = () => {
        if (showItem == true) {
            setShowIndex(null);
        } else
            setShowIndex(index);
    };

    return (
        <div className="accordion border border-solid border-black my-10  bg-gray-100 " >
            <div className="flex justify-between" onClick={toggleAccordion}>
                <h3 className="font-bold text-2xl p-10 mx-10 ">{title + "(" + count + ")"}</h3>
                <div className="p-10 mx-10 ">{showItem ? '🔼' : '🔽'}</div>
            </div>
            {showItem && <div className="accordion-item-content mx-20 my-5">{children}</div>}

        </div>
    );
};

export default Accordion;