import React from 'react';
import cv from '../../../assests/cv/CV-EN-Brendea-Daniel.pdf';
import classes from './cvButton.module.css';

const cvButton = () => {
    return (
        <div className={classes.cvdivlink}>
            <a href={cv} target="_blank" rel="noopener noreferrer">
                - View CV -
            </a>
        </div>
    );
};

export default cvButton;
