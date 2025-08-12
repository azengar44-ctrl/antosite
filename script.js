/*
  Script pour le comparateur de pièces 50 cc. Les données sont
  actuellement statiques et servent uniquement d'exemple. Pour une
  utilisation réelle, il conviendrait de remplacer le tableau items
  par des données récupérées via des API externes ou une base de
  données.
*/

// Jeu de données fictif pour la démonstration
const items = [
  {
    name: 'Bougie NGK B9ES',
    description: 'Bougie d’allumage compatible avec de nombreux moteurs 50 cc.',
    price: 7.99,
    site: 'Marchand A',
    url: '#'
  },
  {
    name: 'Kit chaîne 428',
    description: 'Chaîne + pignon 13 dents + couronne 53 dents pour 50 cc.',
    price: 29.50,
    site: 'Marchand B',
    url: '#'
  },
  {
    name: 'Cylindre 50 cc alu',
    description: 'Cylindre en aluminium haute performance 50 cc.',
    price: 109.00,
    site: 'Marchand C',
    url: '#'
  },
  {
    name: 'Variateur Malossi',
    description: 'Variateur Malossi multivar pour scooter 50 cc.',
    price: 79.90,
    site: 'Marchand D',
    url: '#'
  },
  {
    name: 'Filtre à air mousse',
    description: 'Filtre à air en mousse adaptable pour mobylette 50 cc.',
    price: 12.45,
    site: 'Marchand A',
    url: '#'
  }
];

// Lors de la soumission du formulaire, on intercepte l’événement pour
// filtrer et afficher les résultats au lieu de recharger la page.
document.getElementById('search-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const query = document.getElementById('search-input').value.trim().toLowerCase();
  const container = document.getElementById('results-container');

  // Filtrage des items selon le nom ou la description
  const results = items.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  );

  // Tri des résultats par prix croissant afin de mettre en avant le meilleur prix
  results.sort((a, b) => a.price - b.price);

  // Construction de la table de résultats ou message si aucune donnée
  if (results.length === 0) {
    container.innerHTML = '<p>Aucun résultat trouvé.</p>';
    return;
  }

  let html = '<table class="results-table">';
  html += '<thead><tr><th>Pièce</th><th>Description</th><th>Prix (€)</th><th>Marchand</th></tr></thead><tbody>';
  results.forEach(item => {
    html += `<tr>` +
            `<td>${item.name}</td>` +
            `<td>${item.description}</td>` +
            `<td>${item.price.toFixed(2)}</td>` +
            `<td><a href="${item.url}" target="_blank">${item.site}</a></td>` +
            `</tr>`;
  });
  html += '</tbody></table>';
  container.innerHTML = html;
});