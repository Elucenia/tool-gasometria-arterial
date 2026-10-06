<!-- ELUCENIA technical documentation · gasometria-arterial · it · no clinical/professional/rights approval -->

# Interpretazione dell’emogasanalisi arteriosa

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/gasometria-arterial)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### pH

`ph`

intervallo: 6,8–7,8

### PaCO₂

`paco2`

mmHg · intervallo: 10–150

### HCO₃⁻

`hco3`

mEq/L · intervallo: 3–60

## Edizione del metodo

Compenso classico/Winter 1967, schema Berend 2014; Henderson–Hasselbalch 6,1/0,03; non Stewart

## Formula documentata

Acidemia: pH \< 7,35; alcalemia: pH \> 7,45. Il disturbo primario spiega la direzione del pH. Compenso atteso:

Acidosi metabolica (Winter): PaCO₂ = 1,5 × HCO₃⁻ + 8 ± 2.

Alcalosi metabolica: PaCO₂ = 40 + 0,7 × (HCO₃⁻ − 24) ± 2.

Acidosi respiratoria: HCO₃⁻ sale di 1 mEq/L per 10 mmHg PaCO₂ (acuta) o 3,5 mEq/L per 10 mmHg (cronica).

Alcalosi respiratoria: HCO₃⁻ scende di 2 mEq/L per 10 mmHg (acuta) o 4 mEq/L per 10 mmHg (cronica).

Un valore fuori dal compenso atteso indica un secondo disturbo. La coerenza dei tre valori è verificata con Henderson–Hasselbalch: pH = 6,1 + log\[HCO₃⁻ ÷ (0,03 × PaCO₂)\].

## Limiti e popolazione

L’emogasanalisi arteriosa usa pH, PaCO₂ e bicarbonato per descrivere quadri e compensazione approssimativa; un pH apparentemente normale può coesistere con un disturbo misto. Questa interfaccia non riceve sodio, cloro o albumina e non calcola il gap anionico né identifica tutte le cause metaboliche. Le formule presuppongono un contesto fisiologico e tempo per la compensazione. Esistono varianti tra le fonti: la compensazione locale dell’acidosi respiratoria cronica usa 3,5, mentre la tabella di Berend del 2014 descrive 4–5 per 10 mmHg; l’origine di questa variante locale deve essere verificata prima di affermare un’equivalenza integrale.

## Riferimenti

- [Berend K, de Vries APJ, Gans ROB. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014.](https://doi.org/10.1056/NEJMra1003327)

- [Albert MS, Dell RB, Winters RW. Quantitative displacement of acid-base equilibrium in metabolic acidosis. Ann Intern Med, 1967.](https://doi.org/10.7326/0003-4819-66-2-312)

- [Berend2014,NEJM,updated2014-10-16,primary mirror](https://www.docenti.unina.it/webdocenti-be/allegati/materiale-didattico/443118)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Emogasanalisi arteriosa senza disturbo acido-base


### 2

Acidosi metabolica con compensazione respiratoria adeguata

| Dettagli del risultato | |
| --- | --- |
| PaCO₂ attesa (Winter: 1,5 × HCO₃⁻ + 8 ± 2) | 24 a 28 mmHg |
| Passo successivo | calcoli il gap anionico |


### 3

Acidosi metabolica con acidosi respiratoria associata

| Dettagli del risultato | |
| --- | --- |
| PaCO₂ attesa (Winter: 1,5 × HCO₃⁻ + 8 ± 2) | 24 a 28 mmHg |
| Passo successivo | calcoli il gap anionico |


### 4

Acidosi respiratoria acuta

| Dettagli del risultato | |
| --- | --- |
| HCO₃⁻ atteso se acuta (+1 per 10 mmHg) | 26 mEq/L |
| HCO₃⁻ atteso se cronica (+3,5 per 10 mmHg) | 31 mEq/L |


### 5

Alcalosi metabolica con compensazione respiratoria adeguata

| Dettagli del risultato | |
| --- | --- |
| PaCO₂ attesa (40 + 0,7 × ΔHCO₃⁻ ± 2) | 45 a 49 mmHg |


### 6

pH normale con acidosi respiratoria con alcalosi metabolica (o acidosi respiratoria cronica compensata): disturbo misto o compensato

