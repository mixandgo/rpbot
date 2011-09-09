var config = {};

// Campfire settings
config.campfire = {};
config.campfire.account = ""; // Campfire account name (http://<accountname>.campfirenow.com)
config.campfire.token = ""; // Campfire API token assigned for the bot's account 
config.campfire.room_id = ""; // Campfire Room ID you want the bot to connect to (http://accountname.campfirenow.com/room/<roomid>)

// GitHub settings
config.github = {};
config.github.user = ""; // GitHub account name used for API access
config.github.token = ""; // GitHub API token for the account specified above
config.github.repo_user = ""; // GitHub account name of the owner for the repository you want to get info from (http://github.com/<accountname>/<repository>)
config.github.repo = ""; // Name of the repository (http://github.com/<accountname>/<repository>)

// Google Analytics settings
config.google = {};
config.google.email = ""; // Email address used for Google Analytics login
config.google.password = ""; // Password for logging in to Google Analytics
config.google.profile_id = ""; // Profile ID of the website profile you want to fetch info from

module.exports = config;
