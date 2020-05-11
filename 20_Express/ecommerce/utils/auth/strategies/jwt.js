const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const boom = require("@hapi/boom");
const { config } = require("../../../config");
const MongoLib = require("../../../lib/mongo");

// Si queremos utilizar una ruta que requiera autenticación agregamos el token en:
// Authorization -> type-Bearer Token -> Token-access_token
// El access_token es el que nos devuelve al hacer POST en auth

passport.use(
  new Strategy(
    {
      secretOrKey: config.authAdminSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async function(tokenPayload, cb) {
      const mongoDB = new MongoLib();

      try {
        const [user] = await mongoDB.getAll("users", {
          username: tokenPayload.sub
        });

        if (!user) {
          return cb(boom.unauthorized(), false);
        }

        return cb(null, user);
      } catch (error) {
        return cb(error);
      }
    }
  )
);
