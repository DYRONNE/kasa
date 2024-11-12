import React, { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../style/accordion.scss';

const Accordion = ({ title, content, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);

    
    const accordionClass = `accordion ${className}`.trim();

    return (
        <div className={accordionClass}>
            <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="accordion-title">{title}</h3>
                <span>
                    <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
                </span>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    );
};

export default Accordion;
