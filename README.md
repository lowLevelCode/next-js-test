# Simple test app on Next.js

Esta app es solo con fines de aprendije.

## Como iniciar...

### Instalar Dependencias
````
npm install
````

### Levantar la base de datos con docker
````
docker-compose up -d
````

### Hacer migraciones del schema Prisma
````
npx prisma migrate dev --preview-feature
````

### correr la app en dev
````
npm run dev
o
yarn dev
````


La app tiene algunas rutas y usamos prisma como ORM