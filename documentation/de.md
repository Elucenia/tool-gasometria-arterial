<!-- ELUCENIA technical documentation · gasometria-arterial · de · no clinical/professional/rights approval -->

# Interpretation der arteriellen Blutgasanalyse

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/gasometria-arterial)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### pH

`ph`

Bereich: 6,8–7,8

### PaCO₂

`paco2`

mmHg · Bereich: 10–150

### HCO₃⁻

`hco3`

mEq/L · Bereich: 3–60

## Fassung der Methode

Klassische Kompensation/Winter 1967, Berend-Schema 2014; Henderson–Hasselbalch 6,1/0,03; keine Stewart-Methode

## Dokumentierte Formel

Azidämie: pH \< 7,35; Alkalämie: pH \> 7,45. Die primäre Störung erklärt die pH-Richtung. Erwartete Kompensation:

Metabolische Azidose (Winter): PaCO₂ = 1,5 × HCO₃⁻ + 8 ± 2.

Metabolische Alkalose: PaCO₂ = 40 + 0,7 × (HCO₃⁻ − 24) ± 2.

Respiratorische Azidose: HCO₃⁻ steigt um 1 mEq/L pro 10 mmHg PaCO₂ (akut) oder 3,5 mEq/L pro 10 mmHg (chronisch).

Respiratorische Alkalose: HCO₃⁻ sinkt um 2 mEq/L pro 10 mmHg (akut) oder 4 mEq/L pro 10 mmHg (chronisch).

Ein Wert außerhalb der erwarteten Kompensation weist auf eine zweite Störung hin. Die Konsistenz der drei Werte wird mit Henderson–Hasselbalch geprüft: pH = 6,1 + log\[HCO₃⁻ ÷ (0,03 × PaCO₂)\].

## Grenzen und Population

Die arterielle Blutgasanalyse verwendet pH, PaCO₂ und Bicarbonat zur Beschreibung von Mustern und näherungsweiser Kompensation; ein scheinbar normaler pH kann mit einer gemischten Störung einhergehen. Diese Oberfläche erfasst weder Natrium noch Chlorid oder Albumin und berechnet weder die Anionenlücke noch identifiziert sie jede metabolische Ursache. Die Formeln setzen einen physiologischen Kontext und Zeit für die Kompensation voraus. Zwischen Quellen bestehen Varianten: Die lokale Kompensation der chronischen respiratorischen Azidose verwendet 3,5, während die Tabelle von Berend 2014 4–5 pro 10 mmHg beschreibt; die Herkunft dieser lokalen Variante muss vor der Behauptung vollständiger Gleichwertigkeit überprüft werden.

## Referenzen

- [Berend K, de Vries APJ, Gans ROB. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014.](https://doi.org/10.1056/NEJMra1003327)

- [Albert MS, Dell RB, Winters RW. Quantitative displacement of acid-base equilibrium in metabolic acidosis. Ann Intern Med, 1967.](https://doi.org/10.7326/0003-4819-66-2-312)

- [Berend2014,NEJM,updated2014-10-16,primary mirror](https://www.docenti.unina.it/webdocenti-be/allegati/materiale-didattico/443118)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Arterielle Blutgasanalyse ohne Säure-Basen-Störung


### 2

Metabolische Azidose mit angemessener respiratorischer Kompensation

| Ergebnisdetails | |
| --- | --- |
| Erwartetes PaCO₂ (Winter: 1,5 × HCO₃⁻ + 8 ± 2) | 24 bis 28 mmHg |
| Nächster Schritt | berechnen Sie die Anionenlücke |


### 3

Metabolische Azidose mit assoziierter respiratorischer Azidose

| Ergebnisdetails | |
| --- | --- |
| Erwartetes PaCO₂ (Winter: 1,5 × HCO₃⁻ + 8 ± 2) | 24 bis 28 mmHg |
| Nächster Schritt | berechnen Sie die Anionenlücke |


### 4

Akute respiratorische Azidose

| Ergebnisdetails | |
| --- | --- |
| Erwartetes HCO₃⁻ bei akutem Verlauf (+1 pro 10 mmHg) | 26 mEq/L |
| Erwartetes HCO₃⁻ bei chronischem Verlauf (+3,5 pro 10 mmHg) | 31 mEq/L |


### 5

Metabolische Alkalose mit angemessener respiratorischer Kompensation

| Ergebnisdetails | |
| --- | --- |
| Erwartetes PaCO₂ (40 + 0,7 × ΔHCO₃⁻ ± 2) | 45 bis 49 mmHg |


### 6

Normaler pH mit respiratorischer Azidose mit metabolischer Alkalose (oder kompensierter chronischer respiratorischer Azidose): gemischte oder kompensierte Störung

