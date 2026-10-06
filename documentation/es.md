<!-- ELUCENIA technical documentation · gasometria-arterial · es · no clinical/professional/rights approval -->

# Interpretación de gasometría arterial

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/gasometria-arterial)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### pH

`ph`

intervalo: 6,8–7,8

### PaCO₂

`paco2`

mmHg · intervalo: 10–150

### HCO₃⁻

`hco3`

mEq/L · intervalo: 3–60

## Edición del método

Compensación clásica/Winter 1967, esquema Berend 2014; Henderson–Hasselbalch 6,1/0,03; sin Stewart

## Fórmula documentada

Acidemia: pH \< 7,35; alcalemia: pH \> 7,45. El trastorno primario explica la dirección del pH. Compensación esperada:

Acidosis metabólica (Winter): PaCO₂ = 1,5 × HCO₃⁻ + 8 ± 2.

Alcalosis metabólica: PaCO₂ = 40 + 0,7 × (HCO₃⁻ − 24) ± 2.

Acidosis respiratoria: HCO₃⁻ sube 1 mEq/L por 10 mmHg PaCO₂ (aguda) o 3,5 mEq/L por 10 mmHg (crónica).

Alcalosis respiratoria: HCO₃⁻ baja 2 mEq/L por 10 mmHg (aguda) o 4 mEq/L por 10 mmHg (crónica).

Un valor fuera de la compensación esperada indica otro trastorno. La coherencia de los tres valores se comprueba con Henderson–Hasselbalch: pH = 6,1 + log\[HCO₃⁻ ÷ (0,03 × PaCO₂)\].

## Límites y población

La gasometría arterial utiliza pH, PaCO₂ y bicarbonato para describir patrones y compensación aproximada; un pH aparentemente normal puede coexistir con un trastorno mixto. Esta interfaz no recibe sodio, cloro ni albúmina y no calcula la brecha aniónica ni identifica todas las causas metabólicas. Las fórmulas presuponen un contexto fisiológico y tiempo para la compensación. Existen variantes entre fuentes: la compensación local de la acidosis respiratoria crónica utiliza 3,5, mientras que la tabla de Berend de 2014 describe 4–5 por 10 mmHg; debe comprobarse el origen de esta variante local antes de afirmar una equivalencia integral.

## Referencias

- [Berend K, de Vries APJ, Gans ROB. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014.](https://doi.org/10.1056/NEJMra1003327)

- [Albert MS, Dell RB, Winters RW. Quantitative displacement of acid-base equilibrium in metabolic acidosis. Ann Intern Med, 1967.](https://doi.org/10.7326/0003-4819-66-2-312)

- [Berend2014,NEJM,updated2014-10-16,primary mirror](https://www.docenti.unina.it/webdocenti-be/allegati/materiale-didattico/443118)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

La información siguiente conserva las salidas del método para ejemplos sintéticos. No constituye una validación clínica independiente.

### 1

Gasometría arterial sin trastorno ácido-base


### 2

Acidosis metabólica con compensación respiratoria adecuada

| Detalles del resultado | |
| --- | --- |
| PaCO₂ esperada (Winter: 1,5 × HCO₃⁻ + 8 ± 2) | 24 a 28 mmHg |
| Siguiente paso | calcule el anion gap |


### 3

Acidosis metabólica con acidosis respiratoria asociada

| Detalles del resultado | |
| --- | --- |
| PaCO₂ esperada (Winter: 1,5 × HCO₃⁻ + 8 ± 2) | 24 a 28 mmHg |
| Siguiente paso | calcule el anion gap |


### 4

Acidosis respiratoria aguda

| Detalles del resultado | |
| --- | --- |
| HCO₃⁻ esperado si aguda (+1 por 10 mmHg) | 26 mEq/L |
| HCO₃⁻ esperado si crónica (+3,5 por 10 mmHg) | 31 mEq/L |


### 5

Alcalosis metabólica con compensación respiratoria adecuada

| Detalles del resultado | |
| --- | --- |
| PaCO₂ esperada (40 + 0,7 × ΔHCO₃⁻ ± 2) | 45 a 49 mmHg |


### 6

pH normal con acidosis respiratoria con alcalosis metabólica (o acidosis respiratoria crónica compensada): trastorno mixto o compensado

