import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchVoteComment } from '../actions/actions';
import UpDownVoter from './UpDownVoter';


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    boundVote: (comment_id, vote_option) => { //not sure if need this, but adding in case need to figure this out
      //console.log('comment_id', comment_id);
      //console.log('voteOption', vote_option);
      dispatch(fetchVoteComment({comment_id, vote_option}));
      //dispatch(test('id-101'));
    }
  }
};

//export default UpDownVoter;
const UpDownVoterCommentPostContainer = withRouter(connect(null, mapDispatchToProps)(UpDownVoter));
export default UpDownVoterCommentPostContainer;