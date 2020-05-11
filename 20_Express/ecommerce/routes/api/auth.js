const express = require("express");
const passport = require("passport");
const boom = require("@hapi/boom");
const jwt = require("jsonwebtoken");
const api = express.Router();

const { config } = require("../../config");

// Basic strategy
require("../../utils/auth/strategies/basic");

// Acedemos a la ruta http://localhost:8000/api/token
// En postman seleccionamos basic Auth en Authorization
// Ingresamos el username y password del usuario administradoe que creamos
// Agregar el siguiente header: key: X-Requested-With value: XMLHttpRequest
// Nos arrojará un token de autenticación
// Lo copiamos y en jwt.io podemos ver en el payload nuestros datos
// Podemos poner el secreto y la firma nos dirá que es válida

api.post("/token", async function(req, res, next) {
  let payload, token;
  passport.authenticate("basic", function(error, user) { 
    try {
      if (error || !user) {
        next(boom.unauthorized());
        return;
      }else{
        console.log('Usuario ', user)
        req.login(user, { session: false }, async function(error) {
          if (error) {
            next(error);
          }

          payload = { sub: user.username, email: user.email };
          token = jwt.sign(payload, config.authAdminSecret, {
            expiresIn: "15m"
          });

          return res.status(200).json({ access_token: token });
        });

      }
    } catch (error) {
      next(error);
    }
  })(req, res, next);
});

module.exports = api;