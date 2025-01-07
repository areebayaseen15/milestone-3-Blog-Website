"use client";
import React, { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment(""); // Clear the input field
    }
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <>
      {/* Comments Section */}
      <div className=" w-full md:w-[800px] lg:w-[550px] xl:w-[770px] mx-auto lg:mx-24 xl:mx-28 mb-20 px-5 md:px-10 mt-20 ">
        <h2 className="text-2xl font-bold mb-3">Comments</h2>
        <hr className="m-5" />
        <div className="flex flex-col space-y-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-4 border border-gray-300 rounded resize-none focus:outline-none focus:ring-1 focus:ring-gray-400"
            rows={3}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="self-start px-6 py-2 bg-gray-500 text-white font-bold rounded hover:bg-gray-600 transition duration-200"
          >
            Post Comment
          </button>
        </div>

        {/* Display Comments */}
        <div className="mt-6 space-y-6">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-gray-100 rounded shadow-sm border border-gray-200 space-x-4"
              >
                {/* User Icon */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#8d5a3a] flex items-center justify-center text-white font-bold">
                    {comment[0].toUpperCase()}
                  </div>
                </div>
                {/* Comment Content */}
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800">User{index + 1}</span>
                    <button
                      onClick={() => handleDeleteComment(index)}
                      className="text-sm text-gray-700 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                  <p className="text-gray-700 mt-2">{comment}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No comments yet. Be the first to share your thoughts!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Comments;
