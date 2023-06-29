const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event){
    event.preventDefault();
    
    const formEltmtnts = event.currentTarget.elements;

    const email = formEltmtnts.email.value;
    const password = formEltmtnts.password.value;

    if (email === '' || password === '') {
        return alert('Please fill in all the fields!')
    }

      const formData = {
        email,
        password,
    };
       console.log(formData);
       event.currentTarget.reset();
}


