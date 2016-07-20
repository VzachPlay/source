API.on(API.USER_JOIN, function(user) {
      if (user.id == "14638563") {
         API.sendChat("/me Preparem-se, o martelo do BAN  @" + user.username + " chegou!.");
         }    
         var welcomeback = null;
            if (known) {
                basicBot.room.users[index].inRoom = true;
                var u = basicBot.userUtilities.lookupUser(user.id);
                var jt = u.jointime;
                var t = Date.now() - jt;
                if (t < 10 * 1000) greet = false;
               if (user.id == "14638563") {
               API.sendChat("/me Preparem-se, o martelo do BAN  @" + user.username + " chegou!.");
               }    
                else welcomeback = true;
            }
            else {
                basicBot.room.users.push(new basicBot.User(user.id, user.username));
                welcomeback = false;
        });
