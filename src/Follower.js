const Follower = ({ avatar_url, html_url, login}) => {
   return ( 
      <div className="follower-card">
         <img src={avatar_url} alt={login}/>
         <h4>{login}</h4>
         <button className="btn-profile">View Profile</button>
      </div>
   );
}
 
export default Follower;