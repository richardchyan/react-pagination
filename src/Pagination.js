const Pagination = ({postsPerPage, totalPosts, handlePaginate, currentPage}) => {

   const pageNumbers = [];

   for( let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
   }

   return (
      <div className="page-numbers">
         {pageNumbers.map(number => {
            return <button onClick={() => handlePaginate(number)} key={number} className={`page-buttons ${currentPage === number ? 'active-button' : null}`}>{number}</button>
         })}
      </div>
     );
}
 
export default Pagination;