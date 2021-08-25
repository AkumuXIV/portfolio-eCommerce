import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import './directory.styles.scss';

const Directory = ({ sections }) => {
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

const mapStateToProps = createStructuredSelector(
  {
    sections: selectDirectorySection
  }
);

export default connect(mapStateToProps)(Directory);