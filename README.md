# Enset App

Application web Angular pour afficher et gerer une liste de produits.

Le projet utilise Angular 21, Bootstrap 5 et Bootstrap Icons. L'ecran `Products`
recupere les donnees depuis une API REST locale exposee sur
`http://localhost:8883/products`.

## Fonctionnalites

- Navigation entre les pages `Home` et `Products`.
- Affichage des produits dans un tableau.
- Affichage de l'etat `selected` avec des icones Bootstrap.
- Suppression d'un produit apres confirmation utilisateur.
- Communication HTTP avec un backend REST.

## Technologies

- Angular `21.2.x`
- TypeScript `5.9.x`
- RxJS `7.8.x`
- Bootstrap `5.3.x`
- Bootstrap Icons `1.13.x`
- Vitest pour les tests unitaires

## Prerequis

- Node.js installe
- npm installe
- Angular CLI, via `npx ng` ou installation globale
- Backend produits lance sur le port `8883`

## Installation

Installer les dependances :

```bash
npm install
```

## Lancement en developpement

Demarrer l'application Angular :

```bash
npm start
```

Puis ouvrir :

```text
http://localhost:4200/
```

## Backend attendu

Le service Angular appelle les endpoints suivants :

```text
GET    http://localhost:8883/products
DELETE http://localhost:8883/products/{id}
```

Un produit attendu par l'interface contient au minimum :

```json
{
  "id": 1,
  "name": "Computer",
  "price": 12000,
  "selected": true
}
```

## Scripts disponibles

```bash
npm start
```

Lance le serveur de developpement Angular.

```bash
npm run build
```

Compile l'application dans le dossier `dist/`.

```bash
npm run watch
```

Compile en mode developpement et surveille les changements.

```bash
npm test
```

Lance les tests unitaires.

## Structure du projet

```text
src/
  app/
    home/              Page d'accueil
    products/          Page de liste des produits
    services/
      product.ts       Service HTTP des produits
    app.routes.ts      Configuration des routes Angular
    app.config.ts      Providers Angular, router et HttpClient
  styles.css           Styles globaux et imports Bootstrap
```

## Routes

| Route | Composant | Description |
| --- | --- | --- |
| `/home` | `Home` | Page d'accueil |
| `/products` | `Products` | Liste et suppression des produits |

## Notes

- L'application utilise des composants Angular standalone.
- Les styles Bootstrap sont importes dans `src/styles.css`.
- Si la page produits reste vide ou affiche une erreur, verifier que le backend
  est bien lance sur `http://localhost:8883`.
