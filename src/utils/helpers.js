export function postsHelperSort( posts=[], orderBy){
  if(Array.isArray(posts)){
    if(orderBy === 'dateDesc') {
      return posts.sort(function(a,b){
        return a.timestamp-b.timestamp;
      });
    } else if(orderBy === 'scoreAsc') {
      return posts.sort(function(a,b){
        return a.voteScore - b.voteScore
      });
    } else if(orderBy === 'scoreDesc') {
      return posts.sort(function(a,b){
        return b.voteScore - a.voteScore;
      });
    } else { //dateAsc
      return posts.sort(function(a,b){
        return b.timestamp-a.timestamp;
      });
    }
  } 
  return [];
};