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

    (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '183964');

});
