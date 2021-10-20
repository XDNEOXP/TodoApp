import React, { useState } from "react";
import './FilterFooter.css'

const FilterFooter = ({ tasks, updateFilter }) => {
  const [filter, setFilter] = useState('all')

  const handelFilter = (filterName) => {
    setFilter(filterName)
    updateFilter(filterName)
  }

  return (
    <div className="FilterFooter">
        <div className="FilterFooter__countItems">{ tasks.length } Item</div>
      <div className="FilterFooter__filters">
        <ul>
          <li>
        <button onClick={() => handelFilter('all')} type="button" className={filter === 'all' ? 'active' : ''}>All</button>
          </li>
          <li>
        <button onClick={() => handelFilter('active')} type="button" className={filter === 'active' ? 'active' : ''}>Active</button>
          </li>
          <li>
        <button onClick={() => handelFilter('completed')} type="button" className={filter === 'completed' ? 'active' : ''}>Completed</button>
          </li>
        </ul>
     </div>
    </div>
)
}

export default FilterFooter