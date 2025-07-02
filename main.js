// Dados do modelo PMML - Centros dos clusters normalizados
const clusters = {
  cluster_0: [
    0.0, 0.9192094423320628, 0.5393536121673004, 0.28661865929847274, 0.0, 0.0,
    0.2718631178707224, 0.0, 0.21673003802281368, 0.13193916349809887,
  ],
  cluster_1: [
    0.0, 0.9232485391260148, 0.5806974085365854, 0.35196626735158076, 1.0, 0.0,
    0.5651676829268293, 0.30640243902439024, 0.11280487804878049,
    0.15167682926829268,
  ],
  cluster_2: [
    0.38461538461538464, 0.9191966405508057, 0.4780982905982906,
    0.1886594113282215, 0.0, 0.14245014245014245, 0.20797720797720798, 1.0,
    0.0014245014245014246, 0.09757834757834757,
  ],
  cluster_3: [
    1.0, 0.9547292545710293, 0.5174636661978435, 0.002092368733257669, 0.0,
    0.5391467416783873, 0.326769807782466, 0.01875293014533521, 0.0,
    0.06704172526957337,
  ],
};

// Estatísticas para normalização baseadas no PMML (dados já normalizados entre 0 e 1)
const normalizationStats = {
  type: { min: 0, max: 1 },
  release_year: { min: 1925, max: 2021 },
  rating: { min: 0, max: 5 },
  duration: { min: 1, max: 312 },
};

// Descrições dos clusters baseadas na análise dos centros
const clusterDescriptions = {
  cluster_0: {
    name: "Séries Internacionais com Dramas",
    description:
      "Cluster focado em séries com elementos dramáticos e documentários",
    characteristics:
      "Filmes (0%), Séries Internacionais baixas (0%), Dramas (27.2%), Documentários (21.7%)",
    size: 2630,
  },
  cluster_1: {
    name: "Filmes Internacionais Diversos",
    description: "Cluster de filmes internacionais com variedade de gêneros",
    characteristics:
      "Filmes (0%), Filmes Internacionais (100%), Dramas (56.5%), Comédias (30.6%)",
    size: 2624,
  },
  cluster_2: {
    name: "Séries Especializadas em Comédia",
    description: "Cluster dominado por séries de comédia",
    characteristics:
      "Séries (38.5%), Séries Internacionais (14.2%), Comédias (100%)",
    size: 1404,
  },
  cluster_3: {
    name: "Séries Internacionais Premium",
    description: "Cluster de séries internacionais com alto valor de produção",
    characteristics:
      "Séries (100%), Séries Internacionais (53.9%), Dramas (32.7%)",
    size: 2133,
  },
};

// Recomendações por cluster
const recommendations = {
  cluster_0: [
    {
      title: "Our Planet",
      type: "TV Show",
      year: 2019,
      rating: "TV-G",
      duration: "1 Season",
      description: "Série documental sobre natureza e vida selvagem",
    },
    {
      title: "Tiger King",
      type: "TV Show",
      year: 2020,
      rating: "TV-MA",
      duration: "1 Season",
      description: "Documentário sobre criadores de tigres nos EUA",
    },
    {
      title: "Mindhunter",
      type: "TV Show",
      year: 2017,
      rating: "TV-MA",
      duration: "2 Seasons",
      description: "Drama policial psicológico sobre serial killers",
    },
    {
      title: "Making a Murderer",
      type: "TV Show",
      year: 2015,
      rating: "TV-MA",
      duration: "2 Seasons",
      description: "Documentário sobre caso criminal controverso",
    },
  ],
  cluster_1: [
    {
      title: "Roma",
      type: "Movie",
      year: 2018,
      rating: "R",
      duration: "135 min",
      description: "Drama mexicano em preto e branco aclamado pela crítica",
    },
    {
      title: "The Platform",
      type: "Movie",
      year: 2019,
      rating: "TV-MA",
      duration: "94 min",
      description: "Thriller espanhol de ficção científica distópica",
    },
    {
      title: "Okja",
      type: "Movie",
      year: 2017,
      rating: "TV-14",
      duration: "120 min",
      description: "Drama coreano sobre amizade entre garota e animal",
    },
    {
      title: "I Am Mother",
      type: "Movie",
      year: 2019,
      rating: "TV-14",
      duration: "113 min",
      description: "Ficção científica sobre IA e sobrevivência humana",
    },
  ],
  cluster_2: [
    {
      title: "The Good Place",
      type: "TV Show",
      year: 2016,
      rating: "TV-14",
      duration: "4 Seasons",
      description: "Comédia filosófica sobre ética e vida após a morte",
    },
    {
      title: "Schitt's Creek",
      type: "TV Show",
      year: 2015,
      rating: "TV-14",
      duration: "6 Seasons",
      description: "Comédia sobre família rica que perde tudo",
    },
    {
      title: "Brooklyn Nine-Nine",
      type: "TV Show",
      year: 2013,
      rating: "TV-14",
      duration: "8 Seasons",
      description: "Comédia policial em Nova York",
    },
    {
      title: "Orange Is the New Black",
      type: "TV Show",
      year: 2013,
      rating: "TV-MA",
      duration: "7 Seasons",
      description: "Comédia dramática sobre prisão feminina",
    },
  ],
  cluster_3: [
    {
      title: "The Crown",
      type: "TV Show",
      year: 2016,
      rating: "TV-MA",
      duration: "6 Seasons",
      description: "Drama histórico sobre a família real britânica",
    },
    {
      title: "Dark",
      type: "TV Show",
      year: 2017,
      rating: "TV-MA",
      duration: "3 Seasons",
      description: "Thriller alemão de ficção científica e viagem no tempo",
    },
    {
      title: "Money Heist (La Casa de Papel)",
      type: "TV Show",
      year: 2017,
      rating: "TV-MA",
      duration: "5 Seasons",
      description: "Thriller espanhol sobre assalto à Casa da Moeda",
    },
    {
      title: "Lupin",
      type: "TV Show",
      year: 2021,
      rating: "TV-MA",
      duration: "3 Seasons",
      description: "Thriller francês sobre ladrão gentleman moderno",
    },
  ],
};

// Função para normalizar valores
function normalize(value, field) {
  const stats = normalizationStats[field];
  if (!stats) return value;
  return (value - stats.min) / (stats.max - stats.min);
}

// Função para calcular distância euclidiana
function euclideanDistance(point1, point2) {
  return Math.sqrt(
    point1.reduce((sum, val, i) => sum + Math.pow(val - point2[i], 2), 0)
  );
}

// Função para encontrar cluster mais próximo
function findClosestCluster(inputVector) {
  let minDistance = Infinity;
  let closestCluster = null;
  let distances = {};

  for (const [clusterName, clusterCenter] of Object.entries(clusters)) {
    const distance = euclideanDistance(inputVector, clusterCenter);

    distances[clusterName] = distance;

    if (distance < minDistance) {
      minDistance = distance;
      closestCluster = clusterName;
    }
  }

  return {
    cluster: closestCluster,
    distance: minDistance,
    allDistances: distances,
  };
}

// Função para processar o formulário
document
  .getElementById("recommendationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Coletar dados do formulário
    const formData = new FormData(this);

    // Converter valores para números e normalizar
    const type = parseInt(formData.get("type"));
    const releaseYear = parseInt(formData.get("release_year"));
    const rating = parseInt(formData.get("rating"));
    const duration = parseInt(formData.get("duration"));

    // Construir vetor de características normalizadas
    const inputVector = [
      normalize(type, "type"),
      normalize(releaseYear, "release_year"),
      normalize(rating, "rating"),
      normalize(duration, "duration"),
      formData.getAll("genres").includes("international_movies") ? 1 : 0,
      formData.getAll("genres").includes("international_tv") ? 1 : 0,
      formData.getAll("genres").includes("dramas") ? 1 : 0,
      formData.getAll("genres").includes("comedies") ? 1 : 0,
      formData.getAll("genres").includes("documentaries") ? 1 : 0,
      formData.getAll("genres").includes("action_adventure") ? 1 : 0,
    ];

    // Encontrar cluster mais próximo
    const result = findClosestCluster(inputVector);

    // Exibir resultados
    displayResults(
      formData.get("title") || "Conteúdo inserido",
      result,
      inputVector,
      {
        type: type === 0 ? "Filme" : "Série",
        release_year: releaseYear,
        rating: getRatingName(rating),
        duration: duration,
      }
    );
  });

function getRatingName(ratingValue) {
  const ratingNames = {
    0: "G / TV-Y (Livre)",
    1: "PG / TV-G / TV-Y7 / PG-13 (10+)",
    2: "TV-14 (14+)",
    3: "R / TV-MA / NC-17 (18+)",
    4: "NR / UR (Não Classificado)",
    5: "Outros",
  };
  return ratingNames[ratingValue] || "Desconhecida";
}

function displayResults(title, result, inputVector, rawData) {
  const resultsContainer = document.getElementById("results");
  const clusterInfo = document.getElementById("clusterInfo");
  const recommendationsDiv = document.getElementById("recommendations");

  const clusterData = clusterDescriptions[result.cluster];
  const featureNames = [
    "Tipo",
    "Ano",
    "Classificação",
    "Duração",
    "Filmes Int'l",
    "Séries Int'l",
    "Dramas",
    "Comédias",
    "Documentários",
    "Ação & Aventura",
  ];

  clusterInfo.innerHTML = `
                <h3>📊 Análise de Similaridade para "${title}"</h3>
                <p><strong>Cluster identificado:</strong> ${
                  clusterData.name
                }</p>
                <p><strong>Descrição:</strong> ${clusterData.description}</p>
                <p><strong>Características:</strong> ${
                  clusterData.characteristics
                }</p>
                <p><strong>Tamanho do cluster:</strong> ${
                  clusterData.size
                } itens</p>
                <div class="distance-info">
                    <strong>Distância Euclidiana:</strong> ${result.distance.toFixed(
                      4
                    )}
                    <br><strong>Método:</strong> K-means com distância euclidiana quadrática
                </div>
                <div class="input-analysis">
                    <h4>Valores de Entrada (Normalizados):</h4>
                    <div class="feature-values">
                        ${inputVector
                          .map(
                            (val, i) => `
                            <div class="feature-value">
                                <span>${featureNames[i]}:</span>
                                <span>${val.toFixed(4)}</span>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            `;

  const clusterRecommendations = recommendations[result.cluster];
  recommendationsDiv.innerHTML = clusterRecommendations
    .map(
      (rec) => `
                <div class="recommendation-card">
                    <h4>${rec.title}</h4>
                    <div class="card-info">
                        <p><strong>Tipo:</strong> ${rec.type}</p>
                        <p><strong>Ano:</strong> ${rec.year}</p>
                        <p><strong>Classificação:</strong> ${rec.rating}</p>
                        <p><strong>Duração:</strong> ${rec.duration}</p>
                        <p>${rec.description}</p>
                    </div>
                </div>
            `
    )
    .join("");

  resultsContainer.style.display = "block";
  resultsContainer.scrollIntoView({ behavior: "smooth" });
}

// Checkbox handling para gêneros
document.querySelectorAll(".genre-checkbox").forEach((checkbox) => {
  checkbox.addEventListener("click", function (e) {
    if (e.target.type !== "checkbox") {
      const input = this.querySelector('input[type="checkbox"]');
      input.checked = !input.checked;
    }
  });
});
