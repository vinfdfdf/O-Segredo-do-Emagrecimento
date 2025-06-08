const perfil = localStorage.getItem('fotoPerfil');
const nome = localStorage.getItem('nomeUsuario');
if (perfil) 
 document.getElementById('logoutBtn').addEventListener('click', function() {
  localStorage.clear();
  window.location.href = 'index.html';
});
