function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById('resultado-pesquisa');
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      // Cria um novo elemento div para cada resultado
      resultados += `
        <div class="item-resultado">
          <img src="${dado.imagem}" alt="Foto Bulbasaur" width="200">
          <div class="itens-result">
            <h2>
              <a href="#" target="_blank">${dado.nome}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="descricao-meta"><strong>Tipo:</strong> ${dado.tipo}</p>
            <p class="descricao-meta"><strong>Fraquezas:</strong> ${dado.fraqueza}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        </div>
      `;
    }
  
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
  }