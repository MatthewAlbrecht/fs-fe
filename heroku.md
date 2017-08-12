theme: Titillium, 1
autoscale: true
slidenumbers: true

![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)
![right fit](http://nishanthkabra.com/images/herokunode.jpg)
# Heroku Deployment

---

![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)
### Objective

- Be able to take your express/node/knex project and deploy publicly to the Heroku production environment.

---

![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)
### What it do
Like Surge, but for full-stack apps. DB, backend, frontend. Way to deploy your app publicly without much thought to configuring servers and such.

---

![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)
### Setup Heroku

- Install Node/NPM
- Ensure your app has a valid package.json
- Sign up for Heroku
- **brew install heroku**
- **heroku login**

---

![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)
### Create Heroku App

- cd into project folder
- **git status** to ensure your project is already git managed
- **heroku apps:create my-app-name**
- node -v and paste into package.json:

```json
{
  "engines": {
    "node": "v7.7.2"
  }  
}
```

---

![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)
### Setup Heroku PSQL/Knex

- **heroku addons:create heroku-postgresql**
- **knexfile.js**: Add a config for production environment:

```json
{
  "production": {
    "client": "pg",
    "connection": process.env.DATABASE_URL
  }
}
```

---

![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)
### Heroku Scripts

- **package.json**: Add start & knex scripts:

```json
{
  "scripts": {
    "start": "node ./bin/www",
    "knex": "knex",
    "heroku-postbuild": "knex migrate:rollback; knex migrate:latest; knex seed:run;",
    "nodemon": "node app.js"
  }
}
```

---

![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)
### Heroku Scripts
- Other knex migration/seed scripts can go in *"heroku-postbuild"*
- *"node app.js"* is whichever file initializes the express server/defines initial routes. Sometimes this is *"node server.js"* instead.

---

![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)
### Procfile/Config

- A Procfile is a config file that lives in the root of your application and explicitly declares what command should be executed to start your app.
- **echo 'web: node ./bin/www' > Procfile**

- Setup session secret:
- **bash -c 'heroku config:set SESSION_SECRET=$(openssl rand -hex 64)'**

---

![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)
### Push to Heroku

- When you initialized your Heroku app, it added a Git remote called "heroku" you can push to
- **git add .**
- **git commit -m "You're my Hero, Ku."**
- **git push heroku master**, cross fingers

---

![](http://cdn.osxdaily.com/wp-content/uploads/2011/10/NSTexturedFullScreenBackgroundColor.png)
### PROFIT

- You can check your remote psql DB that it seeded correctly:
- **heroku pg:psql**
- Check your deployed URL in browser, **heroku open** works too
- **heroku logs** if you have issues

[http://leesah-herokudeploy.surge.sh/](http://leesah-herokudeploy.surge.sh/)

[https://devcenter.heroku.com/articles/how-heroku-works](https://devcenter.heroku.com/articles/how-heroku-works)

---

![fit](https://blog.logentries.com/mstatic/content/uploads/2014/09/deploy-to-heroku.png)


## PSQL HEROKU CL

- heroku pg:psql
