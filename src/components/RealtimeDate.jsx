import React from "react";
import PropTypes from 'prop-types';

export default function RealtimeDate({ time }) {
    return (
        <div className="realtime-date">
            <small>{time}</small>
        </div>
    )
}

RealtimeDate.propTypes = {
    time: PropTypes.string.isRequired
};
