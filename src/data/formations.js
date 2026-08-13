/**
 * CATALOGUE DES FORMATIONS
 * ------------------------
 * C'est ici, et nulle part ailleurs, que l'on ajoute ou modifie une formation.
 * Le catalogue, les filtres, la page de detail et les "formations proches" se
 * mettent a jour automatiquement a partir de ce fichier.
 *
 * IMPORTANT : conformement au cahier des charges, aucun champ "prix" ne doit
 * etre ajoute ici. Le site ne doit afficher aucun tarif.
 *
 * Le champ "slug" sert d'adresse dans l'URL : /formations/mon-slug
 * Il doit etre unique, en minuscules, sans accent ni espace.
 */

export const MODALITES = [
  {
    id: 'qualifiante',
    nom: 'Formation qualifiante',
    couleur: '#E8761B', // orange EFC
    resume: "Des competences pratiques et une qualification reconnue, immediatement operationnelles.",
  },
  {
    id: 'tutorat',
    nom: 'Formation en tutorat',
    couleur: '#17255A', // bleu institutionnel
    resume: "Un accompagnement individuel par des formateurs et des professionnels experimentes.",
  },
  {
    id: 'dual',
    nom: 'Apprentissage dual',
    couleur: '#12776E',
    resume: "La theorie au centre, la pratique en entreprise, dans un meme parcours.",
  },
  {
    id: 'continue',
    nom: 'Formation continue',
    couleur: '#B4862B',
    resume: "Des programmes flexibles pour actualiser les competences de vos equipes.",
  },
];

/** Publics cibles, repris du point 3 du cahier des charges. */
export const PUBLICS = [
  { id: 'etudiants', nom: 'Etudiants et jeunes diplomes' },
  { id: 'professionnels', nom: 'Professionnels en activite' },
  { id: 'entrepreneurs', nom: 'Entrepreneurs et porteurs de projets' },
  { id: 'entreprises', nom: 'Entreprises et administrations' },
];

export const FORMATIONS = [
  {
    slug: 'comptabilite-gestion-financiere',
    titre: 'Gestion financière, comptabilité et ressources humaines',
    modalite: 'qualifiante',
    publics: ['etudiants', 'professionnels'],
    image: '/img/comptabilite.jpg',
    accroche:
      "Formation dédiée à la gestion financière, à la comptabilité et à l’administration du personnel en entreprise.",
    duree: '20 h à 40 h',
    rythme: 'Centre + entreprise',
    lieu: 'Badalabougou, Bamako',
    validation: 'Attestation CFP-EFC',
    pourQui: [
      "Jeunes diplômés en gestion cherchant une première qualification métier",
      "Gérants de petites structures assurant eux-mêmes leur comptabilité",
      "Agents administratifs souhaitant évoluer vers un poste comptable",
      "Assistants comptables souhaitant renforcer leurs compétences",
      "Professionnels souhaitant se perfectionner en gestion financière ou RH",
    ],
    objectifs: [
      "Enregistrer les opérations courantes selon le plan comptable en vigueur",
      "Établir un bilan et un compte de résultat",
      "Construire et suivre un plan de trésorerie",
      "Préparer les déclarations fiscales et sociales",
      "Utiliser un tableur pour le suivi comptable",
      "Élaborer des tableaux de bord financiers",
      "Assurer le suivi administratif du personnel",
      "Préparer les éléments de paie et gérer les dossiers du personnel"
    ],
    programme: [
      { titre: 'Module 1', contenu: "Gestion & comptabilité d'entreprise"},
      { titre: 'Module 2', contenu: "Gouvernance, fiscalité, finance & audit"},
      { titre: 'Module 3', contenu: "Normes IFRS"},
      { titre: 'Module 4', contenu: "Droit du travail & ressources humaines"},
      { titre: 'Module 5', contenu: "Secrétariat, accueil & assistant de direction"},
      { titre: 'Module 6', contenu: "Suivi & évaluation de projets"},
      { titre: 'Module 7', contenu: "Comptabilité des ONG (SYSCEBNL)"},
    ],
    prerequis:
      "Être titulaire d’un BT ou d’un baccalauréat.",
    debouches:
      "Aide-comptable, comptable de PME, assistant de gestion au sein d'entreprises, ONG et administrations.",
  },
  {
    slug: 'apprentissage metier',
    titre: 'APPRENTISSAGE DES MÉTIERS',
    modalite: 'dual',
    publics: ['etudiants', 'professionnels', 'entreprises'],
    image: '/img/metier.png',
    accroche:
      "Des formations pratiques permettant d’apprendre directement un métier et de développer des compétences professionnelles.",
    volume: '20 h à 40 h',
    rythme: 'Centre + entreprise',
    lieu: 'Badalabougou, Bamako',
    validation: 'Attestation CFP-EFC',
    pourQui: [
      "Jeunes souhaitant apprendre un métier pratique",
      "Personnes sans qualification professionnelle recherchant un métier",
      "Demandeurs d’emploi souhaitant développer une compétence directement exploitable",
      "Personnes en reconversion professionnelle",
      "Apprentis souhaitant se perfectionner dans leur métier",
      "Entrepreneurs souhaitant maîtriser les techniques de leur activité",
    ],
    objectifs: [
      "Acquérir les gestes et techniques fondamentaux du métier choisi",
      "Utiliser correctement les outils et équipements professionnels",
      "Appliquer les règles de sécurité au travail",
      "Réaliser des travaux pratiques dans des conditions professionnelles",
      "Développer l’autonomie dans l’exécution des tâches",
      "Respecter les normes et procédures professionnelles",
      "Développer les compétences nécessaires à l’insertion professionnelle",
      "Être capable de réaliser des prestations de manière autonome",
    ],
    programme: [
      { titre: 'Module 1', contenu: "Peinture Bâtiment"},
      { titre: 'Module 2', contenu: "Maçonnerie"},
      { titre: 'Module 3', contenu: "Staff"},
      { titre: 'Module 4', contenu: "Carrelage"},
      { titre: 'Module 5', contenu: "Froid"},
      { titre: 'Module 6', contenu: "Maintenance électricité"},
      { titre: 'Module 7', contenu: "Coupe et couture"},
      { titre: 'Module 8', contenu: "Coiffure esthétique"},
      { titre: 'Module 9', contenu: "Énergie renouvelable"},
      { titre: 'Module 10', contenu: "Dessin Bâtiment"},
    ],
    prerequis:
      "Aucun prérequis spécifique n’est requis.",
    debouches:
      "Technicien qualifié, Ouvrier qualifié, Artisan, Opérateur, Installateur, Prestataire indépendant, Entrepreneur.",
  },
  {
    slug: 'informatique',
    titre: 'Informatique et nouvelles technologies',
    modalite: 'continue',
    publics: ['professionnels', 'entreprises'],
    image: '/img/Technologies.jpg',
    accroche:
      "Formation axée sur l’informatique, le numérique, le développement logiciel, les réseaux et les nouvelles technologies.",
    duree: '20 h à 40 h',
    rythme: 'Centre + entreprise',
    lieu: 'Badalabougou, Bamako',
    validation: 'Attestation CFP-EFC',
    pourQui: [
      "Jeunes diplômés souhaitant acquérir une qualification dans le numérique",
      "Débutants souhaitant apprendre les bases de l'informatique",
      "Étudiants souhaitant développer des compétences techniques complémentaires",
      "Professionnels souhaitant se reconvertir vers les métiers du numérique",
      "Techniciens souhaitant actualiser leurs compétences",
    ],
    objectifs: [
      "Maîtriser les outils informatiques utilisés en entreprise",
      "Installer, configurer et maintenir un poste informatique",
      "Développer des applications et des sites web",
      "Concevoir et gérer une base de données",
      "Administrer un réseau informatique",
      "Appliquer les bonnes pratiques de cybersécurité",
      "Utiliser les outils numériques pour automatiser les tâches professionnelles",
      "Découvrir les nouvelles technologies et leurs applications professionnelles",
    ],
    programme: [
      { titre: 'Module 1', contenu: "Cybersécurité" },
      { titre: 'Module 2', contenu: "Réseaux & systèmes" },
      { titre: 'Module 3', contenu: "Bases de données" },
      { titre: 'Module 4', contenu: "Développement web & applications" },
      { titre: 'Module 5', contenu: "Robotique & intelligence artificielle" },
      { titre: 'Module 6', contenu: "Maintenance & administration des systèmes" },
      { titre: 'Module 7', contenu: "Archivages numériques" },
    ],
    prerequis: "Être titulaire d’un BT ou d’un baccalauréat.",
    debouches:
      "Technicien informatique, Développeur web, Développeur logiciel, Administrateur réseau, Technicien support, Assistant systèmes et réseaux, Data analyst, Technicien cybersécurité.",
  },
  {
    slug: 'management-marketing-com',
    titre: "MANAGEMENT, MARKETING ET COMMUNICATION",
    modalite: 'tutorat',
    publics: ['entrepreneurs', 'etudiants'],
    image: '/img/Marketing-communication.jpg',
    accroche:
      "Formation consacrée au management des équipes, au marketing, à la communication et au développement commercial.",
    duree: '20 h à 40 h',
    lieu: 'Badalabougou, Bamako',
    validation: 'Attestation CFP-EFC',
    pourQui: [
      "Jeunes diplômés souhaitant se professionnaliser en management ou marketing",
      "Entrepreneurs et porteurs de projets souhaitant développer leur activité",
      "Commerciaux souhaitant améliorer leurs techniques de vente",
      "Responsables d’équipe souhaitant renforcer leurs compétences managériales",
      "Agents de communication souhaitant maîtriser les outils numériques",
    ],
    objectifs: [
      "Élaborer un plan marketing adapté à une activité",
      "Identifier et analyser les besoins d’un marché",
      "Construire une stratégie commerciale",
      "Maîtriser les techniques de prospection et de vente",
      "Concevoir des supports de communication professionnels",
      "Développer une communication efficace sur les réseaux sociaux",
      "Organiser et piloter une équipe",
      "Élaborer et suivre des objectifs commerciaux",
    ],
    programme: [
      { titre: 'Module 1', contenu: "Management et Leadership" },
      { titre: 'Module 2', contenu: "Marketing Digital" },
      { titre: 'Module 3', contenu: "Communication et Relations Publiques" },
      { titre: 'Module 4', contenu: "Infographie et Montage Vidéo" },
    ],
    prerequis: "Être titulaire d’un BT ou d’un baccalauréat.",
    debouches: "Assistant marketing, Chargé de communication, Commercial, Responsable marketing, Community manager, Assistant ou responsable commercial, Manager d’équipe, Entrepreneur.",
  },
  {
    slug: 'securite-mine',
    titre: "SÉCURITÉ, ENVIRONNEMENT ET INDUSTRIE MINIÈRE",
    modalite: 'continue',
    publics: ['professionnels', 'entreprises'],
    image: '/img/mine.jfif',
    accroche:
      "Formation consacrée à la sécurité au travail, à la protection de l’environnement et aux activités liées au secteur minier.",
    duree: '20 h à 40 h',
    rythme: 'Centre + entreprise',
    lieu: 'Badalabougou, Bamako',
    validation: 'Attestation CFP-EFC',
    pourQui: [
      "Jeunes diplômés souhaitant intégrer les secteurs industriel et minier",
      "Techniciens travaillant dans les entreprises industrielles",
      "Agents HSE souhaitant renforcer leurs compétences",
      "Professionnels du secteur minier",
      "Responsables d’équipes exposées aux risques professionnels",
      "Professionnels souhaitant se spécialiser en sécurité et environnement",
    ],
    objectifs: [
      "Identifier et évaluer les risques professionnels",
      "Mettre en œuvre les règles de santé et sécurité au travail",
      "Élaborer des procédures de prévention des risques",
      "Contrôler le respect des consignes de sécurité",
      "Participer à la mise en place d'un système de management HSE",
      "Identifier les impacts environnementaux d'une activité industrielle",
      "Mettre en œuvre des mesures de prévention et de protection de l'environnement",
      "Appliquer les bonnes pratiques de sécurité dans les activités minières",
    ],
    programme: [
      { titre: 'Module 1', contenu: "Hygiène, Sécurité et Environnement (HSE)" },
      { titre: 'Module 2', contenu: "Régimes douaniers dans le secteur minier" },
      { titre: 'Module 3', contenu: "Maintenance Industrielle" },
      { titre: 'Module 4', contenu: "Logistique et Supply Chain" },
      { titre: 'Module 5', contenu: "Financement et investissement dans les industries extractives" },
      { titre: 'Module 6', contenu: "Élaboration des Budgets des industries Extractives" },
      { titre: 'Module 7', contenu: "Soudure électrique" },
      { titre: 'Module 8', contenu: "Télé pilote des drones" },
      { titre: 'Module 9', contenu: "Chaudronnerie" },
      { titre: 'Module 10', contenu: "Conducteur d'engins lourds" },
    ],
    prerequis: "Être titulaire d’un BT ou d’un baccalauréat,.",
    debouches: "Agent HSE, Assistant HSE, Technicien HSE,Animateur sécurité, Assistant environnement,Technicien environnement, Technicien minier, Responsable HSE",
  },
  {
    slug: 'banque-assurance',
    titre: 'BANQUE ET ASSURANCE',
    modalite: 'dual',
    publics: ['etudiants', 'professionnels'],
    image: '/img/mba.jpg',
    accroche:
      "Formation spécialisée dans les activités bancaires, financières, commerciales et assurantielles.",
    duree: '20 h à 40 h',
    rythme: 'Centre + entreprise',
    lieu: 'Badalabougou, Bamako',
    validation: 'Attestation CFP-EFC',
    pourQui: [
      "Jeunes diplômés souhaitant intégrer le secteur bancaire ou assurantiel",
      "Agents administratifs souhaitant évoluer vers les métiers financiers",
      "Conseillers clientèle souhaitant renforcer leurs compétences",
      "Professionnels de la banque souhaitant se perfectionner",
      "Personnes en reconversion vers les métiers de la finance et de l’assurance",
    ],
    objectifs: [
      "Comprendre le fonctionnement des banques et des compagnies d’assurance",
      "Accueillir et conseiller efficacement les clients",
      "Traiter les opérations bancaires courantes",
      "Constituer et analyser un dossier de crédit",
      "Évaluer les besoins financiers et assurantiels des clients",
      "Maîtriser les techniques de vente de produits financiers et d’assurance",
      "Gérer et suivre un portefeuille clients",
      "Appliquer les procédures et règles de conformité du secteur",
    ],
    programme: [
      { titre: 'Module 1', contenu: "Contrôle de conformité" },
      { titre: 'Module 2', contenu: "Montage des dossiers de crédit" },
      { titre: 'Module 3', contenu: "Blanchiment des capitaux et Financement du Terrorisme" },
      { titre: 'Module 4', contenu: "Digitalisation et Opération mobile" },
      { titre: 'Module 5', contenu: "Marketing et Relations clients" },
      { titre: 'Module 6', contenu: "Assurtech et Transformation digital" },
      { titre: 'Module 7', contenu: "Gestion des Risques et Actuariat" },
      { titre: 'Module 8', contenu: "Ingénierie Commerciale" },
      { titre: 'Module 9', contenu: "Gestion de Sinistre et Santé" },
    ],
    prerequis: "Être titulaire d’un BT ou d’un baccalauréat.",
    debouches: "Conseiller clientèle bancaire, Chargé de clientèle, Assistant bancaire, Chargé de crédit, Gestionnaire de portefeuille, Conseiller en assurance, Gestionnaire de contrats d’assurance, Agent commercial en assurance",
  },
];

/** Retourne une formation a partir de son slug (ou undefined si introuvable). */
export function getFormation(slug) {
  return FORMATIONS.find((f) => f.slug === slug);
}

/** Retourne la definition d'une modalite a partir de son identifiant. */
export function getModalite(id) {
  return MODALITES.find((m) => m.id === id);
}
