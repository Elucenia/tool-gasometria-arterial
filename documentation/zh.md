<!-- ELUCENIA technical documentation · gasometria-arterial · zh · no clinical/professional/rights approval -->

# 动脉血气分析解读

[条件、来源与许可](https://elucenia.org/zh/tools/gasometria-arterial)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### pH

`ph`

范围: 6.8–7.8

### PaCO₂

`paco2`

mmHg · 范围: 10–150

### HCO₃⁻

`hco3`

mEq/L · 范围: 3–60

## 方法版本

经典代偿/Winter 1967，Berend 2014方案；Henderson–Hasselbalch 6.1/0.03；非Stewart法

## 已记录的公式

酸血症: pH \< 7.35; 碱血症: pH \> 7.45. 原发紊乱应解释pH方向。预计代偿:

代谢性酸中毒 (Winter): PaCO₂ = 1.5 × HCO₃⁻ + 8 ± 2.

代谢性碱中毒: PaCO₂ = 40 + 0.7 × (HCO₃⁻ − 24) ± 2.

呼吸性酸中毒: HCO₃⁻ 增加 1 mEq/L 每 10 mmHg PaCO₂ (急性) 或 3.5 mEq/L 每 10 mmHg (慢性).

呼吸性碱中毒: HCO₃⁻ 减少 2 mEq/L 每 10 mmHg (急性) 或 4 mEq/L 每 10 mmHg (慢性).

值超出预计代偿提示第二种紊乱。用Henderson–Hasselbalch方程核查三项数值的一致性: pH = 6.1 + log\[HCO₃⁻ ÷ (0.03 × PaCO₂)\].

## 限制与适用人群

血气工具使用pH、PaCO₂及碳酸氢盐描述模式和近似代偿；看似正常的pH也可能伴有混合性紊乱。此界面不输入钠、氯或白蛋白，不计算阴离子间隙，也不能识别所有代谢性原因。公式假定相应生理背景及足够代偿时间。来源存在变体：本地慢性呼吸性酸中毒代偿使用3.5，而Berend 2014表格描述每10 mmHg为4–5；在宣称完全等同前须核对该本地变体的来源。

## 参考文献

- [Berend K, de Vries APJ, Gans ROB. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014.](https://doi.org/10.1056/NEJMra1003327)

- [Albert MS, Dell RB, Winters RW. Quantitative displacement of acid-base equilibrium in metabolic acidosis. Ann Intern Med, 1967.](https://doi.org/10.7326/0003-4819-66-2-312)

- [Berend2014,NEJM,updated2014-10-16,primary mirror](https://www.docenti.unina.it/webdocenti-be/allegati/materiale-didattico/443118)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
