# DropNShop

## Installation

Have Node.js >=18 installed

1. Set up the DB manager. Learn more [here](./db_manager/README.md)
2. Set up the backend. Learn more [here](./backend/README.md)
3. Set up the frontend. Learn more [here](./frontend/README.md)

## Cahier des charges

- Créer un compte (email/mdp, Google)
- Se connecter
- Compte vendeur: Créer/modifier/supprimer une annonce
- Compte classique: lister les annonces, voir une annonce
- Panier (fonctionne en étant connecté et en étant déconnecté) : pouvoir ajouter des objets, voir son panier, le modifier, le commander d'un coup (choisir la quantité de chaque article)
- Pouvoir commander un article sans passer par le panier (système de quantité)
- Chat entre acheteur et vendeur

- Bonus: Compte vendeur: panel de gestion (liste des commandes, total gagné…)
- Bonus: Compte vendeur: définir des promotions sur un produit
- Bonus: Avis (étoiles et commentaires)

Frontend <--REST--> Backend
Backend <--gRPC--> Database manager

Authentification en JWT, via username/password ou Google OAuth2
