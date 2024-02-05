import React from "react";
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils/data";

export default function DetailPage ({notes}){
    const { id } = useParams();
    const detailData = notes.find(note => note.id === id);

    if (!detailData) {
        return <div>Loading...</div>;
    }

    const { title, createdAt, body } = detailData;
    return(
        <>
            <div>
                <h1>{title}</h1>
                <p>{showFormattedDate(createdAt)}</p>
                <p>{body}</p>
            </div>
        </>
    )
}

DetailPage.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
        })
    ).isRequired,
};
