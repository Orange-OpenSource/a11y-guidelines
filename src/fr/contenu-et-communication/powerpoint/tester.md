---
title: "Comment tester l'accessibilité d'une présentation PowerPoint"
abstract: "Que faut-il vérifier au sujet de l'accessibilité de vos documents Powerpoint ?"
---

# Comment tester l'accessibilité d'une présentation PowerPoint

Quatres étapes sont à prévoir : 
1. Les tests automatiques
2. La vérification de la pertinence
3. La vérification de contrastes 
4. La vérification vocale

## Tests automatiques
Vous pouvez commencer vos tests avec l’outil de vérification de l’accessibilité de Microsoft Office.  
**Menu > Révision > Vérifier l’accessibilité**

<img alt="" src="/fr/contenu-et-communication/images/verif-access.png" class="img-fluid" />

Pour corriger au fur et à mesure les problèmes d'accessibilité, cocher la case `Poursuivre l’exécution du vérificateur pendant que je travaille`

L’ordre de lecture qui sera suivi par une synthèse vocale peut être vérifié depuis le volet de sélection: **menu Accueil > Organiser > Volet de sélection**.

<img alt="" src="/fr/contenu-et-communication/images/ordre-lecture.png" class="img-fluid" />

Il est important de vérifier cet ordre directement dans les masques des diapositives.

## Détection des problèmes d'accessibilité

Erreurs détectées automatiquement par le correcteur d’orthographe (**Fichier > Options > Vérification**) et le vérificateur d’accessibilité:

<div class="table-responsive">
    <table class="table">
        <caption class="visually-hidden">Quelles sont les erreurs d'accessibilités détectées automatiquement?</caption>
        <tr>
            <th class="bg-600" scope="col">Problème</th>
            <th class="bg-600" scope="col">Détecté</th>
        </tr>
        <tr>
            <td>Mise en forme par masques</td>
            <td>Non</td>
        </tr>
        <tr>
            <td>Titre de diapositives manquant</td>
            <td class="bg-supporting-green">Oui</td>
        </tr>
        <tr>
            <td>Titre de diapositives en double</td>
            <td class="bg-supporting-green">Oui</td>
        </tr>
        <tr>
            <td>Police sans sérif</td>
            <td>Non</td>
        </tr>
        <tr>
            <td>Accentuation, langue</td>
            <td class="bg-supporting-green">Oui</td>
        </tr>
        <tr>
            <td>Mise en forme du texte</td>
            <td>Non</td>
        </tr>
        <tr>
            <td>Contrastes de couleur</td>
            <td class="bg-supporting-green">Oui</td>
        </tr>
        <tr>
            <td>Libellé d'un lien hypertexte</td>
            <td>Non</td>
        </tr>
        <tr>
            <td>Images ou tableaux sans texte de remplacement</td>
            <td class="bg-supporting-green">Oui</td>
        </tr>
        <tr>
            <td>Images ou tableaux avec texte de remplacement non pertinent</td>
            <td>Non</td>
        </tr>
        <tr>
            <td>Tableaux sans entête</td>
            <td class="bg-supporting-green">Oui</td>
        </tr>
        <tr>
            <td>Sens de lecture</td>
            <td class="bg-supporting-green">Oui</td>
        </tr>
    </table>
</div>



## Vérifications des contrastes de couleurs 
Le logiciel <a lang="en" href="https://developer.paciellogroup.com/resources/contrastanalyser/">Colour Contrast Analyser</a> indique si les contrastes de couleurs utilisés sont conformes. 

<img alt="" src="/fr/contenu-et-communication/images/colourcontrast.png" class="img-fluid" />  

## Tests avec les synthèses vocales JAWS et NVDA
Afin de poursuivre vos vérifications, vous pouvez tester avec une synthèse vocale.
Ces tests permettent de naviguer dans la même configuration que les personnes malvoyantes et non-voyantes.

[Apprendre la navigation vocale avec JAWS et NVDA](/fr/web/outils/methodes-et-outils-de-test/navigation-lecteur-ecran/)

## Autres tests manuels
Les grilles suivantes au format Excel permettant de vérifier l’accessibilité de vos documents Word et PowerPoint :
- [Grille d'évaluation PowerPoint](/fr/contenu-et-communication/grille_eval_AXS_PPT_V2.xlsx) (16 Ko)
- [Grille d'évaluation Word](/fr/contenu-et-communication/grille_eval_AXS_WORD_V1.xlsx) (16 Ko)
