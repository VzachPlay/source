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
