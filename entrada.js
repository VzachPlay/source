API.on(API.USER_JOIN, function(user) {
      if (user.id == "14638563") {
         API.sendChat("/me Preparem-se, o martelo do BAN  @" + user.username + " chegou!.");
         }    
        eventUserjoin: function (user) {
            var known = false;
            var index = null;
            for (var i = 0; i < basicBot.room.users.length; i++) {
                if (basicBot.room.users[i].id === user.id) {
                    known = true;
                    index = i;
                }
            }
            var greet = true;
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
            }
            for (var j = 0; j < basicBot.room.users.length; j++) {
                if (basicBot.userUtilities.getUser(basicBot.room.users[j]).id === user.id) {
                    basicBot.userUtilities.setLastActivity(basicBot.room.users[j]);
                    basicBot.room.users[j].jointime = Date.now();
                }

            }
            if (basicBot.settings.welcome && greet) {
                welcomeback ?
                    setTimeout(function (user) {
                        API.sendChat(subChat(basicBot.chat.welcomeback, {name: user.username}));
                    }, 1 * 1000, user)
                    :
                    setTimeout(function (user) {
                        API.sendChat(subChat(basicBot.chat.welcome, {name: user.username}));
                    }, 1 * 1000, user);
        });
