# SharedFinanze

 <img alt ="ShaFi Logo" src="..\Doku_Unterlagen\KG24_LOGO.png">

 # Inhaltsverzeichnis 

 1) [Idee](https://github.com/Davo00/aktien-app-frontend/blob/main/ShaFi/README.md#Idee)
 2) [Aufbau des Repositorys](https://github.com/Davo00/aktien-app-frontend/blob/main/ShaFi/README.md#Aufbau-des-Repositorys)</br>
 2.1) [Frontend](https://github.com/Davo00/aktien-app-frontend/blob/main/ShaFi/README.md#Frontend)</br>
 2.2) [Backend](https://github.com/Davo00/aktien-app-frontend/blob/main/ShaFi/README.md#Backend)</br>
 3) [Verwendung von Angular](https://github.com/Davo00/aktien-app-frontend/blob/main/ShaFi/README.md#Verwendung-von-Angular)
 4) [Herangehensweise an das Projekt](https://github.com/Davo00/aktien-app-frontend/blob/main/ShaFi/README.md#Herangehensweise-an-das-Projekt)
 5) [Lessons Learned im Frontend](https://github.com/Davo00/aktien-app-frontend/blob/main/ShaFi/README.md#Lessons-Learned-im-Frontend)
 6) [Zukunftsausblick](https://github.com/Davo00/aktien-app-frontend/blob/main/ShaFi/README.md#Zukunftsausblick)
 7) [Verwendung der App](https://github.com/Davo00/aktien-app-frontend/blob/main/ShaFi/README.md#Verwendung-der-App)
 8) [Installationshinweise](https://github.com/Davo00/aktien-app-frontend/blob/main/ShaFi/README.md#Installationshinweise)


## Idee

Unsere App Shared Finance (ShaFi) ist eine App, welche die Finanzierung verschiedener Projekte und die Organisation eines Freundeskreises vereinfachen soll. Wir stellen verschiedene Optionen zur Verfügung, um Ausgaben, die von einer Person für die ganze Gruppe getätigt wurde, aufzunehmen und somit die Finanzen der Gruppen übersichtlich aufzunehmen und darzustellen. Dadurch kann eine Party geplant werden und die Kosten gleichmäßig aufgeteilt werden, ohne das am Ende überlegt werden muss, wer was gekauft hat und wie viel er ausgegeben hat. Die App kann auch sehr gut für den Urlaub verwendet werden, es können alle Rechnungen aufgenommen werden und am Ende einfach verrechnet werden.

## Aufbau des Repositorys

Das Projekt ist aufgeteilt in zwei Repositorys. Dadurch kann einfacher an den Projekten parallel gearbeitet werden. Es gibt entsprechend ein Repository für das Frontend und eins für das Backend.

### Backend
Das Backend wird hier nicht betrachtet. Allgemeine Informationen bezüglich des [Backend](https://github.com/Davo00/aktien-app-backend/blob/main/README.md) und der Technologieentscheidungen befinden sich im entsprechenden Git Repository.

### Frontend

Das Repository des Frontend ist so aufgebaut, dass im Hauptordner Aktien-App-Frontend allgemeine Informationen einsortiert werden. Hier ist unter anderem eine Präsentation des Projektes abgelegt und die ReadMe Datei kann als allgemeiner Einstiegspunkt für das Projekt verwendet werden. </br>
Außerdem gibt es den Ordner ShaFi, dieser beinhaltet das eigentliche Frontend des Projektes. Es ist aus dem Grund ein Unterordner, um eine übersichtliche Struktur des Repositorys zu ermöglichen. 
Der Ordner ShaFi ist auch für die Installation sehr wichtig. Dazu [hier](https://github.com/Davo00/aktien-app-frontend/blob/main/ShaFi/README.md#Installationshinweise) mehr Informationen.
Die Ordner .vscode und node_modules sowie viele  Dateien sind automatisch generiert und werden von unserer Seite nicht bearbeitet. Außerhalb des src Ordners werden nur die Dateien ReadMe und .eslintrc.json häufig bearbeitet. Die ReadMe Datei ist diese Dokumentation und die eslintrc.json Datei beinhaltet automatische Tests. </br>
Innerhalb des src Ordners werden die Ordner app, sowie die Datei styles.css von uns direkt bearbeitet. Die Datei styles.css beinhaltet die Schrifttypen, die Farben und weitere allgemeine Informationen, die für jede Seite wiederverwendet werden sollen. Dadurch kann zum einen verhindert werden, dass für jede Seite die Schrifttypen definiert werden müssen und ermöglicht außerdem eine einfache Bearbeitung der Variablen, wie der Farben. Hierbei ist jedoch Vorsicht geboten, da dies alle Seiten betrifft uns dadurch schnell neue Probleme verursachen kann.</br>
Innerhalb des app Ordners werden alle Komponenten der Webseite gespeichert. Jede Komponente stellt einen Teil oder eine ganze Seite zur Verfügung und beinhaltet somit den tatsächlich auszuführenden Code. 
Durch die Verwendung von Angular besteht jede Komponente aus vier Dateien. Einer HTML-Datei, die den Code beinhaltet. Einer CSS-Datei, die das Styling der Komponente beeinflusst. Einer Typescript Datei um die Funktionalität der Webseite bereitzustellen und einer spec Datei, die aber unter normalen Bedingungen nicht bearbeitet wird.

## Verwendung von Angular

Wir haben uns für Angular als Framework entschieden, da es gut wartbar ist, sehr konsistent ist und durch die Modularität der Bau einer Seite relativ einfach ist. Außerdem ist unsere App vom Umfang etwas umfangreicher und soll in Zukunft noch mit weiteren Funktionen erweitert werden. Deswegen bietet es sich in diesem Fall auch an, einen schwergewichtigeren Ansatz zu wählen als beispielsweise Svelte.


## Herangehensweise an das Projekt

Unser Projekt besteht aus insgesamt 6 Phasen. 
1. Wir haben damit begonnen, das Projekt zu planen. Es wurden die Funktionen festgelegt, die die Webseite haben soll und wann diese implementiert werden sollten. Außerdem wurde das erste Design besprochen und festgelegt.
2. Danach haben wir uns in Angular eingearbeitet und überprüft, welche Funktionen verwendet werden könne, die uns das Framework zur Verfügung stellt. Hierbei ist zu beachten, dass wir unter anderem die Funktion der Site Navbar in der mobilen Ansicht, die beispielsweise von Angular Material gegeben waren, selber zu implementieren, um zu zeigen, dass das Team in allen Bereichen der Webprogrammierung die Fähigkeit besitzt, diese anzuwenden. Aus diesem Grund wurde dann auch Angular Material eingebunden, um beispielsweise die Input Felder zu designen.
3. Sobald die Einarbeitung abgeschlossen war, haben wir damit begonnen, die benötigten Komponenten zu bauen. Hierfür wurden zuerst die Daten beispielhaft dargestellt, da die Funktionen des Backend parallel implementiert wurden. Zwischen diesem Schritt und dem zweiten Schritt gibt es an vielen Stellen Überschneidungen, da während der Implementierung der Komponenten immer wieder Probleme aufgetreten sind, die behoben werden mussten und damit für einen Lerneffekt gesorgt haben. Dazu mehr im nächsten Abschnitt
4. Im nächsten Schritt wurden die Backend Calls eingebunden. Diese führten dazu, dass im Code Kleinigkeiten geändert werden mussten, aber auch, dass die Webseite logischen Sinn hatte und entsprechend die ersten Gruppen und Zahlungen eingetragen werden konnten. Damit war das Projekt für die Vorlesung kurz vor dem Ende. 
5. Im nächsten Schritt wurde der Code aufgeräumt und versucht sauber darzustellen und die letzten Infos wurden in die Dokumentation eingetragen. 
6. Im Laufe der nächsten Monate werden vom Team weitere Funktionen implementiert, siehe dafür Kapitel 6


## Lessons Learned im Frontend
- Token Verwendung für Anmeldung
- Mobile Gestaltung (Css, Html)
- Angular Framework kennengelernt
- typescript 
- Github 
- Rerouting
- Wir können kein Design
- Test mit eslint
- npm Packet Manager




## Zukunftsausblick
- Weitere Komponenten in der Zukunft
- Elevator Pitch, Zettel an der Uni/Bar verteilen 
- Krypto geht auch(Für Zocker)
- QR COde


## Verwendung der App

Erstelle eine Gruppe mit einem passenden Namen unter Gruppen. Füge deine Kollegen hinzu und fange an, alle Zahlungen in der App einzutragen. Sobald der Urlaub, die Party oder der entspannte Abend in der Bar vorbei sein, schließe die Abrechnung ab und es wird für jeden Nutzer eine Teilschuld bzw. eine Teilforderung berechnet. Nun kannst du auswählen, ob du deine Beiträge risikofrei im Barbetrag zahlen bzw. bekommen möchtest, also der tatsächliche Wert bezahlt werden soll, oder ob du zocken möchtest. Wähle hierfür eine Aktie aus und lege einen Zeitraum fest. Am Ende der Zeit wird dir der fällige Betrag dann mitgeteilt.

## Installationshinweise

1. Klone das Repository (git clone https://github.com/Davo00/aktien-app-frontend.git).
2. Navigiere in den Unterordner ShaFi (cd ./ShaFi/).
3. Führe folgenden Befehl aus: “npm install” (Dies kann einige Minuten dauern).
4. Führe danach den folgenden Befehl aus: “ng serve -o” .
5. Ein neues Fenster in deinem Browser öffnet sich.
Weitere Informationen findest du in unserem Video: 
[Installation von Shared Finanz](https://www.youtube.com/watch?v=dQw4w9WgXcQ)





<!-- ## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->
 