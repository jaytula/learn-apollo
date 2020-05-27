import React from 'react';
import classes from './Link.module.css';

const Link = ({ onClick, children, active }) => {
  const classNames = [classes.Link];
  if (active) {
    classNames.push(classes.Active);
  }
  return (
    <div className={classNames.join(' ')} onClick={onClick}>
      {children}
    </div>
  );
};

export default Link;
