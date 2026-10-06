<!-- ELUCENIA technical documentation · gasometria-arterial · ja · no clinical/professional/rights approval -->

# 動脈血ガス分析の解釈

[条件・出典・許諾](https://elucenia.org/ja/tools/gasometria-arterial)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### pH

`ph`

範囲: 6.8–7.8

### PaCO₂

`paco2`

mmHg · 範囲: 10–150

### HCO₃⁻

`hco3`

mEq/L · 範囲: 3–60

## 方法の版

古典的代償/Winter 1967、Berend 2014方式；Henderson–Hasselbalch 6.1/0.03；Stewart法ではない

## 記載された計算式

アシデミア: pH \< 7.35; アルカレミア: pH \> 7.45. 原発性障害はpHの方向を説明します。予測代償:

代謝性アシドーシス (Winter): PaCO₂ = 1.5 × HCO₃⁻ + 8 ± 2.

代謝性アルカローシス: PaCO₂ = 40 + 0.7 × (HCO₃⁻ − 24) ± 2.

呼吸性アシドーシス: HCO₃⁻はPaCO₂が10 mmHg増えるごとに1 mEq/L増加（急性）、または10 mmHgごとに3.5 mEq/L増加（慢性）。

呼吸性アルカローシス: HCO₃⁻はPaCO₂が10 mmHg減るごとに2 mEq/L低下（急性）、または10 mmHgごとに4 mEq/L低下（慢性）。

予測代償の範囲外は第2の障害を示します。3値の整合性をHenderson–Hasselbalch式で確認します: pH = 6.1 + log\[HCO₃⁻ ÷ (0.03 × PaCO₂)\].

## 限界・対象集団

血液ガスはpH、PaCO₂、重炭酸からパターンと近似的な代償を示します。正常に見えるpHでも混合性障害が併存することがあります。この画面にはナトリウム、クロール、アルブミンの入力がなく、アニオンギャップを計算せず、代謝性の原因をすべて特定するものでもありません。式は生理学的状況と代償に必要な時間を前提とします。出典間には変法があり、ローカルの慢性呼吸性アシドーシス代償では3.5を使用する一方、Berend 2014の表では10 mmHgあたり4–5としています。完全な同等性を主張する前に、ローカル変法の出典を確認する必要があります。

## 参考文献

- [Berend K, de Vries APJ, Gans ROB. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014.](https://doi.org/10.1056/NEJMra1003327)

- [Albert MS, Dell RB, Winters RW. Quantitative displacement of acid-base equilibrium in metabolic acidosis. Ann Intern Med, 1967.](https://doi.org/10.7326/0003-4819-66-2-312)

- [Berend2014,NEJM,updated2014-10-16,primary mirror](https://www.docenti.unina.it/webdocenti-be/allegati/materiale-didattico/443118)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 記録された結果

以下の情報は、合成例に対する手法の出力を保持したものです。独立した臨床的検証を示すものではありません。

### 1

酸塩基障害のない動脈血ガス


### 2

適切な呼吸性代償を伴う代謝性アシドーシス

| 結果の詳細 | |
| --- | --- |
| 予測PaCO₂（Winter: 1,5 × HCO₃⁻ + 8 ± 2） | 24～28 mmHg |
| 次のステップ | アニオンギャップを計算する |


### 3

呼吸性アシドーシスを伴う代謝性アシドーシス

| 結果の詳細 | |
| --- | --- |
| 予測PaCO₂（Winter: 1,5 × HCO₃⁻ + 8 ± 2） | 24～28 mmHg |
| 次のステップ | アニオンギャップを計算する |


### 4

急性呼吸性アシドーシス

| 結果の詳細 | |
| --- | --- |
| 急性なら予測HCO₃⁻（10 mmHgごとに+1） | 26 mEq/L |
| 慢性なら予測HCO₃⁻（10 mmHgごとに+3,5） | 31 mEq/L |


### 5

適切な呼吸性代償を伴う代謝性アルカローシス

| 結果の詳細 | |
| --- | --- |
| 予測PaCO₂（40 + 0,7 × ΔHCO₃⁻ ± 2） | 45～49 mmHg |


### 6

正常pHで、呼吸性アシドーシスと代謝性アルカローシス（または代償された慢性呼吸性アシドーシス）：混合性または代償性の障害

