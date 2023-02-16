<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://vuetest.codeals.es/static/template/material/assets/img/favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Vue Test</h3>

  <p align="center">
    Proyecto de prueba de Vue con Laravel!
    <br />
    <a href="https://github.com/alejo90103/vue-test"><strong>Ver documentación »</strong></a>
    <br />
    <br />
    <a href="https://vuetest.codeals.es/">Ver Demo</a>
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## Sobre el proyecto

[![Product Name Screen Shot][product-screenshot]](https://vuetest.codeals.es/)

### Built With

Principales frameworks utilizados para la realización de este ejercicio:

* [![Vue][Vue.js]][Vue-url]
* [![Laravel][Laravel.com]][Laravel-url]

### Descripción del Ejercicio

_Usaremos para el ejercicio la web que nos permite utilizar una fake API REST: ```https://jsonplaceholder.typicode.com```._

Crear una aplicación en Laravel, que nos permita calcular una valoración para cada post obtenido desde la API, 
así como para cada usuario perteneciente a cada post. La API nos devolverá un máximo de 100 posts distribuidos para 10 usuarios.

Para calcular dicho valor tenemos que contar el número de veces que una palabra aparece en el título o en la descripción de todo 
el conjunto de los posts. Solo en el caso de que la palabra que buscamos existe en el título, entonces, esta palabra es más importante 
y contará doble, no será así si la palabra se encuentra en la descripción. Por tanto, para calcular la valoración de un post contaremos 
todas las ocurrencias de cada palabra en todos los posts y para calcular la valoración del usuario sumaremos las valoraciones de todos sus posts.

El resultado del ejercicio será 1 fichero csv ordenado por valoración de usuario y por valoración de post de forma descendente. 
El fichero tendrá los siguientes campos:

* ID Usuario
* Nombre usuario
* Valoración de usuario
* ID Post
* Valoración de post

### Ejemplo
```
[ 
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut
    quas totam\nnostrum rerum est autem sunt rem eveniet architecto" 
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat
    blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }, 
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel
    accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut" 
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum
    culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit" 
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis
    possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  }
]
```

### Ejemplo de valoración de palabras
_Teniendo en cuenta los 5 posts anteriores:_
* 'sunt' tiene una valoración de 5
* 'aut' tiene una valoración de 8

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
