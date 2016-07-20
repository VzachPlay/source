        main: {
            init: function() {
                bots.session.site = bots.util.detectSite();
                 
                if (bots.session.site == -1)
                    return alert('Site nÃ£o reconhecido!');
                 
                if (bots.session.site == bots.consts.DUB)
                    bots.util.loadDubCustomAPI();
                 
                bots.events.on();
                setTimeout(function () {
                 API.sendChat("!cmddel");;
                 }, 2000);
                bots.util.sendChat('SimSimi e Ed ativados');
            }
        }
    };
     
    bots.main.init();
})();
API.sendChat("Olá");;
API.on(API.USER_JOIN, function(user) {
      if (user.id == "6500812") {
         API.sendChat("/me Preparem-se, o martelo do BAN  @" + user.username + " chegou!.");
         }   
API.on(API.USER_BACK, function(user) {
      if (user.id == "14638563") {
         API.sendChat("/me Preparem-se, o martelo do BAN  @" + user.username + " Voltou!.");
         }   
        });
