import Follower from './Follower';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  
  const getPosts = async () => {
     const response = await fetch(url);
     const data = await response.json();
     setLoading(false);
     setPosts(data);
     console.log(data);
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
  useEffect(() => {
     getPosts();

  }, []);

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="App">
      <div className="profiles">
        <h1 className="home-title"> { loading ? 'Loading...' : 'Pagination' }</h1>
        <div className="underline"></div>
      </div>      
      <div className="followers-container">
        <div className="follower">
          {currentPosts.map(follower => (
            <Follower key={follower.id} {...follower}/>
          ))}
        </div>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} handlePaginate={handlePaginate} />
        
      </div>
    </div>
  );
}

export default App;
