import React from "react";
import PropTypes from 'prop-types';

export default function JudulSection({nama}) {
    return (
        <div className="judul-section">
            <h3><b>{nama}</b></h3>
        </div>
    )
}

JudulSection.propTypes = {
    nama: PropTypes.string.isRequired,
};
