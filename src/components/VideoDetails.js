

function VideoDetail ({views, upvotes, downvotes, createdAt, title, toggleComments, increment, decrement}){
  return (
    <div>
<h2>{title}</h2>
<p>Views: {views}</p>
<p>Created At: {createdAt}</p>
<button onClick={increment}>upvotes: {upvotes}</button>
<button onClick={decrement}>downvotes: {downvotes}</button>
<hr />
<button onClick={toggleComments}>Hide Comments</button>

</div>
  )
}


export default VideoDetail;