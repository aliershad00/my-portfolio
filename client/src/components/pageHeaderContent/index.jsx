import React from 'react'
import css from './styles.scss'


const PageHeader = (props) => {
  const {HeaderText,icon} = props;

  return (
    <div className='wrapper'>
     <h2>{HeaderText}</h2>
     <span>{icon}</span>
    </div>
  )
}

export default PageHeader;
