const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//se agrega el # para llamar correctamente a la clase
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = `${data.name}`;//se corrigen las comillas para que funcione la interpolación
  $b.textContent = `${data.blog}`;//se corrigen las comillas para que funcione la interpolación
  $l.textContent = `${data.location}`;//se corrigen las comillas para que funcione la interpolación
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);