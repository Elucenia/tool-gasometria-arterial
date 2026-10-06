<!-- ELUCENIA technical documentation · gasometria-arterial · en · no clinical/professional/rights approval -->

# Arterial blood gas interpretation

[conditions, sources and permissions](https://elucenia.org/en/tools/gasometria-arterial)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### pH

`ph`

range: 6.8–7.8

### PaCO₂

`paco2`

mmHg · range: 10–150

### HCO₃⁻

`hco3`

mEq/L · range: 3–60

## Method edition

Classical compensation/Winter 1967, Berend 2014 scheme; Henderson–Hasselbalch 6.1/0.03; not Stewart

## Documented formula

Acidemia: pH \< 7.35; alkalemia: pH \> 7.45. The primary disorder explains the pH direction. Expected compensation:

Metabolic acidosis (Winter): PaCO₂ = 1.5 × HCO₃⁻ + 8 ± 2.

Metabolic alkalosis: PaCO₂ = 40 + 0.7 × (HCO₃⁻ − 24) ± 2.

Respiratory acidosis: HCO₃⁻ rises 1 mEq/L per 10 mmHg PaCO₂ (acute) or 3.5 mEq/L per 10 mmHg (chronic).

Respiratory alkalosis: HCO₃⁻ falls 2 mEq/L per 10 mmHg (acute) or 4 mEq/L per 10 mmHg (chronic).

A value outside expected compensation indicates a second disorder. Consistency of the three values is checked with Henderson–Hasselbalch: pH = 6.1 + log\[HCO₃⁻ ÷ (0.03 × PaCO₂)\].

## Limits and population

Arterial blood gas analysis uses pH, PaCO₂ and bicarbonate to describe patterns and approximate compensation; an apparently normal pH can coexist with a mixed disorder. This interface does not accept sodium, chloride or albumin and does not calculate the anion gap or identify every metabolic cause. The formulas assume a physiological context and sufficient time for compensation. Variants exist between sources: local compensation for chronic respiratory acidosis uses 3.5, whereas the Berend 2014 table describes 4–5 per 10 mmHg; the origin of this local variant must be checked before complete equivalence is claimed.

## References

- [Berend K, de Vries APJ, Gans ROB. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014.](https://doi.org/10.1056/NEJMra1003327)

- [Albert MS, Dell RB, Winters RW. Quantitative displacement of acid-base equilibrium in metabolic acidosis. Ann Intern Med, 1967.](https://doi.org/10.7326/0003-4819-66-2-312)

- [Berend2014,NEJM,updated2014-10-16,primary mirror](https://www.docenti.unina.it/webdocenti-be/allegati/materiale-didattico/443118)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

Arterial blood gas without acid-base disorder


### 2

Metabolic acidosis with adequate respiratory compensation

| Result details | |
| --- | --- |
| Expected PaCO₂ (Winter: 1,5 × HCO₃⁻ + 8 ± 2) | 24 to 28 mmHg |
| Next step | calculate the anion gap |


### 3

Metabolic acidosis with associated respiratory acidosis

| Result details | |
| --- | --- |
| Expected PaCO₂ (Winter: 1,5 × HCO₃⁻ + 8 ± 2) | 24 to 28 mmHg |
| Next step | calculate the anion gap |


### 4

Acute respiratory acidosis

| Result details | |
| --- | --- |
| Expected HCO₃⁻ if acute (+1 per 10 mmHg) | 26 mEq/L |
| Expected HCO₃⁻ if chronic (+3,5 per 10 mmHg) | 31 mEq/L |


### 5

Metabolic alkalosis with adequate respiratory compensation

| Result details | |
| --- | --- |
| Expected PaCO₂ (40 + 0,7 × ΔHCO₃⁻ ± 2) | 45 to 49 mmHg |


### 6

Normal pH with respiratory acidosis with metabolic alkalosis (or compensated chronic respiratory acidosis): mixed or compensated disorder

