import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import db from "./sequelize/models/index.cjs";
import bcrypt from "bcrypt";
import passport from "passport";
import LocalStrategy from "passport-local";

const app = express();
const port = process.env.PORT || 5000;
const saltRounds = 12;
//enables passport to verify user and password
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      db["User"]
        .findOne({
          where: {
            email: email,
          },
        })
        .then((user) => {
          if (!user) {
            return done(null, false, {
              errors: { message: "Email or Password is invalid" },
            });
          } else {
            bcrypt.compare(password, user.password, (err, result) => {
              if (result == true) {
                console.log("successfully logged in");
                return done(null, user);
              } else {
                return done(null, false, {
                  errors: { message: "Email or Password is invalid" },
                });
              }
            });
          }
        });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db["User"]
    .findOne({
      where: {
        id: id,
      },
    })
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err, null);
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("trust proxy", 1);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// check the databse connection
db.sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

const getAllUsers = async () => {
  return await db["User"].findAll();
};

//defines user construct
const createUser = async ({ firstName, lastName, email, password }) => {
  return await db["User"].create({ firstName, lastName, email, password });
};

app.get("/users", (req, res) => {
  getAllUsers().then((user) => res.send(user));
});

//bcrypt hashes and salts passwords before they are
//sent to the database
app.post("/user/create", (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    createUser({ firstName, lastName, email, password: hash }).then((user) =>
      res.json({ user, msg: "account created successfuly" })
    );
  });
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (info) {
      return res.send(info.message);
    }
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/login");
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/me");
    });
  })(req, res, next);
});

app.get("/me", (req, res) => {
  console.log(req.user);
  res.send(req.user);
});

app.get("/logout", function (req, res) {
  req.logout();
});

app.listen(port, () => console.log(`Listening on port ${port}`));
