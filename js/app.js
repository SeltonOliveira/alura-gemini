function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById('resultado-pesquisa');

  let campoPesquisa = document.getElementById('campo-pesquisa').value

  if (!campoPesquisa) {
    section.innerHTML = '<span style="color: white; font-size: 24px; font-weight: bold;">Digite o Nome ou o ID do Pokemon</span>';
    return;
}

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let id = "";
  let nome = "";
  let tipo = "";
  

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
      nome = dado.nome.toLowerCase()
      tipo = dado.tipo.toLowerCase()
      id = dado.id.toLowerCase()

    if (nome.includes(campoPesquisa) || tipo.includes(campoPesquisa) || id.includes(campoPesquisa)) {
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


  }

  if (!resultados) {
    resultados = "<p style='font-size: 20px; color: white; font-weight: bold;'>Nada foi encontrado</p>"
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}