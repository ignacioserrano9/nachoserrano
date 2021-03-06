'use strict';

var app = angular.module('app', ['ngSanitize']);

app.controller('MainController', ['$scope', '$window', function($scope, $window) {
  var en = {
    'brand': 'Nacho Serrano',
    'home': 'Home',
    'about': 'About',
    'portfolio': 'Portfolio',
    'contact': 'Contact',
    'title': 'A Fullstack Developer',
    'desc': 'The mind that opens to a new idea never returns to its original size',
    'aboutMe': 'Ignacio Serrano (AKA Nacho)',
    'resume': '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I\'m an ex-chef turned web developer and programmer, also a Spanish currently residing in Prague. After realizing that my field of work was not what i expected i turn in to my other pasion, programing. I\'m now back on track as a temporary freelance developer. My passion is to use technology-based solutions to help solve real-world challenges as breakthroughs, albeit within simplicity.\n\nCompetencies:\n\t Languages & Frameworks: JavaScript, HTML5, CSS3, Sass, Bootstrap, AngularJS, React.JS, Node.js, Express.js, MongoDB (among others).\n\t Tools & Expertise: Git, Heroku, Responsive Web Design, Web App, Hybrid App, PhoneGap, Agile, Bower, Npm, Cloud9, Travis CI, AJAX, Apiary, Postman, Linux, UNIX, Test Automation, Regex, Google Analytics, Startup\n\t Learning & Practising: Typescript, C++, Unreal Engine (just for fun)',
    'works': 'Recent Works',
    'contactMe': 'Contact Me',
    'name': 'Ignacio Serrano',
    'licensePre': 'Code licensed under the ',
    'licensePost': ' License.'
  };
  var zh = {
    'brand': 'Nacho Serrano',
    'home': 'Home',
    'about': 'Acerca de',
    'portfolio': 'Portfolio',
    'contact': 'Contacto',
    'title': 'Desarrollador web full stack',
    'desc': 'La mente que se abre a una nueva idea nunca vuelve a su tamano original',
    'aboutMe': 'Nacho Serrano',
    'resume': '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Soy un ex-chef convertido a desarrollador web y programador, Español residente en Praga. Después de darme cuenta de que mi area profesional no era lo que yo esperaba me volqué en mí otra pasión, la programación. Mi pasión es convertir tecnologías en soluciones para ayudar a solventar problemas, implementando la sencillez y el buen gusto.\n\nCompetencias：\n\t Lenguajes y Frameworks: JavaScript, HTML5, CSS3, Sass, Bootstrap, AngularJS, React.JS, Node.js, Express.js, MongoDB (among others).\n\t Herraminetas y Otras areas: Git, Heroku, Responsive Web Design, Web App, Hybrid App, PhoneGap, Agile, Bower, Npm, Cloud9, Travis CI, AJAX, Apiary, Postman, Linux, UNIX, Test Automation, Regex, Google Analytics, Startup\n\t Practicanfo y aprendiendo: Typescript, C++, Unreal Engine (en mi tiempo libre)',
    'works': 'Trabajos Recientes',
    'contactMe': 'Contacto',
    'name': 'Ignacio Serrano',
    'licensePre': 'Code licensed under the ',
    'licensePost': ' License'
  };
  $scope.portfolios = [{
    'src': 'https://github.com/ignacioserrano9/nachoserrano/blob/master/assets/img/Screenshot%20from%202020-12-02%2012-34-46.png?raw=true',
    'href': 'http://geomapping-1.herokuapp.com/',
    'desc': 'Geomapping'
  }, {
    'src': 'https://media-exp1.licdn.com/dms/image/C4E12AQH4fWqg4di8Kg/article-cover_image-shrink_720_1280/0/1594489407617?e=1612396800&v=beta&t=EQpfrbwHqWuitqqfB3mWznNiVAJ-woVYuE4ryBYxlQI',
    'href': 'https://rhtyhm-grooves.herokuapp.com/',
    'desc': 'Rhythm & Grooves'
  }, {
    'src': 'https://github.com/ignacioserrano9/nachoserrano/blob/master/assets/img/0.jpeg?raw=true',
    'href': 'https://ignacioserrano9.github.io/lovelyPanda/',
    'desc': 'Lovely Panda'
  }, {
    'src': 'https://chuah48263.github.io/assets/img/0j4Flsf.jpg',
    'href': 'http://fcc-zipline-show-the-local-weather.bitballoon.com',
    'desc': 'Local Weather App'
  }, {
    'src': 'https://chuah48263.github.io/assets/img/D3Ee2j0.jpg',
    'href': 'http://fcc-zipline-build-a-tic-tac-toe-game.bitballoon.com',
    'desc': 'Tic Tac Toe'
  }, {
    'src': 'https://chuah48263.github.io/assets/img/hZJr81o.jpg',
    'href': 'http://fcc-zipline-build-a-pomodoro-clock.bitballoon.com',
    'desc': 'Pomodoro Clock'
  }];
  var href = {
    'twitter': 'https://twitter.com/ignserr',
    'github': 'https://github.com/ignacioserrano9',
    'linkedin': 'https://www.linkedin.com/in/ignacio-serrano-fdz/',
    'facebook': 'https://www.facebook.com/ignacio.serranofernandezcanadas',
    'freecodecamp': 'https://www.freecodecamp.org/nachoserrano',
    'mit': 'https://opensource.org/licenses/MIT'
  };
  $scope.href = function(src) {
    $window.open(href[src], '_blank');
  };
  $scope.lang = function(str) {
    localStorage.visited = true;
    if (str === 'en') {
      localStorage.lang = 'en';
      $scope.isEn = true;
      $scope.isZh = false;
      for (var i in en) {
        $scope[i] = en[i];
      }
    } else if (str === 'zh') {
      localStorage.lang = 'zh';
      $scope.isZh = true;
      $scope.isEn = false;
      for (var j in zh) {
        $scope[j] = zh[j];
      }
    }
  };
  if (localStorage.visited) {
    $scope.lang(localStorage.lang);
  } else {
    var locale = navigator.language.split('-')[0];
    if (locale === 'zh' || locale === 'en') {
      $scope.lang(locale);
    } else {
      $scope.lang('en');
    }
  }
}]);

app.filter('toHtml', function($filter) {
  return function(data) {
    if (!data) return data;
    return data.replace(/\n/g, '<br />').replace(/\t/g,
      '<i class="fa fa-caret-right"></i>');
  };
});

app.directive('newTab', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      if (true) {
        element.attr('target', '_blank');
      }
    }
  };
});

$(document).ready(function() {
  $('#fullpage').fullpage({
    //Navigation
    menu: '#myMenu',
    lockAnchors: false,
    anchors: ['Home', 'About', 'Portfolio', 'Contact'],
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: true,

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    scrollOverflow: false,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: false,

    //Design
    controlArrows: true,
    verticalCentered: true,
    resize: false,
    paddingTop: '50px',
    paddingBottom: '0',
    responsiveWidth: 0,
    responsiveHeight: 0,
  });
});

$(window).load(function() {
  $('.portfolio-img').width($('.portfolio-img').width() * 75 / 100);
  $('.portfolio').width($('.portfolio-img').width());
  var margin = ($('.jumbotron').width() - 30 - $('.portfolio-img').width() *
    3) / 2;
  for (var i = 0; i < 9; i += 3) {
    $('.portfolio').eq(i).css('margin-left', margin + 'px');
  }
});