import React from 'react'

const commentsData = [
    {
        name: "Abhay Sachan",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [ 
            
        ],
    },
    {
        name: "Abhay Sachan",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [ {
            name: "Abhay Sachan",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [ {
                name: "Abhay Sachan",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [ {
                    name: "Abhay Sachan",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [ 
                        
                    ],
                },
                    
                ],
            },
                
            ]
        },],
    },
    {
        name: "Abhay Sachan",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [ {
            name: "Abhay Sachan",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [ {
                name: "Abhay Sachan",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [{
                    name: "Abhay Sachan",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [ 
                        {
                            name: "Abhay Sachan",
                            text: "Lorem ipsum dolor sit amet, consectetur adip",
                            replies: [ 
                                
                            ],
                        },
                    ],
                }, 
                    
                ],
            },
                
            ],
        },
        ],
    },
    {
        name: "Abhay Sachan",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [ 
        ],
    },
    {
        name: "Abhay Sachan",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [ 
        ],
    },
   
];

const Comment = ({data})=>{
   const {name, text, replies} = data;
   return (
   <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
    <img 
        className="w-12 h-12"
        alt = "user" 
        src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
    />
    <div className="px-3">
        <p className="font-bold"> {name} </p>
        <p> {text} </p>
    </div>
    </div>
   );
};

const CommentsList = ({comments})=>{
    // Disclaimer: Don't use index as keys
 return comments.map((comment, index) => (
<div  key={index}>
    <Comment data = {comment} />
    <div className="pl-5 border border-l-black ml-5">
   <CommentsList comments={comment.replies}/>
    </div>
</div>
 ));
};

const CommentsContainer = () => {
  return <div className="m-5 p-2">
    <h1 className="text-2xl  font-bold"> Comments: </h1>
    <CommentsList comments = {commentsData}/>
    </div>
}

export default CommentsContainer;