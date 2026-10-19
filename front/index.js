// Adresse du back : à changer au moment du déploiement sur Vercel
const API_URL = "http://localhost:5000";

// Récupère les clients dans le back et les affiche dans la page
async function afficherClients() {
  // 1. Demande la liste des clients au back (route GET /api/clients)
  const reponse = await fetch(API_URL + "/api/clients");

  // 2. Transforme la réponse JSON en tableau JavaScript
  const clients = await reponse.json();

  // 3. Vide la liste pour ne pas afficher les clients en double
  const liste = document.getElementById("liste");
  liste.innerHTML = "";

  // 4. Crée un <li> pour chaque client et l'ajoute à la liste
  clients.forEach((client) => {
    const li = document.createElement("li");
    li.textContent = client.nom + " - " + client.email + " - " + client.telephone;
    liste.appendChild(li);
  });
}

// Envoie un nouveau client au back, puis rafraîchit la liste
async function ajouterClient() {
  // 1. Lit ce que l'utilisateur a tapé dans les trois champs
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const telephone = document.getElementById("telephone").value;

  // 2. Envoie les données au back (route POST /api/clients)
  await fetch(API_URL + "/api/clients", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nom, email, telephone }),
  });

  // 3. Vide les champs, puis recharge la liste
  document.getElementById("nom").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telephone").value = "";
  afficherClients();
}

// Au clic sur le bouton "Ajouter", on lance ajouterClient
document.getElementById("ajouter").addEventListener("click", ajouterClient);

// Au chargement de la page, on affiche les clients déjà enregistrés
afficherClients();