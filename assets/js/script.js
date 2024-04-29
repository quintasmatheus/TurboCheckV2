'use strict';


////////////////////////////////////////////////////////////////
//Intersection Service

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//onsubmit="return handleSubmit();
function handleSubmit() {
  var form = document.getElementById('form');

  fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
          'Accept': 'application/json',
      },
  })
  .then(response => {
      if (response.ok) {
          form.reset(); 
          alert('Form submetido com sucesso');
      } else {
          alert('O form não foi submetido com sucesso');
      }
  })
  .catch(error => {
      alert('Error submitting form');
      console.error('Error:', error);
  });

  return false; 
}

//onsubmit="return validateForm();"
function validateForm() {
  return true; 
}