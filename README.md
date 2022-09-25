## Sequelize Typescript Examples

This is unofficial sources for Sequelize Typescript examples with Express.

This repository includes example for:

- [Express + Typescript + SQLite](./servers/sqlite.ts) (Released)
- Express + Typescript + Postgres (Upcoming after SQLite example)
- Express + Typescript + MySQL (Upcoming after Postgres example)
- And so on...

Every dialects have different approaches on how to setup their databases on Sequelize, this repository will help you how to setup it correctly, you may need yourself to fit your own usecases but I will provide the examples with minimum bugs for a minimal app.

## Releasing target

Every dialects will start the development every week on new branch and release it next week, except SQLite, as it is released first than other dialects.

## Contributing

This repository didn't accept folder management and code style changes. You need to follow the repository folder management and code style.

- `/dialects` to store the database config and .sql
- `/dist` to put tsc build result.
- `/functions` to store every functions including their controller, router and validator, with a file that export every created functions router.
- `/middlewares` to put every middlewares.
- `/models` to put every models.
- `/servers` to put every dialects logic on how their setup the database with Express and Sequelize.

### What you should contribute?

- Security fixes
- Bug fixes
- Documentation related (e.g Code comments, README)

## License

License used for the examples is [MIT License](./LICENSE)
