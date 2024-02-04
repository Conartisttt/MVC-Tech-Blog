// create new post
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

//update post
const updatePostHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('data-update-id')) {
    const id = event.target.getAttribute('data-update-id');

    const title = document.getElementById('updatedPostTitle').value.trim();
    const content = document.getElementById('updatedPostContent').value.trim();

    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update project');
    }
  }
};

//delete post
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

//show create post form
const createPostView = () => {
  const createPostBtnDiv = document.getElementById('createPostBtnDiv').classList.add('hide');
  const createPostDiv = document.getElementById('createPostDiv').classList.remove('hide');
}

//hide create post form
const cancelBtnHandler = (event) => {
  event.preventDefault();
  const createPostBtnDiv = document.getElementById('createPostBtnDiv').classList.remove('hide');
  const createPostDiv = document.getElementById('createPostDiv').classList.add('hide');
  const titleInput = document.getElementById('project-name').value = "";
  const descriptionInput = document.getElementById('project-desc').value = "";
}

//show post edit options
const editBtnHandler = () => {
  const editPostBtnDiv = document.getElementById('editPostBtnDiv').classList.add('hide');
  const updateDeleteDiv = document.getElementById('updateDeleteDiv').classList.remove('hide');
}

//show update post form
const updateViewHandler = () => {
  const updateForm = document.getElementById('updateForm');
  updateForm.classList.remove('hide');
  const currentPostDiv = document.getElementById('indivPost');
  currentPostDiv.classList.add('hide');
}

//hide update post form
const cancelUpdateHandler = (event) => {
  event.preventDefault();
  const updateForm = document.getElementById('updateForm');
  updateForm.classList.add('hide');
  const currentPostDiv = document.getElementById('indivPost');
  currentPostDiv.classList.remove('hide');
}

//hide edit button options
const cancelEditHandler = () => {
  const editPostBtnDiv = document.getElementById('editPostBtnDiv').classList.remove('hide');
  const updateDeleteDiv = document.getElementById('updateDeleteDiv').classList.add('hide');
}

//Event listeners
const toggleCreateBtn = document.getElementById('createPostBtn');
if (toggleCreateBtn) {
  toggleCreateBtn.addEventListener('click', createPostView);
}

const cancelCreateBtn = document.getElementById('cancelCreateBtn');
if (cancelCreateBtn) {
  cancelCreateBtn.addEventListener('click', cancelBtnHandler)
}

const toggleEditBtn = document.querySelectorAll('.toggleEdit');
if (toggleEditBtn) {
  for (let i = 0; i < toggleEditBtn.length; i++) {
    toggleEditBtn[i].addEventListener('click', editBtnHandler)
  }
}

const toggleUpdateBtn = document.getElementById('updatePostBtn');
if (toggleUpdateBtn) {
  toggleUpdateBtn.addEventListener('click', updateViewHandler)
}

const cancelEditBtn = document.getElementById('cancelEditBtn');
if (cancelEditBtn) {
  cancelEditBtn.addEventListener('click', cancelEditHandler)
}

const updatePost = document.getElementById('submitUpdateBtn');
if (updatePost) {
  updatePost.addEventListener('click', updatePostHandler)
}

const submitPost = document.querySelector('.new-project-form');
if (submitPost) {
  submitPost.addEventListener('submit', newFormHandler);
}

const deletePost = document.querySelector('.project-list');
if (deletePost) {
  deletePost.addEventListener('click', delButtonHandler);
}

