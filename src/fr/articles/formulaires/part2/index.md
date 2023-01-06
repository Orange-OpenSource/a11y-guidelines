---
title: "Formulaire partie 2 - Soumettre son formulaire"
abstract: "Faire un formulaire accessible, partie 2 : Soumettre son formulaire, champ obligatoire, gestion des erreurs et l'importance de l'attribut autocomplete"
date: "2023-01-16"
tags:
  - web
  - intermediate
  - component
js: 
- script.js
titleBeforeTag: true
---

## Introduction

Nous avons vu dans la première partie comment <a href="../part1/">structurer son formulaire</a> en respectant les critères d'accessibilités.

Dans cette deuxième partie, nous allons étudier la soumission du formulaire et ses étapes de validations.

Nous continuerons nos exemples à partir de notre formulaire d'inscription de la partie 1.

Dans cet exemple, nous avons utilisé <a href="http://boosted.orange.com/" target="_blank">la librairie Boosted</a>. Celle-ci permet d’obtenir des formulaires dont le design est conforme à la charte Orange.

## Soumission d'un formulaire

### Champ obligatoire

Dans les formulaires, il est fréquent que des champs soient obligatoires. Ces champs doivent être indiqués clairement aux utilisateurs.

Pour réaliser ceci plusieurs solutions existe : 

<ul>
  <li>de manière programmatique, il faut utiliser l'attribut <code>required</code> ou <code>aria-required="true"</code> dans la balise <code>input</code> de nos champs, l'utilisation de ces attributs permettra aux technologies d'assistance que le champ est obligatoire.</li>
  <li>il faut aussi informer les utilisateurs n'utilisant pas de technologies d'assistance que le champ est obligatoire, il faut donc rajouter une identification visuelle qui ne repose pas uniquement sur la couleur, par exemple (obligatoire), si cette identification n'est pas réalisée de manière textuelle explicite, par exemple un astérisque, il faut expliquer la signification, "Tous les champs obligatoires sont marqués d'un *", qui sera placé au début du formulaire.</li>
</ul>

#### Exemple

Dans notre exemple d'inscription, plusieurs champs peuvent être considérés comme obligatoire afin de valider son inscription : l'email, le mot de passe, le prénom et le nom.

Il faut donc les spécifier aux utilisateurs.

<div class="col-md-8">
  <form id="formulaire" class="border border-secondary p-3 my-2">
    <p>Tous les champs obligatoires sont marqués d'un *</p>
    <div class="mb-2">
      <label for="email" class="form-label">Email * </label>
      <input type="text" class="form-control" id="email" required/>
    </div>
    <label for="password" class="form-label">Mot de passe *</label>
    <div class="mb-2 input-group">
      <input type="password" class="form-control" id="password" required aria-describedby="passwordHelpBlock"/>
      <span class="input-group-text">
        <button type="button" class="btn btn-icon btn-secondary btn-sm" id="password_visibility" title="Afficher le mot de passe" >
          <svg aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1000 1000">
            <defs>
              <style>
                .cls-1 {
                  fill-rule: evenodd;
                }
              </style>
            </defs>
            <path class="cls-1" d="M513.081,250.129c-4.017,0-8.041-.129-12.081-0.129s-8.064.129-12.081,0.129C301.335,250.129,111.491,382.343,50,500c61.491,117.656,249.335,249.871,436.919,249.871,4.017,0,8.04.129,12.081,0.129s8.064-.129,12.081-0.129C698.665,749.871,888.51,617.656,950,500,888.51,382.343,700.665,250.129,513.081,250.129ZM498.62,680a180,180,0,1,1,180-180A180,180,0,0,1,498.62,680Zm-378.2-179.963c29.782-41.595,77.4-84.081,132.916-117.816a545.263,545.263,0,0,1,55.918-29.695,239.848,239.848,0,0,0,.78,295.942,537.117,537.117,0,0,1-57.553-30.6C197.469,584.226,150.153,541.734,120.417,500.034Zm626.25,117.747a544.106,544.106,0,0,1-60.236,31.655,239.784,239.784,0,0,0-.761-299.823,536.07,536.07,0,0,1,61.852,32.517c55.01,33.642,102.326,76.136,132.061,117.836C849.8,541.564,802.185,584.045,746.667,617.781ZM597.931,453.153a48.227,48.227,0,1,1-62.472-56.6A109.731,109.731,0,1,0,597.931,453.153Z" />
          </svg>
        </button>
      </span>
    </div>
    <div id="passwordHelpBlock" class="form-text">
        Votre mot de passe doit contenir minimum 6 caractères.
    </div>
    <div class="mb-2">
      <label for="name" class="form-label">Nom *</label>
      <input type="text" class="form-control" id="name" required/>
    </div>
    <div class="mb-2">
      <label for="firstname" class="form-label">Prénom * </label>
      <input type="text" class="form-control" id="firstname" required/>
    </div>
    <button type="submit" class="btn btn-primary">Soumettre</button>
  </form>
</div>

  Exemple de code&nbsp;:

<pre>
  <code class="html">
  &lt;div class="col-md-8"&gt;
    &lt;form id="formulaire" class="border border-secondary p-3 my-2"&gt;
      &lt;p&gt;Tous les champs obligatoires sont marqués d'un *&lt;/p&gt;
      &lt;div class="mb-2"&gt;
        &lt;label for="email" class="form-label"&gt;Email <span class="important">*</span> &lt;/label&gt;
        &lt;input type="text" class="form-control" id="email" <span class="important">required</span>/&gt;
      &lt;/div&gt;
      &lt;label for="password" class="form-label"&gt;Mot de passe *&lt;/label&gt;
      &lt;div class="mb-2 input-group"&gt;
        &lt;input type="password" class="form-control" id="password" required aria-describedby="passwordHelpBlock"/&gt;
        &lt;span class="input-group-text"&gt;
          &lt;button type="button" class="btn btn-icon btn-secondary btn-sm" id="password_visibility" title="Afficher le mot de passe" &gt;
            &lt;svg aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1000 1000"&gt;&lt;/svg&gt;
          &lt;/button&gt;
        &lt;/span&gt;
      &lt;/div&gt;
      &lt;div id="passwordHelpBlock" class="form-text"&gt;
          Votre mot de passe doit contenir minimum 6 caractères.
      &lt;/div&gt;
      &lt;div class="mb-2"&gt;
        &lt;label for="name" class="form-label"&gt;Nom *&lt;/label&gt;
        &lt;input type="text" class="form-control" id="name" required/&gt;
      &lt;/div&gt;
      &lt;div class="mb-2"&gt;
        &lt;label for="firstname" class="form-label"&gt;Prénom * &lt;/label&gt;
        &lt;input type="text" class="form-control" id="firstname" required/&gt;
      &lt;/div&gt;
      &lt;button type="submit" class="btn btn-primary"&gt;Soumettre&lt;/button&gt;
    &lt;/form&gt;
  &lt;/div&gt;
  </code>
</pre>

### Gestion des erreurs

Lors de la validation, si des champs obligatoires ne sont pas renseignés, ou si le format de la donnée saisie n'est pas valide, il faut prévenir l'utilisateur.

Il faut :

<ul>
  <li>Utiliser l'attribut <code>aria-invalid="true"</code> pour indiquer une erreur de saisie</li>
  <li>Afficher des messages d'erreurs explicites</li>
  <li>Si besoin, suggérer des corrections</li>
</ul>

Si des messages d'erreurs empêchent la validation du formulaire, plutôt que de lister les erreurs au début du formulaire dans une bannière (voir ci-dessus), on peut, pour chaque champ en erreur avertir l’utilisateur.

Pour chaque champ en erreur, il faut que nos messages soit explicites, ce qui signifie : 

<ul>
  <li>Soyez clair et non ambigu ("champ invalide" ne suffit pas, préciser quel champ est invalide)</li>
  <li>Soyez précis et pertinent</li>
  <li>Donner des pistes de corrections et moyens de corriger</li>
  <li>Assurez-vous que les erreurs sont sous forme de texte, éviter les majuscules.</li>
  <li>Ne vous contentez pas d'utiliser des indicateurs visuels ou seulement la couleur pour signaler les erreurs.</li>
  <li>Laisser actif en toute circonstance le bouton d'envoi. Certains sites Web activent le bouton d'envoi que si le formulaire est correctement rempli, c'est une mauvaise idée.</li>
  <li>Fournissez les instructions nécessaires et soyez aussi précis que possible sur les erreurs commises afin de faciliter remplissage des champs par les utilisateurs.</li>
  <li>Assurez-vous que les erreurs sont visuellement identifiables sur la page Web.</li>
</ul>

#### Exemple

Dans notre exemple d'inscription, plusieurs champs peuvent être en erreur :

<ul>
  <li>les champs obligatoires, il faudra préciser quel champ obligatoire est en erreur</li>
  <li>les champs nécessitant un format de donnée précis, comme l'email . Dans le message d'erreur, nous préciserons le champ en erreur ainsi qu'une aide à la correction</li>
</ul>

<div class="col-md-8">
  <form id="formulaire_2" class="border border-secondary p-3 my-2">
    <p>Tous les champs obligatoires sont marqués d'un *</p>
    <div class="mb-2">
      <label for="email_2" class="form-label">Email *</label>
      <input type="text" class="form-control" id="email_2" required/>
      <div id="erroremailDiv" class="alert alert-danger alert-sm d-none">
        <span class="alert-icon"><span class="visually-hidden">Error</span></span>
        <p id="erroremail1">Le champ email est obligatoire</p>
      </div>
      <div id="erroremailDiv2" class="alert alert-danger alert-sm d-none">
        <span class="alert-icon"><span class="visually-hidden">Error</span></span>
        <p id="erroremail2">Veuillez renseigner un Email valide (nomprenom@gmail.com)</p>
      </div>
    </div>
    <label for="password_2" class="form-label">Mot de passe *</label>
    <div class="mb-2 input-group">
      <input type="password" class="form-control" id="password_2" aria-describedby="passwordHelpBlock_2" required/>
      <span class="input-group-text">
        <button type="button" class="btn btn-icon btn-secondary btn-sm" id="password_visibility_2" title="Afficher le mot de passe" >
          <svg aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1000 1000">
            <defs>
              <style>
                .cls-1 {
                  fill-rule: evenodd;
                }
              </style>
            </defs>
            <path class="cls-1" d="M513.081,250.129c-4.017,0-8.041-.129-12.081-0.129s-8.064.129-12.081,0.129C301.335,250.129,111.491,382.343,50,500c61.491,117.656,249.335,249.871,436.919,249.871,4.017,0,8.04.129,12.081,0.129s8.064-.129,12.081-0.129C698.665,749.871,888.51,617.656,950,500,888.51,382.343,700.665,250.129,513.081,250.129ZM498.62,680a180,180,0,1,1,180-180A180,180,0,0,1,498.62,680Zm-378.2-179.963c29.782-41.595,77.4-84.081,132.916-117.816a545.263,545.263,0,0,1,55.918-29.695,239.848,239.848,0,0,0,.78,295.942,537.117,537.117,0,0,1-57.553-30.6C197.469,584.226,150.153,541.734,120.417,500.034Zm626.25,117.747a544.106,544.106,0,0,1-60.236,31.655,239.784,239.784,0,0,0-.761-299.823,536.07,536.07,0,0,1,61.852,32.517c55.01,33.642,102.326,76.136,132.061,117.836C849.8,541.564,802.185,584.045,746.667,617.781ZM597.931,453.153a48.227,48.227,0,1,1-62.472-56.6A109.731,109.731,0,1,0,597.931,453.153Z" />
          </svg>
        </button>
      </span>
    </div>
    <div id="errorpasswordDiv" class="alert alert-danger alert-sm d-none">
        <span class="alert-icon"><span class="visually-hidden">Error</span></span>
        <p id="errorpassword1">Le champ Mot de passe est obligatoire</p>
      </div>
      <div id="errorpasswordDiv2" class="alert alert-danger alert-sm d-none">
        <span class="alert-icon"><span class="visually-hidden">Error</span></span>
        <p id="errorpassword2">Veuillez renseigner un Mot de passe valide (6 caractères minimum)</p>
      </div>
    <div id="passwordHelpBlock_2" class="form-text">
        Votre mot de passe doit contenir minimum 6 caractères.
    </div>
    <div class="mb-2">
      <label for="name_2" class="form-label">Nom *</label>
      <input type="text" class="form-control" id="name_2" required/>
      <div id="errorname" class="alert alert-danger alert-sm d-none">
        <span class="alert-icon"><span class="visually-hidden">Error</span></span>
        <p id="errorname1">Le champ Nom est obligatoire</p>
      </div>
    </div>
    <div class="mb-2">
      <label for="firstname_2" class="form-label">Prénom *</label>
      <input type="text" class="form-control" id="firstname_2" required/>
      <div id="errorfirstname" class="alert alert-danger alert-sm d-none">
        <span class="alert-icon"><span class="visually-hidden">Error</span></span>
        <p id="errorfirstname1">Le champ Prénom est obligatoire</p>
      </div>
    </div>
    <fieldset>
      <legend>Genre</legend>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_2" id="M_2" value="M" selected>
        <label class="form-check-label" for="M_2">M</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_2" id="Mme_2" value="Mme">
        <label class="form-check-label" for="Mme_2">Mme</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_2" id="Non-binaire_2" value="Non-binaire" >
        <label class="form-check-label" for="Non-binaire_2">Non-binaire</label>
      </div>
    </fieldset>
    <div class="mb-2">
      <label for="adresse_2" class="form-label">Adresse</label>
      <input type="text" class="form-control" id="adresse_2"/>
    </div>
    <div class="mb-2">
      <label for="adresse2_2" class="form-label">Complément d'adresse</label>
      <input type="text" class="form-control" id="adresse2_2"/>
    </div>
    <div class="mb-2">
      <label for="ville_2" class="form-label">Ville</label>
      <input type="text" class="form-control" id="ville_2"/>
    </div>
    <div class="mb-2">
      <label for="cp_2" class="form-label">Code postal</label>
      <input type="text" class="form-control" id="cp_2"/>
    </div>
     <button id="submit" class="btn btn-primary">Soumettre</button>
     <div id="alertsucces" class="alert alert-success d-none" role="alert">
      <span class="alert-icon"><span class="visually-hidden">Success</span></span>
      <p>La validation du formulaire est réussi.</p>
    </div>

  </form>
</div>

Dans l'exemple ci-dessus :

<ul>
  <li>Les champs obligatoires qui ne sont pas remplis ont des messages d'erreurs pertinents et uniques (exemple : Le champ email est obligatoire)</li>
  <li>Les champs avec une entrée invalide ont un message sont précis et donne des suggestions de correction (exemple : Veuillez renseigner un Email valide (nomprenom@gmail.com))</li>
  <li>Les messages d'erreurs sont liés au champ grâce à l'attribut <code>aria-describedby</code> ou <code>aria-labelledby</code>, ce qui permettra aux technologies d'assistances de restituer l'information</li>
  <li>Le focus clavier est mis sur le premier champ en erreur afin d'éviter à l'utilisateur de remonter tous les formulaires</li>
</ul>

### Utilisation de l'attribut autocomplete

L'attribut <code>autocomplete</code> permet de faciliter le remplissage des champs qui contiennent une information personnelle. Tous les champs dont le type est listé dans <a href="https://www.w3.org/TR/WCAG21/#input-purposes" lang="en">7. InputPurposes for User Interface Components</a> doivent contenir l'attribut <code>autocomplete</code>. 

Dans notre exemple d'inscription les champs ci-dessous devront avoir un attribut <code>autocomplete</code> :

<ul>
  <li>Email avec <code>autocomplete="email"</code></li>
  <li>Mot de passe avec <code>autocomplete="new-password"</code></li>
  <li>Nom avec <code>autocomplete="name"</code></li>
  <li>Prénom avec <code>autocomplete="given-name"</code></li>
</ul>

## Exemple complet


Le code HTML et Javascript complet qui nous a permis de réaliser ce formulaire d'inscription accessible.

<pre>
  <code class="html">
  &lt;div class="col-md-8"&gt;
    &lt;form id="formulaire" class="border border-secondary p-3 my-2"&gt;
      &lt;p&gt;Tous les champs obligatoires sont marqués d'un *&lt;/p&gt;
      &lt;div class="mb-2"&gt;
        &lt;label for="email" class="form-label"&gt;Email *&lt;/label&gt;
        &lt;input type="text" class="form-control" id="email" autocomplete="email" required/&gt;
        &lt;div id="erroremailDiv" class="alert alert-danger alert-sm d-none"&gt;
          &lt;span class="alert-icon"&gt;&lt;span class="visually-hidden"&gt;Error&lt;/span&gt;&lt;/span&gt;
          &lt;p id="erroremail1"&gt;Le champ email est obligatoire&lt;/p&gt;
        &lt;/div&gt;
        &lt;div id="erroremailDiv2" class="alert alert-danger alert-sm d-none"&gt;
          &lt;span class="alert-icon"&gt;&lt;span class="visually-hidden"&gt;Error&lt;/span&gt;&lt;/span&gt;
          &lt;p id="erroremail2"&gt;Veuillez renseigner un Email valide (nomprenom@gmail.com)&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;label for="password" class="form-label"&gt;Mot de passe *&lt;/label&gt;
      &lt;div class="mb-2 input-group"&gt;
        &lt;input type="password" class="form-control" id="password" aria-describedby="passwordHelpBlock" autocomplete="new-password" required/&gt;
        &lt;span class="input-group-text"&gt;
          &lt;button type="button" class="btn btn-icon btn-secondary btn-sm" id="password_visibility" title="Afficher le mot de passe" &gt;
            &lt;svg aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1000 1000"&gt;&lt;/svg&gt;
          &lt;/button&gt;
        &lt;/span&gt;
      &lt;/div&gt;
      &lt;div id="errorpasswordDiv" class="alert alert-danger alert-sm d-none"&gt;
          &lt;span class="alert-icon"&gt;&lt;span class="visually-hidden"&gt;Error&lt;/span&gt;&lt;/span&gt;
          &lt;p id="errorpassword1"&gt;Le champ Mot de passe est obligatoire&lt;/p&gt;
        &lt;/div&gt;
        &lt;div id="errorpasswordDiv2" class="alert alert-danger alert-sm d-none"&gt;
          &lt;span class="alert-icon"&gt;&lt;span class="visually-hidden"&gt;Error&lt;/span&gt;&lt;/span&gt;
          &lt;p id="errorpassword2"&gt;Veuillez renseigner un Mot de passe valide (6 caractères minimum)&lt;/p&gt;
        &lt;/div&gt;
      &lt;div id="passwordHelpBlock" class="form-text"&gt;
          Votre mot de passe doit contenir minimum 6 caractères.
      &lt;/div&gt;
      &lt;div class="mb-2"&gt;
        &lt;label for="name" class="form-label"&gt;Nom *&lt;/label&gt;
        &lt;input type="text" class="form-control" id="name" autocomplete="name" required/&gt;
        &lt;div id="errorname" class="alert alert-danger alert-sm d-none"&gt;
          &lt;span class="alert-icon"&gt;&lt;span class="visually-hidden"&gt;Error&lt;/span&gt;&lt;/span&gt;
          &lt;p id="errorname1"&gt;Le champ Nom est obligatoire&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="mb-2"&gt;
        &lt;label for="firstname" class="form-label"&gt;Prénom *&lt;/label&gt;
        &lt;input type="text" class="form-control" id="firstname" autocomplete="given-name" required/&gt;
        &lt;div id="errorfirstname" class="alert alert-danger alert-sm d-none"&gt;
          &lt;span class="alert-icon"&gt;&lt;span class="visually-hidden"&gt;Error&lt;/span&gt;&lt;/span&gt;
          &lt;p id="errorfirstname1"&gt;Le champ Prénom est obligatoire&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;fieldset&gt;
        &lt;legend&gt;Genre&lt;/legend&gt;
        &lt;div class="form-check form-check-inline"&gt;
          &lt;input class="form-check-input" type="radio" name="inlineRadioOptions" id="M" value="M" selected&gt;
          &lt;label class="form-check-label" for="M"&gt;M&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="form-check form-check-inline"&gt;
          &lt;input class="form-check-input" type="radio" name="inlineRadioOptions" id="Mme" value="Mme"&gt;
          &lt;label class="form-check-label" for="Mme"&gt;Mme&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="form-check form-check-inline"&gt;
          &lt;input class="form-check-input" type="radio" name="inlineRadioOptions" id="Non-binaire" value="Non-binaire" &gt;
          &lt;label class="form-check-label" for="Non-binaire"&gt;Non-binaire&lt;/label&gt;
        &lt;/div&gt;
      &lt;/fieldset&gt;
      &lt;div class="mb-2"&gt;
        &lt;label for="adresse" class="form-label"&gt;Adresse&lt;/label&gt;
        &lt;input type="text" class="form-control" id="adresse"/&gt;
      &lt;/div&gt;
      &lt;div class="mb-2"&gt;
        &lt;label for="adresse2" class="form-label"&gt;Complément d'adresse&lt;/label&gt;
        &lt;input type="text" class="form-control" id="adresse2"/&gt;
      &lt;/div&gt;
      &lt;div class="mb-2"&gt;
        &lt;label for="ville" class="form-label"&gt;Ville&lt;/label&gt;
        &lt;input type="text" class="form-control" id="ville"/&gt;
      &lt;/div&gt;
      &lt;div class="mb-2"&gt;
        &lt;label for="cp" class="form-label"&gt;Code postal&lt;/label&gt;
        &lt;input type="text" class="form-control" id="cp"/&gt;
      &lt;/div&gt;
      &lt;button id="submit" class="btn btn-primary"&gt;Soumettre&lt;/button&gt;
      &lt;div id="alertsucces" class="alert alert-success d-none" role="alert"&gt;
        &lt;span class="alert-icon"&gt;&lt;span class="visually-hidden"&gt;Success&lt;/span&gt;&lt;/span&gt;
        &lt;p&gt;La validation du formulaire est réussi.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/form&gt;
  &lt;/div&gt;
  </code>
</pre>

<pre>
  <code class="javascript">
  document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById("password_visibility").onclick = function (e){
        let password = document.getElementById("password");
        if(password.type=="password"){
            password.type="text";
            this.title ="Cacher le mot de passe";
        }
        else{
            password.type="password";
            this.title ="Afficher le mot de passe";
        }
    }

    document.getElementById("submit").onclick = function (e){
        e.preventDefault();

        let error=false;

        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let name = document.getElementById("name");
        let firstname = document.getElementById("firstname");

        if(firstname.value==""){
            error=invalid(firstname,"errorfirstname1");
            document.getElementById("errorfirstname").classList.remove("d-none");

        }
        else{
            valid(firstname);
            document.getElementById("errorfirstname").classList.add("d-none")
        }

        if(name.value==""){
            error=invalid(name,"errorname1");
            document.getElementById("errorname").classList.remove("d-none");
        }
        else{
            valid(name);
            document.getElementById("errorname").classList.add("d-none")
        }

        if(password.value==""){
            error=invalid(password,"errorpassword1 passwordHelpBlock");
            document.getElementById("errorpasswordDiv").classList.remove("d-none");
        }
        else{
            if(password.value.length>=6){
                valid(password);
                document.getElementById("errorpasswordDiv").classList.add("d-none")
                document.getElementById("errorpasswordDiv2").classList.add("d-none")
                password.setAttribute("aria-describedby", "passwordHelpBlock");
            }
            else{
                error=invalid(password,"errorpassword2 passwordHelpBlock");
                document.getElementById("errorpasswordDiv").classList.add("d-none")
                document.getElementById("errorpasswordDiv2").classList.remove("d-none");
            }   
        }
        if(email.value==""){
            error=invalid(email,"erroremail1");
            document.getElementById("erroremailDiv").classList.remove("d-none");
        }
        else{
            if(validateEmail(email.value)){
                valid(email);
                document.getElementById("erroremailDiv").classList.add("d-none")
                document.getElementById("erroremailDiv2").classList.add("d-none")
            }
            else{
                error=invalid(email,"erroremail2");
                document.getElementById("erroremailDiv").classList.add("d-none")
                document.getElementById("erroremailDiv2").classList.remove("d-none");
            }
            
        }

        if(error){
            document.getElementById("alertsucces").classList.add("d-none")
        }
        else{
            document.getElementById("alertsucces").classList.remove("d-none")
        }
    }

    function valid (element){
        element.setAttribute("aria-invalid", false)
        element.classList.remove("is-invalid");
        element.removeAttribute("aria-describedby")
    }

    function invalid(element,errorDiv){
        element.setAttribute("aria-invalid", true);
        element.classList.add("is-invalid");
        element.setAttribute("aria-describedby", errorDiv);
        element.focus();
        return true;
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
})
  </code>
</pre>

## Lien vers la première partie

<a href="../part1/">Formulaire partie 1 - Structurer son formulaire</a>