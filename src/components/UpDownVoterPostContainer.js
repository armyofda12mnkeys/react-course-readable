import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import { fetchVotePost, test } from '../actions/actions';
import UpDownVoter from './UpDownVoter';


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    boundVote: (post_id,    vote_option) => { //not sure if need this, but adding in case need to figure this out
      console.log('post_id', post_id);
      console.log('voteOption', vote_option);
      dispatch(fetchVotePost({post_id, vote_option}));
      //dispatch(test('id-101'));
    }
  }
};

//export default UpDownVoter;
const UpDownVoterPostContainer = withRouter(connect(null, mapDispatchToProps)(UpDownVoter));
export default UpDownVoterPostContainer;