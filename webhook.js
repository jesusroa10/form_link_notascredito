const getButton = document.getElementById('btn');
const getLink = document.getElementById('link');
const getDiv = document.getElementById('enviado');

    getButton.addEventListener('click', () =>{
        fetch('https://hook.us1.make.com/yj76ww3gsycomaaodr5h9911ujou458o', {
            method: 'POST',
            body: new URLSearchParams({
              Link: getLink.value,
              Message: getDiv.innerText
        })

      })
    
      .then(response => response.text()).then(envio => {getDiv.style.display='block'});
      getLink.value = '';
    })
