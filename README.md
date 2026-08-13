# Site vitrine CFP-EFC

Site vitrine du Centre de Formation Professionnelle Excellence Formation et Consulting,
realise en React (Vite) conformement au cahier des charges v1.0.

## Installation

```bash
npm install
npm run dev
```

Le site est alors accessible sur http://localhost:5173

## Mise en production

```bash
npm run build
```

Le dossier `dist/` genere est celui a deposer sur Netlify, Vercel ou tout hebergeur statique.

## Ou modifier le contenu

Le site n'a volontairement **aucune interface d'administration** (voir point 7 du cahier
des charges). Tout le contenu editorial est centralise dans le dossier `src/data/` :

| Fichier | Contenu |
|---|---|
| `src/data/formations.js` | Le catalogue complet des formations |
| `src/data/contenus.js` | Chiffres cles, temoignages, partenaires, FAQ, coordonnees |

Pour ajouter une formation, il suffit de copier un bloc existant dans `formations.js`
et d'en modifier les valeurs. Aucune autre modification n'est necessaire : la fiche
detaillee, le catalogue et les filtres se mettent a jour automatiquement.

## Images

Les images de remplacement se trouvent dans `public/img/`. Remplacez-les par les vraies
photographies en conservant les memes noms de fichier, ou modifiez les chemins dans
`src/data/`.

## Points de vigilance du cahier des charges

- Aucun tarif ne doit apparaitre sur le site.
- Le formulaire de contact necessite un service d'envoi (voir commentaire dans
  `src/pages/Contact.jsx`) : un site statique ne peut pas envoyer d'e-mail seul.
