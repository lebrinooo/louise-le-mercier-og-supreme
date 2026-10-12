# Modifier ton portfolio avec Jules

Tu n’as pas besoin de savoir coder. Le système comporte seulement trois éléments :

- **GitHub** garde les fichiers et l’historique. C’est la sauvegarde du site.
- **Jules** est l’assistant IA qui modifie les fichiers à ta place.
- **Vercel** fabrique une version de test, puis publie le site.

## Première connexion, une seule fois

1. Crée ton compte sur <https://github.com/signup>.
2. Accepte l’invitation GitHub envoyée par Antoine pour le projet `louise-le-mercier-og-supreme`.
3. Ouvre <https://jules.google.com/> avec le compte Google qui possède Google AI Pro.
4. Clique sur **Connect to GitHub account**.
5. Autorise uniquement le dépôt `louise-le-mercier-og-supreme`.
6. Dans Jules, choisis ce dépôt et la branche `main`.

Tu ne devras plus refaire cette configuration.

## Faire une modification

1. Dans Jules, sélectionne `louise-le-mercier-og-supreme` et `main`.
2. Colle le prompt de sécurité ci-dessous, puis ajoute ta demande à la dernière ligne.
3. Clique sur **Give me a plan**.
4. Lis le résumé. S’il correspond à ta demande, clique sur **Approve plan**.
5. Quand Jules a fini, vérifie qu’il indique que `npm test` passe, puis clique sur **Create branch**.
6. Ouvre la **Vercel Preview** indiquée sur GitHub. Regarde la page sur ordinateur et sur téléphone.
7. Si tout est correct, clique sur **Merge pull request**, puis **Confirm merge**. Vercel mettra automatiquement le vrai site à jour.

Si quelque chose ne va pas, ne fusionne pas. Retourne dans Jules et écris simplement : « La preview ne correspond pas à ma demande : [explique ce qui ne va pas]. Corrige sans modifier autre chose. »

## Prompt à mettre au début de chaque demande

```text
You are helping me edit my professional portfolio. I do not code.
Always reply to me in simple French.
Before changing anything, read AGENTS.md and GUIDE-LOUISE.md completely.
Never invent facts, credits, clients, dates, awards or results. Ask me one short question if information is missing.
Make only the change I request and preserve everything else.
Run npm test and verify the result on desktop and mobile.
Work on a separate branch. At the end, explain in simple French what changed, what you verified, and how I can open the Vercel preview.

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
2. Ne clique jamais sur **Merge pull request** avant d’avoir regardé la preview.
3. Si tu hésites, demande à Jules d’expliquer en français avant d’agir.
