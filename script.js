/*INICIO DA PROGRAMAÇÃO DO CARROSSEL DE CLIENTES*/
// Seleciona os elementos do DOM para o carrossel de clientes
const clientesCarrossel = document.querySelector('.clientes-carrossel');
const clientesCards = document.querySelectorAll('.cliente-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let clienteCurrentIndex = 0; // Índice inicial do carrossel de clientes

// Função para atualizar a posição do carrossel de clientes
function updateClientesCarousel() {
  const cardWidth = clientesCards[0].offsetWidth + 40; // Largura do cartão mais a margem direita (40px)
  const offset = -clienteCurrentIndex * cardWidth; // Calcula o deslocamento com base no índice
  clientesCarrossel.style.transform = `translateX(${offset}px)`;
}

// Evento do botão 'Próximo' para o carrossel de clientes
nextBtn.addEventListener('click', () => {
  if (clienteCurrentIndex < clientesCards.length - 1) { // Mostra apenas 1 cartão por vez
    clienteCurrentIndex++; // Avança para o próximo cartão
  } else {
    clienteCurrentIndex = 0; // Volta para o primeiro cartão se estiver no final
  }
  updateClientesCarousel(); // Atualiza o carrossel de clientes
});

// Evento do botão 'Anterior' para o carrossel de clientes
prevBtn.addEventListener('click', () => {
  if (clienteCurrentIndex > 0) {
    clienteCurrentIndex--; // Volta para o cartão anterior
  } else {
    clienteCurrentIndex = clientesCards.length - 1; // Vai para o último cartão se estiver no início
  }
  updateClientesCarousel(); // Atualiza o carrossel de clientes
});

// Atualiza a posição inicial do carrossel de clientes
updateClientesCarousel();

// Função para girar o carrossel automaticamente
function autoRotateClientesCarousel() {
  if (clienteCurrentIndex < clientesCards.length - 1) { // Mostra apenas 1 cartão por vez
    clienteCurrentIndex++; // Avança para o próximo cartão
  } else {
    clienteCurrentIndex = 0; // Volta para o primeiro cartão se estiver no final
  }
  updateClientesCarousel(); // Atualiza o carrossel de clientes
}

// Gira o carrossel automaticamente a cada 5 segundos
setInterval(autoRotateClientesCarousel, 5000);


/*INICIO DA PROGRAMAÇÃO DO CARROSSEL DA EQUIPE*/
// Seleciona os elementos do DOM para o carrossel de equipe
const equipeCarouselContainer = document.querySelector('.equipe-carrossel-container');
const equipeCarousel = equipeCarouselContainer.querySelector('.equipe-carrossel');
const equipeCards = equipeCarousel.querySelectorAll('.equipe-card');
const prevButton = document.getElementById('prevBtn2');
const nextButton = document.getElementById('nextBtn2');

let currentCardIndex = 0; // Índice inicial do carrossel de equipe

// Função para atualizar a posição do carrossel de equipe
function updateCarouselPosition() {
  const cardWidth = equipeCards[0].offsetWidth + 40; // Largura do cartão mais a margem direita (40px)
  const offset = -currentCardIndex * cardWidth; // Calcula o deslocamento com base no índice
  equipeCarousel.style.transform = `translateX(${offset}px)`;
}

// Evento do botão 'Próximo' para o carrossel de equipe
nextButton.addEventListener('click', () => {
  if (currentCardIndex < equipeCards.length - 1) { // Mostra apenas 1 cartão por vez
    currentCardIndex++; // Avança para o próximo cartão
  } else {
    currentCardIndex = 0; // Volta para o primeiro cartão se estiver no final
  }
  updateCarouselPosition(); // Atualiza o carrossel de equipe
});

// Evento do botão 'Anterior' para o carrossel de equipe
prevButton.addEventListener('click', () => {
  if (currentCardIndex > 0) {
    currentCardIndex--; // Volta para o cartão anterior
  } else {
    currentCardIndex = equipeCards.length - 1; // Vai para o último cartão se estiver no início
  }
  updateCarouselPosition(); // Atualiza o carrossel de equipe
});

// Função para girar o carrossel da equipe automaticamente
function autoRotateCarousel() {
  if (currentCardIndex < equipeCards.length - 1) { // Mostra apenas 1 cartão por vez
    currentCardIndex++; // Avança para o próximo cartão
  } else {
    currentCardIndex = 0; // Volta para o primeiro cartão se estiver no final
  }
  updateCarouselPosition(); // Atualiza o carrossel de equipe
}

// Gira o carrossel da equipe automaticamente a cada 5 segundos
setInterval(autoRotateCarousel, 5000);

document.getElementById("hamburguer-button").addEventListener("click", function() {
  const menu = document.getElementById("menu"); // Supondo que exista um menu com id 'menu'
  menu.classList.toggle("active"); // Mostra ou esconde o menu ao alternar a classe 'active'
});




function toggleDropdown() {
  document.getElementById("language-switcher").classList.toggle("show");
}

function translatePage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(element => {
      const key = element.getAttribute("data-key");
      element.textContent = translations[lang][key];
  });
  // Fecha o dropdown após a seleção
  document.getElementById("language-switcher").classList.remove("show");
}

// Fechar o dropdown se o usuário clicar fora dele
window.onclick = function(event) {
  if (!event.target.matches('#icone') && !event.target.closest('.dropdown')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}


const translations = {
  pt: {
      home: "Home",
      qmsomos: "Quem Somos",
      clientes: "Clientes",
      vantagens: "Vantagens",
      equipe: "Equipe",
      orcamento: "Orçamento",
      home_title: "Suas Ideias.",
      nossa: "Nossa",
      solucao: "Solução",
      orcamento_gratuito: "Orçamento gratuito",
      veja_mais: "Veja mais",
      titulo2: "Inovação e Confiabilidade em cada Solução.",
      texto2:"A Intybe é um empresa especializada em Desenvolvimento de Sistemas, comprometida em levar tecnologia de ponta ao mundo com qualidade e segurança. Junte-se a nós para transformar suas ideias em soluções eficazes e únicas.",
      texto2_2:"Conheça alguns de nossos valores:",
      qualidade:"Qualidade",
      confiabilidade:"Confiabilidade",
      transparencia:"Transparência",
      inovação:"Inovação",
      tituloClientes:"Principais Clientes",
      sub1:"Joalheria",
      sub2:"Confeitaria",
      sub3:"Floricultura",
      sub4:"Boutique",
      sub5:"Hamburgueria",
      sub6:"Artigos Esportivos",
      sub7:"Eventos de moda",
      t1:"“A Intybe foi super acolhedora com as nossas necessidades. A transparência durante todo o processo de desenvolvimento foi essencial! Com certeza voltaria a fazer negócios!”",
      t2:"“Desde que a Intybe desenvolveu nosso sistema, as vendas da Doucevie aumentaram significativamente. A plataforma é intuitiva e o suporte é excelente. Estamos muito satisfeitos!”",
      t3:"“Foi uma experiência incrível que tivemos com o sistema de e-commerce que implementamos na nossa floricultura. Desde que começamos a usar a plataforma, tudo mudou para melhor!”",
      t4:"“O novo sistema transformou nossa boutique: melhorou o controle de estoque, aumentou as vendas e facilitou o treinamento de novos funcionários.”",
      t5:"“O site nos ajudou a divulgar nosso pequeno negócio, com sua interface intuitiva foi possível melhorar nossa visibilidade. Somos gratos pela Intybe ter feito parte da nossa história.”",
      t6:"“O novo sistema modernizou nossa loja de artigos esportivos. Pedidos e cadastros são gerenciados com facilidade, e o leitor de código de barras agiliza esse processo.”",
      t7:"“A Intybe possibilitou que nossos usuários tivessem acesso as informações de cada evento, otimizando o processo e aumentando o número de comparecimento!”",
      vt1:"Tecnologia de Ponta",
      vt2:"Atendimento Qualificado",
      vt3:"Suporte continuo",
      vt4:"Otimização de Processos",
      vs1:"Soluções modernas e seguras que garantem a flexibilidade do projeto para futuras demanda.",
      vs2:"Atendimento de excelência, validando a opinião do cliente, com comunicação transparente e confiável.",
      vs3:"Manutenção contínua, permitindo o funcionamento correto e a atualização caso for preciso.",
      vs4:"Otimização SCRUM, garantindo a realização de cada etapa com qualidade e eficiência.",
      tE:"Equipe Técnica",
      c1:"Analista de Dados",
      c2:"Analista de Infraestrutura",
      c3:"Desenvolvedor Backend",
      c4:"Desenvolvedor FrontEnd",
      c5:"Desenvolvedor Mobile",
      tO:"Entre em contato!",
      tM:"Meios de Comunicação",
      pM:"Fale conosco e garanta a solução que você precisa.",
      pL:"Avenida Angélica, 525 – Bela Vista, São Paulo",
      pR:"SIGA-NOS:",
      l1:"Nome",
      l2:"Endereço de Email",
      l3:"Assunto",
      l4:"Descreva o que você deseja:",
      enviar:"Enviar",
      tF:"ONDE NOS ENCONTRAR",
      tL:"Avenida Angélica, 525 – Bela Vista, São Paulo – SP, 01227-000",
      copy:"2024 Intybe - Desenvolvedores de Software | Termos de Uso | Políticas de Privacidade",

      // Adicionar mais textos conforme necessário
  },
  en: {
      home: "Home",
      qmsomos: "About Us",
      clientes: "Clients",
      vantagens: "Advantages",
      equipe: "Team",
      orcamento: "Budget",
      home_title: "Your Ideas.",
      nossa: "Our",
      solucao: "Solution",
      orcamento_gratuito: "Free budget",
      veja_mais: "See more",
      titulo2: "Innovation and Reliability in each Solution.",
      texto2:"Intybe is a company specialized in Systems Development, committed to bringing cutting-edge technology to the world with quality and security.Join us to turn your ideas into solutions effective and unique.",
      texto2_2:"Discover some of our values:",
      qualidade:"Quality",
      confiabilidade:"Reliability",
      transparencia:"Transparency",
      inovação:"Innovation",
      tituloClientes:"Main Clients",
      sub1:"Jewelry",
      sub2:"Confectionery",
      sub3:"Florist",
      sub4:"Boutique",
      sub5:"Burger place",
      sub6:"Sporting goods store",
      sub7:"Fashion events",
      t1:"“Intybe was super welcoming to our needs. Transparency throughout the development process was essential! I would definitely do business again!”",
      t2:"“Since Intybe developed our system, Doucevie sales have increased significantly. The platform is intuitive and the support is excellent. We are very pleased!”",
      t3:"“It was an incredible experience we had with the e-commerce system we implemented in our flower shop. Since we started using the platform, everything has changed for the better!”",
      t4:"The new system transformed our boutique: it improved inventory control, increased sales and facilitated the training of new employees.”",
      t5:"“The website helped us promote our small business, with its intuitive interface it was possible to improve our visibility. We are grateful that Intybe was part of our history.”",
      t6:"“The new system modernized our sporting goods store. Orders and registrations are easily managed, and the barcode reader speeds up this process.”",
      t7:"“Intybe enabled our users to access information about each event, optimizing the process and increasing attendance numbers!”",
      vt1:"Cutting edge Technology",
      vt2:"Qualified Service",
      vt3:"Continuous support",
      vt4:"Process Optimization",
      vs1:"Modern and safe solutions that guarantee project flexibility for future demands.",
      vs2:"Excellent service, validating the customer's opinion, with transparent and reliable communication.",
      vs3:"Continuous maintenance, allowing correct operation and updating if necessary.",
      vs4:"SCRUM optimization, ensuring each step is carried out with quality and efficiency.",
      tE:"Technical Team",
      c1:"Data Analyst",
      c2:"Infrastructure Analyst",
      c3:"Backend Developer",
      c4:"FrontEnd Developer",
      c5:"Mobile Developer",
      tO:"Contact us!",
      tM:"Media",
      pM:"Talk to us and guarantee the solution you need.",
      pL:"Avenue Angélica, 525 – Bela Vista, São Paulo",
      pR:"FOLLOW US:",
      l1:"Name",
      l2:"Email address",
      l3:"Subject ",
      l4:"Describe what you want:",
      enviar:"Submit",
      tF:"WHERE FIND US",
      tL:"Avenue Angélica, 525 – Bela Vista, São Paulo – SP, 01227-000",
      copy:"2024 Intybe - Software Developers | Terms of Use | Privacy Policies",

      // Adicionar mais textos conforme necessário
  }
};

function translatePage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(element => {
      const key = element.getAttribute("data-key");
      const newText = translations[lang][key];

      // Verifica se o texto é diferente antes de alterar
      if (element.textContent !== newText) {
          element.textContent = newText;
      }
  });
}

// quando o usuário rolar 30px dps do topo, o botão aparece
window.onscroll = function() {
  mostrarBotao();
};

function mostrarBotao() {
  var botao = document.getElementById("topoBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 30) {
      botao.style.display = "block";
  } else {
      botao.style.display = "none";
  }
}

// quando o usuário clicar no botão, volta ao topo
function voltarAoTopo() {
  document.documentElement.scrollTop = 0; 
}
