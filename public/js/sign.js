const signUp = document.querySelector("form#signUp");
const signIn = document.querySelector("form#signIn");

signUp.addEventListener('submit', e => {
    fetch('/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(getFormInputs(e.target))
    })
    .then(data => console.log(data.json()))
    
    .then(res => {
        if (res.success) {
            window.location.href = '/'
        } else {
            console.log("Error");
        }
    })
})


signIn.addEventListener('submit', e => {
    fetch('/signin', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(getFormInputs(e.target))
    })
    .then(data => console.log(data.json()))
    
    .then(res => {
        if (res.success) {
            window.location.href = '/'
        } else {
            console.log("Error");
        }
    })
})

let getFormInputs = (form) => {
    let inputs = form.querySelectorAll("input");
    let data = {};
    inputs.forEach((input) => {
        data[input.name] = input.value;
    });

    return data;
};

// Check if user is logged in
const checkLoggedIn = () => {
    fetch('/api/v1/check-logged', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => data.json())
    .then(res => {
        if (res.status === 200) {
            window.sessionStorage.setItem('user', JSON.stringify(res.user));
        } else {
            window.sessionStorage.removeItem('user');
        }
    })
}
window.addEventListener('load', checkLoggedIn);