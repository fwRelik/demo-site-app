# demo-site-app

The application consumes a self-written API [demo-site-api.](https://github.com/fwRelik/demo-site-api)

Implemented aspects such as:

-   Switch language.
-   Ability to change text content.
-   Ability to add pages.
-   Responsive layout.

> The main advantage of this application is minimalism ( Lack of functionality 🙂 )

## Launching a project for production

### NPM

Сlone this repository to yourself.

```sh
> npm install

> npm run build

> npm start
```

### Docker

```sh
> docker-compose up -d
```

**In the default image, the path to the API is http://localhost:4006**

## **Important!**

The `.env.local` file is **required**, where the api address is written. _This file is also used during build._

`NEXT_PUBLIC_DOMAIN=[NEXT_PUBLIC_DOMAIN]`

### Example:

```ps1
# .env.local

NEXT_PUBLIC_DOMAIN=[https://good.domain.com]

# or

NEXT_PUBLIC_DOMAIN=[http://localhost:4006]
```
