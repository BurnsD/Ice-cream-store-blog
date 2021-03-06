async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post_content = document.querySelector('input[name="post-content"]').value.trim();
    console.log("INSIDE EDIT-POST.  I think this is where the error is happening: " + window.location.toString());
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        post_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      console.log ("INSIDE EDIT-POST &&&&&&&&&&&&&&&&");
        document.location.replace('/dashboard/');
    } else {
      console.log ("INSIDE EDIT-POST WITH AN ERROR");
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);