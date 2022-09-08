const userDiv = document.querySelector('#user-info');

const id = window.location.href.split('/')[4];

fetch(`/users/${id}`)
.then(data => data.json())
.then(user => {
    const userName = document.createElement('h2');
    userName.textContent = user.username;
    
    const userImg = document.createElement('img');
    userImg.src= user.img

    userDiv.append(userName, userImg);
})
.catch(err => console.log(err));
