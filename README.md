# Kasa - Site de location immobilière 
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Sass](https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white&style=for-the-badge)

C'est une application qui permet aux utilisateurs de consulter des logements et leurs détails. Je développe la partie front-end avec React.js et Sass.

[Voir le site déployé avec GitHub Actions](https://der411.github.io/Projet-5_React/)

# Aperçu 🎨

![Aperçu](https://live.staticflickr.com/65535/53991302251_60d71b31f8_n.jpg)
![Aperçu](https://live.staticflickr.com/65535/53991532253_4b710cec67_n.jpg)
![Aperçu](https://live.staticflickr.com/65535/53991302241_c200bf855a_n.jpg)
![Aperçu](https://live.staticflickr.com/65535/53990407302_47712373ef_n.jpg)
![Aperçu](https://live.staticflickr.com/65535/53991727705_dfeb759d7b_n.jpg)
![Aperçu](https://live.staticflickr.com/65535/53990407052_543ecec2d2_n.jpg)

# Installation
1. Clonez le dépôt
```sh
git clone git@github.com:der411/Projet-5_React.git
```

3. Installez les dépendances
   ```sh
   npm install
   ```

5. Démarrez l'application 🚀
   ```sh
   npm start
   ```

# Outils
 - **Props :**
   - Transmission des données d'un composant parent à enfant, rendant le composant plus lisible et réutilisable.
   
 - **Le Hook useState de React :**
   - Gestion des interactions utilisateurs avec l'UI, permettant un re_rendu de la page sans rechargement complet de celle-ci. Améliore l'expérience utilisateur.

- **Le Hook useParams de React Router :**
  - Extraction du paramètre dynamique id de l'URL, pour savoir de quel logement il s'agit.
    
- **Le Hook useEffect de React :**
  - Récupération des données d'un logement spécifique à afficher en fonction de l'ID présent dans l'URL.
 
- **Le Hook useLocation de React Router :**
  - Utilisé pour lire l'URL actuelle et réagir aux changements de chemin dans l'application. Par exemple, pour l'affichage conditionnel de la bannière en fonction de la route active.

# Contraintes techniques et fonctionnelles

- **Eléments dépliables (Collapse) :**
  - Utilisation du Hook useState pour gérer l'état isOpen qui determine si le contenu est affiché ou masqué.
  - Une fonction toggleCollapse pour inverser les valeurs de isOpen lors du clique sur le chevron, permettant de le déplier ou replier.
  - Une condition d'affichage du contenu si isOpen prend comme valeur true. Sinon le contenu est caché.
  - Affichage d'une icone de chevron qui change de direction (up/down) en fonction de l'état.

- **Caroussel d'images (SlideShow) :**
  - Utilisation du Hook useState pour gérer l'état currentIndex, qui représente l'index de l'image actuellement affichée dans le diaporama.
  - Deux fonctions, nextSlide et prevSlide permettent de passer aux images suivantes ou précédentes avec un comportement de boucle grace au modulo.
  - Affichage des boutons de navigation seulement si la galerie contient plus d'une image. Et un indicateur de position pour indiquer l'image actuellement affichée par rapport au nombre total d'image (par exemple, '1/5')
  - Affichage de l'image à l'index currentIndex de la liste pictures. L'image change en fonction de la navigation de l'utilisateur.
