document.addEventListener('DOMContentLoaded', function () {
  const ervaringen39 = JSON.parse(localStorage.getItem('ervaringen39')) || [];
  const emotieTekstElement39 = document.querySelector('#emotietekstp39');
  const emotieTekstElementtekst39 = document.querySelector('.emotietekst39');
  const ervaringTekstElementtekst39 = document.querySelector('.ervaringtekst39');
  const storedEmotie39 = localStorage.getItem('emotie39');
  const storedErvaring39 = localStorage.getItem('ervaring39');

  
  if (storedEmotie39 && emotieTekstElement39) {
    emotieTekstElement39.textContent = storedEmotie39;
    emotieTekstElementtekst39.style.display = 'block';
  }

  if (storedErvaring39 && ervaringTekstElementtekst39) {
    ervaringTekstElementtekst39.textContent = storedErvaring39;
    ervaringTekstElementtekst39.style.display = 'block';
  }


  ervaringen39.forEach(item => {
    voegErvaringToeAanPagina(item.emotie39, item.ervaring39);
  });

  const reactielijstContainer39 = document.querySelector('#reactieLijst39');
  const reacties39 = JSON.parse(localStorage.getItem('reacties39')) || [];

  reacties39.forEach(item => {
    voegReactieToeAanPagina(item.naam39, item.reactie39);
  });
});


const emotieDiv = document.querySelector('.emotie39'); 
const ervaringDiv = document.querySelector('.ervaring39');
const buttonDiv = document.querySelector('.button');
const naamDiv = document.querySelector('.naam39');
const reactieDiv = document.querySelector('.reactie39');
const tweebuttonDiv = document.querySelector('.tweebutton');
const ervaringTekstElementtekst39 = document.querySelector('.ervaringtekst39');



document.getElementById('plaatsenButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emotieInput39 = document.querySelector('#emotieinput39');
  const ervaringInput39 = document.querySelector('#ervaringinput39');
  const emotieTekstElement39 = document.querySelector('#emotietekstp39');
  const emotieTekstElementtekst39 = document.querySelector('.emotietekst39');
  const ervaringTekstElement39 = document.querySelector('#ervaringtekstp39'); 

  if (emotieInput39.value.trim() === '') {
    alert('Vul een emotie in!');
    return;
  }

  if (ervaringInput39.value.trim() === '') {
    alert('Vul een ervaring in!');
    return;
  }

  const emotie39 = emotieInput39.value.trim();
  const ervaring39 = ervaringInput39.value.trim();

  
  
 
  if (emotieTekstElement39) {
    emotieTekstElement39.textContent = emotie39;
    emotieTekstElementtekst39.style.display = 'block'; 
  }


  if (ervaringTekstElement39) {
    ervaringTekstElement39.textContent = ervaring39;
    ervaringTekstElement39.style.display = 'block'; 
  }

  

  localStorage.setItem('emotie39', emotie39);


  localStorage.setItem('ervaring39', ervaring39);

  const ervaringen39 = JSON.parse(localStorage.getItem('ervaringen39')) || [];
  ervaringen39.push({ emotie39, ervaring39 });
  localStorage.setItem('ervaringen39', JSON.stringify(ervaringen39));

  voegErvaringToeAanPagina(emotie39, ervaring39);

  emotieInput39.value = '';
  ervaringInput39.value = '';


});

document.getElementById('plaatsentweeButton').addEventListener('click', function (event) {
  event.preventDefault();

  const naamInput39 = document.querySelector('#naaminput39');
  const reactieInput39 = document.querySelector('#reactieinput39');

  if (naamInput39.value.trim() === '') {
    alert('Vul een naam in!');
    return;
  }

  if (reactieInput39.value.trim() === '') {
    alert('Vul een reactie in!');
    return;
  }

  const naam39 = naamInput39.value.trim();
  const reactie39 = reactieInput39.value.trim();

  const reacties39 = JSON.parse(localStorage.getItem('reacties39')) || [];
  reacties39.push({ naam39, reactie39 });
  localStorage.setItem('reacties39', JSON.stringify(reacties39));

  voegReactieToeAanPagina(naam39, reactie39);

  naamInput39.value = '';
  reactieInput39.value = '';
});


function voegErvaringToeAanPagina(emotie39, ervaring39) {
  emotieDiv.style.display = 'none';
  ervaringDiv.style.display = 'none';
  buttonDiv.style.display = 'none';
  naamDiv.style.display = 'block';
  reactieDiv.style.display = 'block';
  tweebuttonDiv.style.display = 'inline-block';
  ervaringTekstElementtekst39.style.display = 'block';
}

function voegReactieToeAanPagina(naam, reactie) {
  const reactielijstContainer39 = document.querySelector('#reactieLijst39');

  const container = document.createElement('div');
  container.classList.add('reactietekst39');

  const titel = document.createElement('h1');
  titel.textContent = naam;

  const tekst = document.createElement('p');
  tekst.textContent = reactie;

  container.appendChild(titel);
  container.appendChild(tekst);
  reactielijstContainer39.appendChild(container);
  reactielijstContainer39.style.display = 'flex';
}

