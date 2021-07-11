# SharedFinanze

 <img alt ="ShaFi Logo" src="..\Doku_Unterlagen\KG24_LOGO.png">

 # Inhaltsverzeichnis 

 1) Idee
 2) Aufbau des Repositorys
 2.1) Frontend
 2.2) Backend
 3) Herangehensweise an das Projekt
 4) Lessons Learned im Frontend
 5) Verwendung der App
 6) Installationshinweise


## Idee

Unsere App Shared Finance (ShaFi) ist eine App, welche die Finanzierung verschiedener Projekte und die Organisation eines Freundeskreises vereinfachen soll. Wir stellen verschiedene Optionen zur Verfügung, um Ausgaben, die von einer Person für die ganze Gruppe getätigt wurde, aufzunehmen und somit die Finanzen der Gruppen übersichtlich aufzunehmen und darzustellen. Dadurch kann eine Party geplant werden und die Kosten gleichmäßig aufgeteilt werden, ohne das am Ende überlegt werden muss, wer was gekauft hat und wie viel er ausgegeben hat. Die App kann auch sehr gut für den Urlaub verwendet werden, es können alle Rechnungen aufgenommen werden und am Ende einfach verrechnet werden.

## Aufbau des Repositorys

Das Projekt ist aufgeteilt in zwei Repositorys. Dadurch kann einfacher an den Projekten parallel gearbeitet werden. Es gibt entsprechend ein Repository für das Frontend und eins für das Backend.

### Backend
Das Backend wird hier nicht betrachtet. Allgemeine Informationen bezüglich des [Backend](https://github.com/Davo00/aktien-app-backend/blob/main/README.md) und der Technologieentscheidungen befinden sich im entsprechenden Git Repository.

### Frontend

Das Repository des Frontend ist so aufgebaut, dass im Hauptordner Aktien-App-Frontend allgemeine Informationen einsortiert werden. Hier ist unter anderem eine Präsentation des Projektes abgelegt und die ReadMe Datei kann als allgemeiner Einstiegspunkt für das Projekt verwendet werden. </br>
Außerdem gibt es den Ordner ShaFi, dieser beinhaltet das eigentliche Frontend des Projektes. Es ist aus dem Grund ein Unterordner, um eine übersichtliche Struktur des Repositorys zu ermöglichen. 
Der Ordner ShaFi ist auch für die Installation sehr wichtig. Dazu [hier]() mehr Informationen.
Die Ordner .vscode und node_modules sowie viele  Dateien sind automatisch generiert und werden von unserer Seite nicht bearbeitet. Außerhalb des src Ordners werden nur die Dateien ReadMe und .eslintrc.json häufig bearbeitet. Die ReadMe Datei ist diese Dokumentation und die eslintrc.json Datei beinhaltet automatische Tests. </br>
Innerhalb des src Ordners werden die Ordner app, sowie die Datei styles.css von uns direkt bearbeitet. Die Datei styles.css beinhaltet die Schrifttypen, die Farben und weitere allgemeine Informationen, die für jede Seite wiederverwendet werden sollen. Dadurch kann zum einen verhindert werden, dass für jede Seite die Schrifttypen definiert werden müssen und ermöglicht außerdem eine einfache Bearbeitung der Variablen, wie der Farben. Hierbei ist jedoch Vorsicht geboten, da dies alle Seiten betrifft uns dadurch schnell neue Probleme verursachen kann. .</br>
Innerhalb des app Ordners werden alle Komponenten der Webseite gespeichert. Jede Komponente stellt einen Teil oder eine ganze Seite zur Verfügung und beinhaltet somit den tatsächlich auszuführenden Code. 
Durch die Verwendung von Angular besteht jede Komponente aus vier Dateien. Einer HTML-Datei, die den Code beinhaltet. Einer CSS-Datei, die das Styling der Komponente beeinflusst. Einer Typescript Datei um die Funktionalität der Webseite bereitzustellen und einer spec Datei, die aber unter normalen Bedingungen nicht bearbeitet wird.





## Herangehensweise an das Projekt



## Lessons Learned im Frontend



## Verwendung der App



## Installationshinweise







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
 