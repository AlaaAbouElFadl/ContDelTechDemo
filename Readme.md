# Calculator Demo

## Beschreibung
Dieses Projekt ist eine einfache Taschenrechner-Demo, die als Tech-Demo für Continuous Delivery dient. Es beinhaltet:
- Eine Node.js-Anwendung
- Frontend-Integration mit HTML, CSS und JavaScript
- Unit Tests mit Jest
- Containerisierung mit Docker
- Dokumentation und Checkliste für den Fortschritt

## Setup und Installation
1. Repository klonen:
   ```bash
   git clone <repository-url>
2. Abhängigkeiten installieren:
   ```bash
   npm install
3. Anwendung starten:
   ```bash
   node src/app.js
4. Tests ausführen:
   ```bash
   npm test
5. Code-Qualitätsprüfung mit ESLint:
   ```bash
   npm run lint
----------------------------------------------------------------

## Automatisierte Code-Qualitätsanalyse

### ESLint-Setup
1. Installation und konfigurieren von ESLint:
2. Code-Qualität lokal prüfen:
   ```bash
   npm run lint
3. Integration in GitHub Actions:
ESLint ist in die CI-Pipeline integriert und wird bei jedem Push automatisch ausgeführt, um die Code-Qualität zu gewährleisten.


## Containerisierung mit Docker
1. Docker-Image bauen im Root-Verzeichnis deines Projekts:
   ```bash
   docker build -t contdeltechdemo .
2. Docker-Container starten:
   ```bash
      docker run -p 8080:8080 contdeltechdemo
2. Anwendung testen:

Öffne einen Browser und rufe http://localhost:8080 auf, um sicherzustellen, dass die Anwendung läuft.

## Repos für Übungen

[Exercises Repo](https://github.com/AlaaAbouElFadl/ContDelExercises)

[Workflow Automation Repo](https://github.com/AlaaAbouElFadl/contdel-uebung3)