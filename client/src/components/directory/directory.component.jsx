import React from 'react';
import { /*connect, */useSelector } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';
import './directory.styles.scss';

const Directory = () => {
  const sections = useSelector(selectDirectorySection);

    return (
        <div className='directory-menu'>
            {
              sections.map(({id, ...otherSectionProps}) => 
              (<MenuItem key={id} {...otherSectionProps}/>))
                // this.state.sections.map(({title, imageUrl, id, size}) => 
                // (<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />))
            }
        </div>
    );
}

export default Directory;