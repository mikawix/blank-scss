import React from 'react';
import './new-component.scss';
import image from '../assets/image1.png';

export const NewComponent: React.FC = () => {
    return <div className='new-component__root'>
        <img src={image} />NewComponent</div>;
};
