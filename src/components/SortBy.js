import React from 'react';


class SortBy extends React.Component {
  render() {
    return (
      <div className="sort-by">
        <select>
          <option value='dateDesc'>Sort by Date Desc</option>
          <option value='dateAsc'>Sort by Date Asc</option>
          <option value='sortDesc'>Sort by Score Desc</option>
          <option value='sortAsc'>Sort by Score Asc</option>
        </select>
      </div>
    );
  }
}

export default SortBy;