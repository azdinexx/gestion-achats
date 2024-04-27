export interface TypeEmploye {
  id: number;
  NomPrenom: string;
  Societe: number;
  Fonction: number;
  Responsable: string;
  DateEmbauche: Date;
  DroitConge: number;
  AnneeEncours: string;
  ReliquatAnneePrecedente: number;
  AnneePrecedente: string;
  anciennete: number;
  DroitParAnnee: number;
  DroitParMois: number;
  profil: number;
  email: string;
  telephone: string;
  Service: number;
  supprimer: string;
  datenaissance: Date;
  CalculAnc: string;
  CalculDroitMois: string;
  commentaire: string;
  Site: string;
  DateFinContra: Date;
  TypeContra: string;
  RH: string;
}
