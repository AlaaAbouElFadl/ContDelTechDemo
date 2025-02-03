# Branching-Strategie für abouelfadl-techdemo

## Übersicht
Diese Repository verwendet eine einfache Branching-Strategie, da es sich um ein kleines, einzelnes Projekt handelt.
Alle Änderungen erfolgen direkt auf dem **main** Branch.

### **Branches**
- `main` – Einziger Branch, in dem alle Entwicklungen stattfinden.
- Keine separaten Feature- oder Bugfix-Branches.

### **Workflow**
1. **Alle Änderungen direkt in main committen und pushen**  
     ```bash
     git add .
     git commit -m "Beschreibung der Änderung"
     git push origin main

     ```
2. **Code-Qualitätsprüfung mit ESLint und Unit-Tests lokal ausführen, bevor Änderungen gepusht werden.**  

     ```bash
     npm run lint
     npm test

     ```

### **Best Practices**
- Jeder Commit sollte eine klare Beschreibung der Änderungen enthalten.
- Regelmäßige Tests, um sicherzustellen, dass der Code funktionsfähig bleibt.
- Vor dem Pushen sicherstellen, dass ESLint und Tests fehlerfrei laufen.

