;(function(){
  var icon = '<svg class="sg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.41 7.41L18 6l-6 6 6 6 1.41-1.41L13.83 12z"/></svg>';

  document.head.insertAdjacentHTML('beforeend', '<style>.sg { width: 40px; height: 40px; position: fixed; top: 10px; right: 10px; } .sg .eye { -webkit-transform: translateX(0px); transform: translateX(0px); } .sg:hover .eye { -webkit-transition: -webkit-transform 0.3s ease; transition: -webkit-transform 0.3s ease; transition: transform 0.3s ease; transition: transform 0.3s ease, -webkit-transform 0.3s ease; -webkit-transform: translateX(12px); transform: translateX(12px); }</style>');

  var a = document.createElement('a');
  a.setAttribute('href', '../♡/feliz_cumple');
  //a.setAttribute('target','_blank');
  a.innerHTML = icon;

  document.body.appendChild(a);
})();

  