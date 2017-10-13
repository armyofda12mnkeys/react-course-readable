import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {changePostOrder} from '../actions/actions';

class SortBy extends React.Component {
  render() {
    return (
      <div className="sort-by">        
        <select name="orderBy" onChange={ (event)=>this.props.boundChangePostOrder(event.target.value) }  value={this.props.orderBy}>
          <option value='dateAsc'>Sort by Date Asc</option>
          <option value='dateDesc'>Sort by Date Desc</option>
          <option value='scoreAsc'>Sort by Score Asc</option>
          <option value='scoreDesc'>Sort by Score Desc</option>
        </select>
        Sort By: {this.props.orderBy}
      </div>
    );
  }
}


function mapStateToProps({ui}, ownProps) {
  console.log('uiOrderBy', ui.orderBy);
  let orderBy = ui.orderBy;
  return {orderBy};
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    boundChangePostOrder: (orderBy) => {
      dispatch(changePostOrder({orderBy}));
    },
    
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SortBy));


//export default SortBy;