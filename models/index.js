module.exports = {
  User: require("./users"), //User is how the users collection is referred from other js files, once the models dir.
                            //is reqd. in those files.
  Flight: require("./flights"),
  Aircraft: require("./aircrafts")
};
