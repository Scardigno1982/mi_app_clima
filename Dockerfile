# Imagen base
FROM node:14

# Directorio de trabajo
WORKDIR /usr/src/app

# Clona el repositorio de GitHub
RUN apt-get update && \
    apt-get install -y git && \
    git clone https://github.com/Scardigno1982/mi_app_clima.git .

# Instala las dependencias
COPY package*.json ./
RUN npm install

# Expone el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD [ "node", "server.js" ]

