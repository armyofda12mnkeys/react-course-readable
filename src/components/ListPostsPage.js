import  React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import PostList from './PostList';
import SortBy from './SortBy';
import {postsHelperSort} from '../utils/helpers';

class ListPostsPage extends React.Component {
  
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  
  render() {
    //let {posts, comments, categories} = this.props;        
    //console.log('posts',posts.items);
    
    //filter posts based on SortBy dropdown state!
    let filteredPosts = this.props.filteredPosts;
    let categories = this.props.categories;
    let category = this.props.category ? '#'+this.props.category : 'none';
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
            <NavLink to={category.path}>#{category.name}</NavLink>
          </div>
        ))}            
      </div>
    );
  }
}

function mapStateToProps({posts, comments, categories, ui}, ownProps) {
  let category = ownProps.match.params.category || ''; 
  let filteredPosts = {...posts};
  //filter by category or all posts
  if(category!=='') {
    filteredPosts.items = filteredPosts.items.filter((post) => post.category===category );
  }
  //filter/sort the list by the sort by chosen
  filteredPosts.items = postsHelperSort(filteredPosts.items, ui.orderBy);  
  
  return {posts, comments, categories, filteredPosts, category};
}


export default withRouter(connect(mapStateToProps, null)(ListPostsPage));