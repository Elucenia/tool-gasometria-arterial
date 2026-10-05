<!-- ELUCENIA technical documentation · gasometria-arterial · fr · no clinical/professional/rights approval -->

# Interprétation des gaz du sang artériel

[conditions, sources et autorisations](https://elucenia.org/fr/outils/gasometria-arterial)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### pH

`ph`

intervalle: 6,8–7,8

### PaCO₂

`paco2`

mmHg · intervalle: 10–150

### HCO₃⁻

`hco3`

mEq/L · intervalle: 3–60

## Édition de la méthode

Compensation classique/Winter 1967, schéma Berend 2014 ; Henderson–Hasselbalch 6,1/0,03 ; sans Stewart

## Formule documentée

Acidémie: pH \< 7,35; alcalémie: pH \> 7,45. Le trouble primaire explique la direction du pH. Compensation attendue:

Acidose métabolique (Winter): PaCO₂ = 1,5 × HCO₃⁻ + 8 ± 2.

Alcalose métabolique: PaCO₂ = 40 + 0,7 × (HCO₃⁻ − 24) ± 2.

Acidose respiratoire: HCO₃⁻ augmente de 1 mEq/L par 10 mmHg PaCO₂ (aiguë) ou 3,5 mEq/L par 10 mmHg (chronique).

Alcalose respiratoire: HCO₃⁻ diminue de 2 mEq/L par 10 mmHg (aiguë) ou 4 mEq/L par 10 mmHg (chronique).

Une valeur hors compensation attendue indique un second trouble. La cohérence des trois valeurs est vérifiée par Henderson–Hasselbalch: pH = 6,1 + log\[HCO₃⁻ ÷ (0,03 × PaCO₂)\].

## Limites et population

La gazométrie artérielle utilise le pH, la PaCO₂ et le bicarbonate pour décrire des profils et une compensation approximative ; un pH apparemment normal peut coexister avec un trouble mixte. Cette interface ne reçoit ni sodium, ni chlorure, ni albumine et ne calcule pas le trou anionique ni n’identifie toutes les causes métaboliques. Les formules supposent un contexte physiologique et un délai permettant la compensation. Il existe des variantes entre sources : la compensation locale de l’acidose respiratoire chronique utilise 3,5, tandis que le tableau de Berend 2014 indique 4–5 par 10 mmHg ; l’origine de cette variante locale doit être vérifiée avant d’affirmer une équivalence intégrale.

## Références

- [Berend K, de Vries APJ, Gans ROB. Physiological approach to assessment of acid-base disturbances. N Engl J Med, 2014.](https://doi.org/10.1056/NEJMra1003327)

- [Albert MS, Dell RB, Winters RW. Quantitative displacement of acid-base equilibrium in metabolic acidosis. Ann Intern Med, 1967.](https://doi.org/10.7326/0003-4819-66-2-312)

- [Berend2014,NEJM,updated2014-10-16,primary mirror](https://www.docenti.unina.it/webdocenti-be/allegati/materiale-didattico/443118)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
