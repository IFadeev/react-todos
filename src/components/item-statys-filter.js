import React from 'react';

import './item-status-filter.css';

const ItemStatusFiltet = () => {
  return (
    <div className="btn-group" role="group">
      <button type="button" className="btn btn-outline-primary active">All</button>
      <button type="button" className="btn btn-outline-primary">Active</button>
      <button type="button" className="btn btn-outline-primary">Done</button>
    </div>
  )
}

export default ItemStatusFiltet;

