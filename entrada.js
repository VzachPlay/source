API.on(API.USER_JOIN, function(user) {
      if (user.username == "Awayshift") {
         API.sendChat("/me Preparem-se, o martelo do BAN  @" + user.username + " chegou!.");
         }   
        });
