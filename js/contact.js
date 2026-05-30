document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', function(e){
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();
    if(!name || !email || !message){
      e.preventDefault();
      alert('Please fill out all fields before sending.');
      return;
    }
    // Let the form submit to FormSubmit.co (opens in a new tab)
  });
});
