# CI/CD Pipeline Dokumentation

## Einführung
Dieses Projekt verwendet **GitHub Actions**, um Continuous Integration (CI) und Continuous Deployment (CD) zu automatisieren.  
Die Pipeline stellt sicher, dass jeder Code-Commit getestet, auf Sicherheitslücken überprüft und als Docker-Image gebaut wird.

## CI/CD Workflow
Die CI/CD-Pipeline besteht aus mehreren Schritten:

1. **Code-Qualitätsprüfung**  
   - ESLint überprüft den Code-Stil und mögliche Fehler.  
   - Linting wird automatisch mit jedem Push oder Pull-Request durchgeführt.

2. **Automatisierte Tests**  
   - Jest wird für Unit-Tests verwendet, um die korrekte Funktionsweise der Anwendung sicherzustellen.  
   - Alle Tests laufen automatisch in der CI-Pipeline.

3. **Containerisierung & Build-Prozess**  
   - Die Anwendung wird mit Docker containerisiert.  
   - Docker-Images werden automatisch gebaut, um eine einheitliche Laufzeitumgebung sicherzustellen.

## CI/CD Workflow Datei: `.github/workflows/node.yml`
Hier ist die Konfiguration der GitHub Actions Pipeline, die in deinem Repository unter `.github/workflows/node.yml` gespeichert ist.

```yaml
name: Node.js CI/CD Pipeline

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install Dependencies
        run: npm ci

      - name: Run ESLint (Code-Qualitätsprüfung)
        run: npm run lint

      - name: Run Tests
        run: npm test

      - name: Build Docker Image
        run: docker build -t alaaabou/abouelfadl-techdemo .

      - name: Log in to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_HUB_USERNAME }}
          password: ${{ secrets.DOCKER_HUB_PASSWORD }}
    
      - name: Push Docker Image
        run: docker push alaaabou/abouelfadl-techdemo:latest
```
# Build Pipeline Spezifikation

Die Build-Pipeline führt automatisierte Prozesse für **Code-Qualität, Tests und Builds** durch.  
Hier sind alle **Schritte der Pipeline** genau beschrieben:

## 1️- Code aus dem Repository abrufen
```yaml
- name: Checkout Repository
  uses: actions/checkout@v3
 ```
Erklärung: Holt den aktuellen Code aus dem GitHub-Repository.

## 2- Node.js einrichten
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v3
  with:
    node-version: '18'
 ```
 Erklärung: Stellt sicher, dass Node.js in der richtigen Version genutzt wird.

## 3- Abhängigkeiten installieren
```yaml
- name: Install dependencies
  run: npm ci
 ```
Erklärung: Installiert alle im Projekt benötigten npm-Pakete.

## 4- Code-Qualität prüfen (Linting)
```yaml
- name: Run ESLint
  run: npm run lint
 ```
 Erklärung: Führt eine statische Code-Analyse durch, um Fehler und Formatierungsprobleme zu erkennen.

## 5- Automatisierte Tests ausführen
```yaml
- name: Run Tests
  run: npm test
 ```
Erklärung: Führt Unit-Tests mit Jest aus, um sicherzustellen, dass der Code funktioniert.

## 6- Build-Schritt
```yaml
- name: Build Docker Image
  run: docker build -t alaaabou/abouelfadl-techdemo .
 ```
Erklärung: Erstellt ein Docker-Image der Anwendung.

## 7- Deployment auf AWS EC2
```yaml
- name: Log in to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_HUB_USERNAME }}
          password: ${{ secrets.DOCKER_HUB_PASSWORD }}
    
  - name: Push Docker Image
    run: docker push alaaabou/abouelfadl-techdemo:latest
 ```
Erklärung: Loggt sich in Docker Hub ein und lädt das Docker-Image hoch, damit es später auf AWS EC2 genutzt werden kann.

----------------------------------------------------------------
# Erläuterung der CI/CD Schritte

### 1. Code-Qualitätsprüfung
- **Zweck:** Sicherstellen, dass der Code saubere Syntax hat und Best Practices einhält.
- **Werkzeug:** ESLint.
- **Ergebnis:** Falls Fehler gefunden werden, schlägt der CI-Build fehl.

**Befehl zur manuellen Ausführung:**  
```bash
npm run lint
```

### 2. Automatisierte Tests
- **Zweck:** Sicherstellen, dass alle Funktionen korrekt arbeiten.
- **Werkzeug:** Jest.
- **Ergebnis:** Falls Tests fehlschlagen, wird der CI/CD-Prozess gestoppt.

**Befehl zur manuellen Ausführung:**  
```bash
npm test
```

### 3. Containerisierung mit Docker
- **Zweck:** Sicherstellen, dass die Anwendung in einer konsistenten Umgebung läuft.
- **Werkzeug:** Docker.
- **Ergebnis:** Docker-Image wird erstellt und lokal getestet.

**Docker-Befehle zur manuellen Prüfung:**  
```bash
docker build -t abouelfadl-techdemo .
docker run -p 3000:3000 abouelfadl-techdemo
```

### 4. CI/CD-Pipeline in GitHub Actions
Die .github/workflows/node.yml Datei steuert die Automatisierung.

Enthält folgende Schritte:
- Repository auschecken
- Node.js Umgebung einrichten
- Abhängigkeiten installieren
- Linting ausführen
- Tests ausführen
- Docker-Image bauen


### 5. Pipeline-Status prüfen
Nach jedem Push oder Pull Request kann der CI/CD-Status in GitHub Actions überprüft werden:

- Gehe zu deinem GitHub Repository.
- Öffne den **Actions** Tab.
- Suche den neuesten Workflow-Run.
- Falls Fehler auftreten, überprüfe die Logs und korrigiere den Code.

### 6. Deployment auf AWS EC2

1. Docker-Image zu Docker Hub pushen
  ```bash
  docker login
  docker build -t alaaabou/abouelfadl-techdemo:latest .
  docker push alaaabou/abouelfadl-techdemo:latest
  ```
2. AWS EC2 Instanz starten
3. Mit AWS EC2 verbinden
  ```bash
  ssh -i <dein-key.pem> ec2-user@<EC2-PUBLIC-IP>
  ```
4. Docker installieren & Container starten
  
5. Docker-Image auf AWS EC2 startenv

  ```bash
  ssh -i <dein-key.pem> ec2-user@<EC2-PUBLIC-IP>
  ```

6. Anwendung testen
  ```bash
  http://<EC2-PUBLIC-IP>
  ```


### Fazit
Diese CI/CD-Pipeline automatisiert:
- **Linting für Code-Qualität**
- **Automatische Tests mit Jest**
- **Containerisierung mit Docker**
- **Deployment auf Docker Hub**
- **Einfache Bereitstellung auf AWS EC2**


