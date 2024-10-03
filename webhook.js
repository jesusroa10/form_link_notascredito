const getButton = document.getElementById('btn');
const getLink = document.getElementById('link');
const getDiv = document.getElementById('enviado');

getButton.addEventListener('click', () => {
  fetch('https://hook.us1.make.com/v279sumyk8mnrex1to7uj8e4jbso8u6c', {
    method: 'POST',
    body: new URLSearchParams({
      Link: getLink.value,
      Message: getDiv.innerText
    })
  })
  .then(response => response.text())
  .then(envio => {
    getDiv.style.display = 'block';
    
    // Desaparecer el mensaje después de 2 seg.
    setTimeout(() => {
      getDiv.style.display = 'none';
    }, 2000);
  });
  
  getLink.value = '';
});
