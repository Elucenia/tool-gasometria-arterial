<!-- ELUCENIA technical documentation · gasometria-arterial · pt-BR · no clinical/professional/rights approval -->

# Interpretação da gasometria arterial

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/gasometria-arterial)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### pH

`ph`

intervalo: 6,8–7,8

### PaCO₂

`paco2`

mmHg · intervalo: 10–150

### HCO₃⁻

`hco3`

mEq/L · intervalo: 3–60

## Edição do método

Compensaçãoclássica/Winter 1967, esquema Berend 2014; Henderson Hasselbalch 6,1/0,03; sem método Stewart

## Fórmula documentada

Acidemia: pH \< 7,35; alcalemia: pH \> 7,45. O distúrbio primário é o que explica a direção do pH. Compensação esperada:

Acidose metabólica (Winter): PaCO₂ = 1,5 × HCO₃⁻ + 8 ± 2.

Alcalose metabólica: PaCO₂ = 40 + 0,7 × (HCO₃⁻ − 24) ± 2.

Acidose respiratória: HCO₃⁻ sobe 1 mEq/L por 10 mmHg de PaCO₂ (aguda) ou 3,5 mEq/L por 10 mmHg (crônica).

Alcalose respiratória: HCO₃⁻ cai 2 mEq/L por 10 mmHg (aguda) ou 4 mEq/L por 10 mmHg (crônica).

Valor fora da compensação esperada indica um segundo distúrbio. A coerência dos três valores é conferida pela equação de Henderson-Hasselbalch: pH = 6,1 + log\[HCO₃⁻ ÷ (0,03 × PaCO₂)\].

## Limites e população

A gasometria usa pH, PaCO₂ e bicarbonato para descrever padrões e compensação aproximada; pH aparentemente normal pode coexistir com distúrbio misto. Esta interface não recebe sódio, cloro ou albumina e não calcula ânion gap nem identifica toda causa metabólica. As fórmulas pressupõem contexto fisiológico e tempo para compensação. Há variantes entre fontes: a compensação crônica da acidose respiratória local usa 3,5, enquanto a tabela de Berend 2014 descreve 4–5 por 10 mmHg; a origem dessa variante local deve ser conferida antes de afirmar equivalência integral.

## Referências

- [Berend K, de Vries APJ, Gans ROB. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014.](https://doi.org/10.1056/NEJMra1003327)

- [Albert MS, Dell RB, Winters RW. Quantitative displacement of acid-base equilibrium in metabolic acidosis. Ann Intern Med, 1967.](https://doi.org/10.7326/0003-4819-66-2-312)

- [Berend2014,NEJM,updated2014-10-16,primary mirror](https://www.docenti.unina.it/webdocenti-be/allegati/materiale-didattico/443118)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Gasometria sem distúrbio ácido-base


### 2

Acidose metabólica com compensação respiratória adequada

| Detalhes do resultado | |
| --- | --- |
| PaCO₂ esperada (Winter: 1,5 × HCO₃⁻ + 8 ± 2) | 24 a 28 mmHg |
| Próximo passo | calcule o ânion gap |


### 3

Acidose metabólica com acidose respiratória associada

| Detalhes do resultado | |
| --- | --- |
| PaCO₂ esperada (Winter: 1,5 × HCO₃⁻ + 8 ± 2) | 24 a 28 mmHg |
| Próximo passo | calcule o ânion gap |


### 4

Acidose respiratória aguda

| Detalhes do resultado | |
| --- | --- |
| HCO₃⁻ esperado se aguda (+1 por 10 mmHg) | 26 mEq/L |
| HCO₃⁻ esperado se crônica (+3,5 por 10 mmHg) | 31 mEq/L |


### 5

Alcalose metabólica com compensação respiratória adequada

| Detalhes do resultado | |
| --- | --- |
| PaCO₂ esperada (40 + 0,7 × ΔHCO₃⁻ ± 2) | 45 a 49 mmHg |


### 6

pH normal com acidose respiratória com alcalose metabólica (ou acidose respiratória crônica compensada): distúrbio misto ou compensado

