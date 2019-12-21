# SNAP Screener

- [Hunger Free Oklahoma](https://hungerfreeok.org/)
- [Tulsa Public Schools](https://www.tulsaschools.org/)
- [Oklahoma Department of Human Services](http://www.okdhs.org/)
- [Spark Collaborative](https://creativespark.group/)
- [Underdog Systems](https://underdog.systems/)

## Operation

### Development

```bash
# web/.env
MAIL_HOST=mailhog
MAIL_PORT=1025
APP_ENV=development
```

```bash
# web/api/.env
REACT_APP_API_FORM_SUBMIT='http://localhost:5000/api/form-submit'
```

```console
$ docker-compose up -d
$ cd web && yarn start
```

## Software

### Requirements

- node v10.16.3
- yarn

### Primary Dependencies

- [create-react-app](https://create-react-app.dev/)
- [react-final-form](https://final-form.org/react)
- [react-i18next](https://react.i18next.com/)
- [react-router](https://reacttraining.com/react-router/)
- [tailwindcss](https://tailwindcss.com/)
