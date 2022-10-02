(function ($) {
  Drupal.behaviors.newOuroborosBehaviour = {
    attach: function (context, settings) {

      $(context).find('.btn-close').once('alertCloser').click(function(){
        const el = document.querySelector(this.getAttribute('data-target'));
        el.remove();
      });

      $(context).find('.social_share').once('sharers').click(function(){
        return JSShare.go(this);
      });

      $(context).find('.navbar-toggler').once('openers').click(function(){
        const target = this.getAttribute('data-target');
        let ariaexpanded = this.getAttribute('aria-expanded');
        if(ariaexpanded == 'false') this.setAttribute('aria-expanded', 'true')
        else this.setAttribute('aria-expanded', 'false');
        document.querySelector(target).classList.toggle('d-none');
        document.querySelector('.main-container').classList.toggle('d-none');
        if(target == '#SearchCanvas') {
          const el = document.querySelector(target + ' form input');
          el.focus();
        }
      });

      $(context).find('.navbar-toggler-close').once('sharers').click(function(){
        const el = document.querySelector(this.getAttribute('data-target'));
        const elp = document.querySelector(this.getAttribute('data-parent'));
        let ariaexpanded = elp.getAttribute('aria-expanded');
        if(ariaexpanded == 'false') elp.setAttribute('aria-expanded', 'true');
        else elp.setAttribute('aria-expanded', 'false');
        document.querySelector('.main-container').classList.toggle('d-none');
        el.classList.toggle('d-none');

      });

      const tabs = document.querySelectorAll(".nav-tabs .nav-link");
      const tabContent = document.querySelectorAll(".tab-content .tab-pane");

      for(let i = 0; i < tabs.length; i++){
        tabs[i].addEventListener('click', function() {

            const el = document.querySelector(this.getAttribute('data-bs-target'));
            this.classList.toggle('active');
            for(j = 0; j < tabContent.length; j++){
              tabContent[j].classList.remove('active');
            }
            el.classList.toggle('active');

        }, false);
      }


    }
  };
})(jQuery);


document.addEventListener("DOMContentLoaded", function(event) {


(function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
_.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');

var ml_account = ml('accounts', '1435336', 'f3i6n6u2g3', 'load');

});
