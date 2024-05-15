import React from "react";
import Button from 'react-bootstrap/Button';
import { InlineWidget } from "react-calendly";

export const Booking = () => {

    return (
        <div className="calendly-container" >
            <InlineWidget url="https://calendly.com/jens-w-brauer/free-digital-consultation" styles={{
            height: '1000px'
            }} />
        </div>
    );
};