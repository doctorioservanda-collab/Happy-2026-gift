const { getSetting } = require("./settings.helper");

module.exports = async (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  const isFacebookAuth = await getSetting("auth", "facebook", "allow_login");

  const clientID = process.env.GOOGLE_CLIENT_ID || "your-google-client-id";

  if (isFacebookAuth == true) {
    const FacebookTokenStrategy = require("passport-facebook-token");
    const FACEBOOK_APP_ID = await getSetting("auth", "facebook", "app_id");
    const FACEBOOK_APP_SECRET = await getSetting(
      "auth",
      "facebook",
      "app_secret"
    );

    passport.use(
      new FacebookTokenStrategy(
        {
          clientID: FACEBOOK_APP_ID,
          clientSecret: FACEBOOK_APP_SECRET,
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            if (profile.emails && profile.emails[0].value) {
              // Extract the minimal profile information we need from the profile object 
              const user = {
                name: profile.displayName,
                first_name: profile.name.givenName,
                last_name: profile.name.familyName,
                email: profile.emails[0].value,
                picture: profile.photos[0].value,
                provider: "facebook",
                id: profile.id,
              };
              return done(null, user);
            } else {
              done(null, false);
            }
          } catch (err) {
            console.log("err:", err);
            return cb(err, null);
          }
        }
      )
    );
  }
};
