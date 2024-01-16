const commentBtn = document.getElementById('comment');
commentBtn.addEventListener('click', addCommentHandler);

const submitCommentBtn = document.getElementById('submit-comment');

const commentDiv = document.getElementById("comment-div");
const commentLabel = document.getElementById("add-comment-label");
const commentTextbox = document.getElementById("add-comment-textbox")


function addCommentHandler() {
    console.log('comment clicked');
    commentDiv.classList.remove("hide");
    commentBtn.classList.add("hide");
}

const submitCommentHandler = async () => {
    const content = commentTextbox.value.trim();
    const post_id = document.querySelector('input').dataset.postid
    console.log(post_id);
    console.log(content);

    if (content) {
        const response = await fetch(`/api/comments`, {
          method: 'POST',
          body: JSON.stringify({ content, post_id }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
            console.log("done");
          document.location.reload();
        } else {
          alert('Failed to create project');
        }
      }




}

submitCommentBtn.addEventListener('click', submitCommentHandler);