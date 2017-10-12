import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import { fetchVotePost, test } from '../actions/actions';

class UpDownVoter extends React.Component {
  render() {
    let postId = this.props.postId;
    console.log('postId', postId);
    return (
      <div className="vote-score">
        <FaArrowUp color='green' onClick={()=>{ this.props.boundPostVote(postId, 'upVote'); }} />
        <FaArrowDown color='red' onClick={()=>{ this.props.boundPostVote(postId, 'downVote'); }} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    boundPostVote: (post_id, vote_option) => { //not sure if need this, but adding in case need to figure this out
      console.log('postId', post_id);
      console.log('voteOption', vote_option);
      dispatch(fetchVotePost({post_id, vote_option}));
      //dispatch(test('id-101'));
    }
  }
};

//export default UpDownVoter;
export default withRouter(connect(null, mapDispatchToProps)(UpDownVoter));