# docker-nestjs
Dockerised NestJS Rest API

Demo application for running a NestJS RestAPI from a Docker container

## Getting Started

### Backend

First, build and run NestJS container (backend):

```bash
docker compose build backend
docker compose up backend
```

Open [http://localhost:3500](http://localhost:3500) with your browser to see the result.

### Frontend

On another terminal, Build and run NextJS container (frontend)::

```bash
docker compose build frontend
docker compose up frontend
```

Open [http://localhost:3600](http://localhost:3600) with your browser to see the result.

