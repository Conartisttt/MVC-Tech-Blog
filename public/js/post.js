const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#project-name').value.trim();
  const content = document.querySelector('#project-desc').value.trim();


  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};

const createPostView = () => {
  const createPostBtnDiv = document.getElementById('createPostBtnDiv').classList.add('hide');
  const createPostDiv = document.getElementById('createPostDiv').classList.remove('hide');
}

const cancelBtnHandler = (event) => {
  event.preventDefault();
  const createPostBtnDiv = document.getElementById('createPostBtnDiv').classList.remove('hide');
  const createPostDiv = document.getElementById('createPostDiv').classList.add('hide');
  const titleInput = document.getElementById('project-name').value="";
  const descriptionInput = document.getElementById('project-desc').value="";
}

const toggleViewBtn = document.getElementById('createPostBtn');
if (toggleViewBtn) {
  toggleViewBtn.addEventListener('click', createPostView);
}

const cancelUpdateBtn = document.getElementById('cancelUpdateBtn');
if (cancelUpdateBtn) {
  cancelUpdateBtn.addEventListener('click', cancelBtnHandler)
}

const submitPost = document.querySelector('.new-project-form');
if (submitPost) {
  submitPost.addEventListener('submit', newFormHandler);
}

const deletePost = document.querySelector('.project-list');
if (deletePost) {
  deletePost.addEventListener('click', delButtonHandler);
}