# Node.js-Image als Basis
FROM node:16

# Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere package.json und package-lock.json
COPY package*.json ./

RUN npm install

# Kopiere den gesamten Code
COPY . .

EXPOSE 3000

# Starte die Anwendung
CMD ["npm", "start"]
