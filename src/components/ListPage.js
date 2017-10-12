import   React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Route, Link, NavLink} from 'react-router-dom';
import {test, fetchGetPosts, fetchGetAllCategories} from '../actions/actions';
import PostList from './PostList';
import SortBy from './SortBy';

class ListPage extends React.Component {
  
  componentDidMount() {
    //get all post and categories for the state
    //const {loadAllPosts, loadCategories} = this.props;
    //loadCategories();
    //loadAllPosts();

    //this.props.boundChangeSort();
    this.props.boundFetchGetPosts();//adds initial posts (and their comments) to state
    this.props.boundFetchGetAllCategories();//adds initial categories to state
    //console.log('app props', this.props);
  }
  componentWillUnmount() {
  }
  
  render() {
    //let {posts, comments, categories} = this.props;        
    //console.log('posts',posts.items);
    
    //filter posts based on SortBy dropdown state!
    let filteredPosts = this.props.filteredPosts;
    let categories = this.props.categories;
    let category = this.props.category;
    //console.log('posts',posts.items);
    //console.log('params',this.props.match.params);
    
    return (
      <div>
        <h1>List Posts</h1>
        <h2>Category: {category || 'none'}</h2>
        <SortBy />
        
        <PostList posts={filteredPosts} />
        
        Categories:
        <div>
          <NavLink to="/">none</NavLink>
        </div>
        {categories && categories.items.map((category) => (
          <div key={category.name}>
            <NavLink to={category.path}>{category.name}</NavLink>
          </div>
        ))}            
      </div>
    );
  }
}

function mapStateToProps({posts, comments, categories}, ownProps) {
  let category = ownProps.match.params.category || ''; 
  let filteredPosts = {...posts};
  if(category!='') {
    filteredPosts.items = filteredPosts.items.filter((post) => post.category===category );
  }
  return {posts, comments, categories, filteredPosts, category};
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    /*
    boundChangeSort: () => { //not sure if need this, but adding in case need to figure this out
      dispatch(test('id-101'))
    },
    */
    boundFetchGetPosts: () => {
      dispatch(fetchGetPosts(''));
    },
    boundFetchGetAllCategories: () => {
      dispatch(fetchGetAllCategories());
    },
    
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListPage));