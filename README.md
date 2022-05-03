# esgi-react-template

Template folder for creating websites using the React library.

![demo](https://i.ibb.co/tHwvPct/asciinema.gif)


## Requirements

- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)

Or

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [GNU/Make](https://www.gnu.org/software/make/) (optional)

## Why

- Minimal template with only `react`, `react-dom` & `react-router-dom`
- Out-of-the-box router setup for quick prototyping
- Fast development with Vite
- Best practices enforced through ESLint for JavaScript, JSX & React Hooks
- Fast startup with GNU/Make commands
- Vite setup for using Docker Container for easier collaboration
- No magical setup and easily extendable

## Docker Compose service startup

*Starts the services listed in the [docker-compose.yaml](./docker-compose.yaml) file.*

### GNU/Make

```bash
make start
```

### Docker Compose

```bash
docker-compose up --detach
```

### NPM

*No equivalent.*

## Docker Compose services shutdown

*Stops the services listed in the [docker-compose.yaml](./docker-compose.yaml) file.*

### GNU/Make

```bash
make stop
```

### Docker Compose

```bash
docker-compose down --remove-orphans --volumes --timeout 0
```

### NPM

*No equivalent.*

## Docker Compose services restart

*Restarts the services listed in the [`docker-compose.yaml`](./docker-compose.yaml) file. This is equivalent to stopping and starting the services.*

### GNU/Make

```bash
make restart
```

### Docker Compose

```bash
docker-compose down --remove-orphans --volumes --timeout 0
docker-compose up --detach
```

### NPM

*No equivalent.*

## Node.js dependencies installation

*Installs all dependencies listed in the [`package.json`](./package.json) file. When using `make`, this command automatically starts the Docker Compose services for you if not already done.*

### GNU/Make


```bash
make install
```

### Docker Compose

```bash
docker-compose exec node npm install
```

### NPM

```bash
npm install
```

## Development server startup

*Starts the development server at [`localhost:8000`](./http://localhost:8000). When using `make`, this command automatically starts the Docker Compose services for you if not already done.*

### GNU/Make


```bash
make development
```

### Docker Compose

```bash
docker-compose exec node npm run development
```

### NPM

```bash
npm install
npm run development
```

## Code-style issues checking

*Check that all files are consistent accordint to the code-style configured in the [`.eslintrc.js`](./.eslintrc.js) file. When using `make`, this command automatically starts the Docker Compose services for you if not already done.*

### GNU/Make

```bash
make lint
```

### Docker Compose

```bash
docker-compose exec node npm run lint
```

### NPM

```bash
npm run lint
```

## Node artifacts cleanup

*Remove all Node.js and NPM generated files and prepare the folder project to be uploaded. When using `make`, this command automatically starts the Docker Compose services for you if not already done.*

### GNU/Make

```bash
make clean
```

### Docker Compose

```bash
docker-compose exec node npm run clean
```

### NPM

```bash
npm run clean
```
