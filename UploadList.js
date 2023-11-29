import React, { useState } from "react";
import { BACKEND_URI } from "../config/constants";
import listcss from './UploadList.module.css';
import { AiOutlineLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";


const divStyle={
  overflowY: 'scroll',

  height:'100px',
  position:'relative'
};

const UploadsList = ({ medias }) => {
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [commentInput, setCommentInput] = useState('');

  const handleLike = (mediaId) => {
    setLikes((prevLikes) => ({ ...prevLikes, [mediaId]: (prevLikes[mediaId] || 0) + 1 }));
  };

  const handleUnlike = (mediaId) => {
    if (likes[mediaId] > 0) {
      setLikes((prevLikes) => ({ ...prevLikes, [mediaId]: prevLikes[mediaId] - 1 }));
    }
  };

  const handleComment = (mediaId) => {
    if (commentInput.trim() !== '') {
      setComments((prevComments) => ({ ...prevComments, [mediaId]: [...(prevComments[mediaId] || []), commentInput] }));
      setCommentInput('');
    }
  };

  return (
    <div className={listcss.row}>
      {/* <table className={listcss.table}>
        <thead>
          <tr>
            <th className={listcss.headdes}>Description</th>   
          </tr>
        </thead>
        <tbody className={listcss.body}>
          {medias &&
            medias.map((media) => {
              return (
                <tr className={listcss.innerbody} key={media.id}>
                  <td className={listcss.bodyname}>{media.name}</td>
                  
                  <td className={listcss.bodyvid}>
                    {media.videos.map((video, index) => (
                      <div key={index}>
                        <video preload="auto" width="320" height="240" controls>
                          <source src={`${BACKEND_URI}${video}`} />
                          Your browser does not support the video tag
                        </video>
                      </div>
                    ))}
                  </td>
                  <td>
                    <div>
                      {comments[media.id] &&
                        comments[media.id].map((comment, index) => (
                          <div key={index}>{comment}</div>
                        ))}
                    </div>
                    <input
                      type="text"
                      value={commentInput}
                      placeholder="Add a comment"
                      onChange={(e) => setCommentInput(e.target.value)}
                    />
                    <button onClick={() => handleComment(media.id)}>
                      Add Comment
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleLike(media.id)}>
                      Like
                    </button>
                    <button onClick={() => handleUnlike(media.id)}>
                      Unlike
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table> */}

      <div className={listcss.table}>


        {/* <div className={listcss.headdes}>Description</div>    */}

        <div className={listcss.body}>
          {medias &&
            medias.map((media) => {
              return (
                <div className={listcss.innerbody} key={media.id}>


                  <div className={listcss.bodyvid}>
                  {media.videos.map((video, index) => (
                    <div key={index}>
                      <video preload="auto" width="348px" height="240px" controls>
                        <source src={`${BACKEND_URI}${video}`} />
                        Your browser does not support the video tag
                      </video>
                      <div className={listcss.bodyname} style={divStyle}>{media.name}</div>
                      <div>
                    {comments[media.id] &&
                      comments[media.id].map((comment, index) => (
                        <div key={index}>{comment}</div>
                      ))}
                  </div>
                  {/* <div>
                  Likes {likes[media.id] && `${likes[media.id]}`}
                  </div> */}
                  {/* <input
                    type="text"
                    value={commentInput}
                    placeholder="Add a comment"
                    onChange={(e) => setCommentInput(e.target.value)}
                  /> */}
                  {/* <br />
                  <button className={listcss.comment} onClick={() => handleComment(media.id)}>
                    Add Comment
                  </button>
                        <br />
                        <button className={listcss.like} onClick={() => handleLike(media.id)}>
                  <AiOutlineLike />
                   
                  </button>

                        

                  <button className={listcss.unlike} onClick={() => handleUnlike(media.id)}>
                  <AiTwotoneDislike />

                  </button> */}
                    </div>
                    
                  ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

    </div>
  );
};

export default UploadsList;
