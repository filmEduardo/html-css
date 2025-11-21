const botao = document.getElementById('botao-tema');
const body = document.body;

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link'); //vai pegar todas as ancoras com a classe link (a.link)
navLinks.forEach(link => { //forEach = para cada uma delas 
  link.addEventListener('click', function(e) { //vao execultar a arrow function - aguardar o 'click' - quando clicar em cima
    e.preventDefault(); //ele vai evitar o comportamento padrão - no caso, ao clicar, vai no link errado, pois o "header fixo" fica em cima do texto titulo
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { //= se tiver um 'href'
      const headerHeight = document.querySelector('header').offsetHeight; // vai pegar a altura do 'header'
      const targetPosition = target.offsetTop - headerHeight - 20; // vai mover para o tamanho normal (vai considerar que existe o tamanho normal da caixa do header) menos [-] 20
      window.scrollTo({ // a "rolagem tipo suave"
        top: targetPosition, // para a posição do target que ele calculou
        behavior: 'smooth' // comportamento "suave"
      });
    }
  });
});