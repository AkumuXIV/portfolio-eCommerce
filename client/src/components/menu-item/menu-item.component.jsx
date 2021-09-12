import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

//const MenuItem = ({ title }) => {...}
const MenuItem = (props) => {
    //can also destructure in the method definition itself.
    const { title, imageUrl, size, history, linkUrl, match } = props;
    //syle allows for modifying css style stuff dynamically. 
    return (
        <div className={`${size} menu-item`} 
             onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}>
            </div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>Shop now</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);