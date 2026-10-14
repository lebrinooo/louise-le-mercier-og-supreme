# Modifier ton portfolio avec Jules

Tu n’as pas besoin de savoir coder. Le système comporte seulement trois éléments :

- **GitHub** garde les fichiers et l’historique. C’est la sauvegarde du site.
- **Jules** est l’assistant IA qui modifie les fichiers à ta place.
- **Vercel** fabrique une version de test, puis publie le site automatiquement. Tu n’as pas besoin de compte Vercel.

## Première connexion, une seule fois

1. Ouvre <https://jules.google.com/> avec ton compte Google.
2. Connecte ton compte GitHub `Louise-lm` si Jules le demande.
3. Autorise le dépôt `louise-le-mercier-og-supreme`.
4. Dans Jules, choisis ce dépôt avec `main` comme point de départ.

Tu ne devras plus refaire cette configuration.

## Faire une modification

1. Dans Jules, ouvre le dépôt `louise-le-mercier-og-supreme` avec `main` comme point de départ.
2. Colle le prompt ci-dessous et remplace seulement la dernière ligne par ta demande.
3. Clique sur **Give me a plan**.
4. Lis le résumé. S’il correspond à ta demande, clique sur **Approve plan**.
5. Quand Jules a fini, vérifie qu’il indique que `npm test` passe, puis clique sur **Create branch**. Le nom de la branche ne doit pas être `main` ni `LOUISE`.
6. Sur GitHub, ouvre la pull request et vérifie cette phrase : la branche créée par Jules veut fusionner ses changements **into main**. Si `main` apparaît à gauche de la flèche, arrête-toi et demande à Jules de corriger le sens.
7. Ouvre la **Vercel Preview** indiquée sur GitHub. Regarde la page sur ordinateur et sur téléphone.
8. Si tout est correct, clique sur **Merge pull request**, puis **Confirm merge**. Vercel mettra automatiquement le vrai site à jour.

Si quelque chose ne va pas, ne fusionne pas. Retourne dans Jules et écris simplement : « La preview ne correspond pas à ma demande : [explique ce qui ne va pas]. Corrige sans modifier autre chose. »

## Prompt à mettre au début de chaque demande

```text
You are helping me edit my professional portfolio. I do not code.
Always reply to me in simple French.
Before changing anything, read AGENTS.md and GUIDE-LOUISE.md completely.
Never invent facts, credits, clients, dates, awards or results. Ask me one short question if information is missing.
Make only the change I request and preserve everything else.
Run npm test and verify the result on desktop and mobile.
Start from the latest main branch and create a new task branch. Never edit main directly and never use or create a branch named LOUISE. Open the pull request from your task branch into main, never in the opposite direction. Do not change the public site URL or README unless I explicitly ask. At the end, explain in simple French what changed, what you verified, and how I can open the Vercel preview.

Ma demande : [ÉCRIS TA DEMANDE ICI]
```

## Exemples de demandes

### Changer un texte

```text
Ma demande : dans la section À propos, remplace la phrase « ... » par « ... ». Ne change rien d’autre.
```

### Modifier un projet

```text
Ma demande : dans le projet Midas, remplace mon rôle par « ... » et le texte de présentation par « ... ». Ne modifie aucun autre projet.
```

### Ajouter un projet

```text
Ma demande : ajoute ce projet après Midas.
Titre : ...
Catégorie : publicité / fiction / documentaire
Année : ...
Mon rôle exact : ...
Production : ...
Agence : ...
Description courte : ...
Description détaillée : ...
Lien vidéo : ...
Utilise l’image jointe. Ne fabrique aucune information manquante : demande-moi avant de commencer.
```

### Remplacer une image

Joins l’image au moment de créer la tâche dans Jules, puis écris :

```text
Ma demande : remplace uniquement l’image du projet « ... » par l’image jointe. Garde le cadrage lisible sur ordinateur et téléphone. Ne change aucun texte.
```

## Les trois règles à retenir

1. Ne partage jamais de mot de passe, de code secret ou de donnée bancaire avec Jules.
2. Ne clique jamais sur **Merge pull request** avant d’avoir regardé la preview et vérifié que la destination est `main`.
3. Si tu hésites, demande à Jules d’expliquer en français avant d’agir.
