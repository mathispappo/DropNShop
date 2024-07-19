# DropNShop

M1 DE 2

Elliot Maisl\
Mathis Pappo\
Martin Vialle\

## Installation

Have Node.js >=18 installed

1. Set up the DB manager. Learn more [here](./db_manager/README.md)
2. Set up the backend. Learn more [here](./backend/README.md)
3. Set up the frontend. Learn more [here](./frontend/README.md)

## Cahier des charges

- Créer un compte (email/mdp, Google)
- Se connecter
- Lister les annonces, voir une annonce
- Panier : pouvoir ajouter des objets, voir son panier, le modifier, le commander d'un coup (choisir la quantité de chaque article)
- Pouvoir commander un article
- Pouvoir commander son panier

Frontend <--REST--> Backend
Backend <--gRPC--> Database manager

Authentification en JWT, via username/password ou Google OAuth2
