/**
 * CONTENUS EDITORIAUX DU SITE
 * ---------------------------
 * Chiffres cles, temoignages, partenaires, FAQ, coordonnees et images de la
 * banniere et de la galerie. Tout se modifie ici, sans toucher au code des
 * composants.
 */

/** Coordonnees du centre, reprises dans l'entete, le pied de page et la page Contact. */
export const CONTACT = {
  adresse: "Badalabougou, sur la Colline du Savoir, a l'UIE",
  ville: 'Bamako, Mali',
  telephones: ['+223 79 34 66 58', '+223 76 71 98 98'],
  // Numero au format international sans espace ni signe, pour le lien WhatsApp
  whatsapp: '22379346658',
  email: 'davidtelly404@gmail.com',
  horaires: ['Lundi au vendredi : 8h - 17h'],
  facebook: 'https://web.facebook.com/efcmali?locale=fr_FR',
  // Lien d'integration Google Maps. Pour le remplacer : Google Maps > Partager >
  // Integrer une carte > copier la valeur de l'attribut src de l'iframe.
  carteEmbed:
    'https://www.google.com/maps?q=Badalabougou,Bamako,Mali&output=embed',
};

/** Images de la banniere d'accueil (effet de zoom puis defilement automatique). */
export const DIAPOS = [
  {
    image: '/img/image2.png',
    titre: 'Se former aujourd\u2019hui pour le métier de demain',
    texte:
      "Le CFP-EFC forme les étudiants, les professionnels et les entreprises à Bamako, avec une exigence constante : des compétences immédiatement utilisables sur le terrain.",
  },
  {
    image: '/img/image3.png',
    titre: 'Quatre modalités, un seul objectif : l\u2019emploi',
    texte:
      "Formation qualifiante, tutorat, apprentissage dual et formation continue : un parcours adapté à chaque situation.",
  },
  {
    image: '/img/batimentUIE.jpg',
    titre: 'Un centre adossé à l\u2019Université Internationale d\u2019Excellence',
    texte:
      "Sur la Colline du Savoir, un cadre académique moderne propice à l'apprentissage et au dévéloppement des competences.",
  },
];

/** Chiffres cles animes (le compteur monte jusqu'a la valeur cible). */
export const CHIFFRES = [
  { valeur: 538, suffixe: '+', libelle: 'Apprenants formés' },
  { valeur: 25, suffixe: '+', libelle: 'Programmes au catalogue' },
  { valeur: 18, suffixe: '', libelle: 'Formateurs praticiens' },
  { valeur: 4, suffixe: '', libelle: 'Modalités de formation' },
];

/** Arguments differenciants affiches sur l'accueil et la page A propos. */
export const ATOUTS = [
  {
    titre: "L'appui de l'UIE",
    texte:
      "Le centre s’appuie sur les ressources académiques et le corps enseignant de l’Université Internationale d’Excellence.",
  },
  {
    titre: 'Des formateurs de terrain',
    texte:
      "Chaque programme est animé par des professionnels qui exercent le métier qu'ils enseignent.",
  },
  {
    titre: 'Une pédagogie pratique',
    texte:
      "Ateliers, cas réels et mises en situation : ici, on apprend en faisant, pas seulement en écoutant.",
  },
  {
    titre: 'Des programmes alignés sur le marché',
    texte:
      "Le catalogue évolue selon les besoins exprimés par les entreprises de la place.",
  },
  {
    titre: 'Un cadre propice',
    texte:
      "Sur la Colline du Savoir à Badalabougou, dans un environnement academique moderne.",
  },
  {
    titre: 'Du sur-mesure pour les entreprises',
    texte:
      "Des programmes intra-entreprise conçus à partir de votre diagnostic des compétences.",
  },
];

/** Temoignages d'anciens participants (nom + formation suivie). */
export const TEMOIGNAGES = [
  {
    initiales: 'AT',
    nom: 'Aminata T.',
    formation: 'Gestion & comptabilité d\u2019entreprise — promotion 2026',
    texte:
      "J’ai été recrutée deux mois après la fin de ma formation. Les exercices ressemblaient exactement à ce que je fais aujourd’hui au bureau.",
  },
  {
    initiales: 'MK',
    nom: 'Moussa K.',
    formation: 'Maintenance électricité — promotion 2025',
    texte:
      "Une formation très pratique qui m’a permis de mieux comprendre les installations électriques et d’être plus autonome sur le terrain. Je recommande vivement ce centre.",
  },
  {
    initiales: 'FD',
    nom: 'Fatoumata D.',
    formation: "Marketing Digital — promotion 2025",
    texte:
      "J’ai appris bien plus que la théorie : j’ai appris à créer, communiquer et développer une présence efficace sur le digital. Je recommande vivement cette formation.",
  },
];

/**
 * Partenaires affiches dans le bandeau defilant.
 * Le defilement est infini : le composant duplique automatiquement la liste.
 */
export const PARTENAIRES = [
  { nom: 'Partenaire 1', logo: '/img/anpe.png' },
  { nom: 'Partenaire 2', logo: '/img/fafpa.png' },
  { nom: 'Partenaire 3', logo: '/img/bia.png' },
  { nom: 'Partenaire 4', logo: '/img/pionniers.png' },
  { nom: 'Partenaire 5', logo: '/img/aeroport.png' },
  { nom: 'Partenaire 6', logo: '/img/aads.png' },
   { nom: 'Partenaire 5', logo: '/img/sisko.png' },
  { nom: 'Partenaire 6', logo: '/img/anadeb.png' },
];

/** Photos de la galerie. */
export const GALERIE = [
  { image: '/img/galerie 4.png', legende: 'Formation et renforcement des capacités du personnel de l\u2019entreprise BIA_MALI.' },
  { image: '/img/image2.png', legende:'Formation et renforcement des capacités du personnel de l\u2019entreprise BIA_MALI.' },
  { image: '/img/image1.png', legende: 'Formation modulaire: Au sein de l’UIE. Module:SAGE_Comptabilité.' },
  { image: '/img/galerie 1.png', legende: 'Formation et renforcement des capacités du personnel de l\u2019entreprise BIA_MALI.' },
  { image: '/img/image3.png', legende: 'Formation modulaire: Au sein de l’UIE. Module:SAGE_Comptabilité.' },
  { image: '/img/galerie 5.png', legende: 'Formation sur  Les Déclarations fiscales et sociales des entreprises.' },
  { image: '/img/galerie 3.png', legende: 'Session de formation modulaire au sein de l’UIE. Module : Anglais Professionnel Organisée par le Cabinet_EFC.' },
  { image: '/img/galerie 2.png', legende: 'Remise des attestations' },
];

// FAQ
export const FAQ = [
  {
    question: "Comment s'inscrire à une formation ?",
    reponse:
      "Remplissez le formulaire de demande d’informations depuis la page de la formation qui vous intéresse. Le centre vous recontactera sous 48 heures afin de vérifier les prérequis et de vous transmettre le dossier d’inscription.",
  },
  {
    question: "Comment obtenir le coût d'une formation ?",
    reponse:
      "Les conditions tarifaires dépendent de la formation, du nombre de participants et du format retenu. Elles vous sont communiquées par écrit après votre demande d’informations ou lors d’un rendez-vous au centre.",
  },
  {
    question: 'Quels documents fournir pour l\u2019inscription ?',
    reponse:
      "Pour l'inscription il faut une copie de la date de naissance et une copie de la piece d'identite",
  },
  {
    question: 'Recevrai-je une attestation ou un certificat à la fin de la formation ?',
    reponse:
      "Oui. Une attestation ou un certificat du CFP-EFC est delivré aux participants ayant suivi l'integralité du parcours.",
  },
  {
    question: 'Peut-on former une équipe entière en entreprise ?',
    reponse:
      "Oui. Le centre conçoit des programmes intra-entreprise adaptés à votre diagnostic de compétences, dispensés dans vos locaux ou au centre. Décrivez votre besoin via le formulaire de contact.",
  },
  {
    question: 'Existe-t-il des cours en soirée ou le week-end ?',
    reponse:
      "Plusieurs formations continues sont proposées en soirée et le samedi afin de rester compatibles avec une activité professionnelle.",
  },
  {
    question: 'Où se déroulent les formations ?',
    reponse:
      "Au centre, à Badalabougou, sur la Colline du Savoir. Les parcours en apprentissage dual comprennent également une période en entreprise partenaire.",
  },
];

/** Equipe du centre (page A propos). */
export const EQUIPE = [
  { nom: 'M. Tidiani ALPHADI Prenom', role: 'Responsable Marketing', photo: '/img/Alphadi.png' },
  { nom: 'M. Ibrahima TAMEGA', role: 'Chargé des formations', photo: '/img/Tamega2.jpeg' },
];

//  MOT DU DIRECTEUR — page A propos.
export const MOT_DIRECTEUR = {
  titre: 'Mot du Directeur',
  photo: '/img/directeur.png',
  nom: 'M. Maiga Amadou',
  fonction: 'Directeur du CFP-EFC',
  paragraphes: [
    "Cheres apprenantes, chers apprenants, chers partenaires,",
    "Bienvenue au Centre de Formation Professionnelle Excellence Formation et Consulting. Notre mission est de former des professionnels qualifies, capables de repondre aux besoins reels des entreprises et des institutions.",
    "Adosse a l'Universite Internationale d'Excellence, le centre met a votre disposition des formateurs experimentes et une pedagogie tournee vers la pratique, afin que chaque parcours debouche sur une competence utilisable des le premier jour.",
  ],
};
