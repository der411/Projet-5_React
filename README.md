# Kasa, agence immobilière ![React](https://img.shields.io/badge/-React-blue) ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow) ![Sass](https://img.shields.io/badge/-Sass-cc6699?logo=sass&logoColor=white)


Kasa est une application web permettant aux utilisateurs de trouver des logements. Ce projet est une refonte complète de l'ancienne version, passant d'une stack ASP.NET à une stack JavaScript moderne avec React pour le front-end et NodeJS pour le back-end.

## Aperçu :art:
![Aperçu de la page](https://live.staticflickr.com/65535/53899913279_7fef1effbf_n.jpg)

## Installation :rocket:

1. **Clonez le dépôt :**
   ```bash
   git clone git@github.com:der411/Projet-5_React.git

2. **Installez les dépendances :**
   ```npm install```
   
3. **Démarrez l'application :**
   ```npm start```

## Fonctionnalités
 - Recherche de logements : Navigation et visualisation des annonces de logements.
 - Galerie d'images : Défilement des images avec des fonctionnalités de navigation intuitive (retour à la première image depuis la dernière et vice versa).
 - Composants collapsibles : Les sections collapsibles (Collapse) peuvent être ouvertes et fermées par l'utilisateur.
 - Responsive Design : Interface adaptative pour différents appareils (desktop, tablette, mobile).

## Technologies Utilisées
- **React :** Pour le développement des composants de l'interface utilisateur.
- **React Router :** Pour la gestion des routes et de la navigation.
- **CSS :** Pour la stylisation de l'interface utilisateur.
- **Sass :** Pour l'écriture de styles CSS modulaires et maintenables.
- **Create React App :** Pour le développement de l'application.

## Contraintes Techniques et Fonctionnelles
- **Galerie d'images :**
  - Navigation cyclique des images (de la première à la dernière et vice versa).
  - Boutons "Suivant" et "Précédent" et numérotation sont masqués si une seule image est présente.
  - Hauteur fixe de la galerie, les images sont centrées et coupées si nécessaire.

- **Collapse :**
  - Initialement fermés à l'ouverture de la page.
  - Les sections s'ouvrent et se ferment au clic de l'utilisateur.
