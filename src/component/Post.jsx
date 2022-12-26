import React from "react";

const Post = (props) => {
  console.log(props);

  return (
    <div>
      <div className="subDiv">
        <img id="post-img" src={props.img} alt={props.title} />
        <div className="card-details">
          <div>
            <p className="post-title post-info">{props.title}</p>
          </div>
          <div className="horizontal-flex">
            <p>{props.tag}</p>
            <p>{props.date}</p>
          </div>
          <div className="horizontal-flex">
            <button className="btn">
              <a target="_blank" href={props.postSource}>
                More
              </a>
            </button>
            <p className="post-upvotes">
              <i class="fa fa-thumbs-up"></i> {props.upVotes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
