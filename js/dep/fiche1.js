var gouvs=new Array("Ariana","Ben arous","Beja","Bizerte","Gabes","Gafsa","Jendouba","Kairouan","Kasserine","Kebili","Kef","Mahdia","Mannouba","Medenine","Monastir","Nabeul","Sfax","Sidi bouzid","Siliana","Sousse","Tataouine","Tozeur","Tunis","Zaghouan","Autre");

var sexes=new Array("Feminin","Masculin");
var sexes_txt=new Array("Feminin","Masculin");

var etat_civils=new Array("C","M","D","V");
var etat_civils_txt=new Array("Celibataire","Marie","Divorce","Veuf");

var situation_milits=new Array("S","N","E","A");
var situation_milits_txt=new Array("Sursitaire","Non concerne","Exempte","Accompli");

var sections=new Array("Lettres","Economie et gestion","Mathematiques","Technique","Sciences experimentales","Informatique","Sport");
var sections_txt=new Array("Lettres","Economie et gestion","Mathematiques","Technique","Sciences experimentales","Informatique","Sport");

var mentions=new Array("Passable","Assez bien","Bien","Tres bien");
var mentions_txt=new Array("Passable","Assez bien","Bien","Tres bien");

var sessions=new Array("Principale","Controle");
var sessions_txt=new Array("Principale","Controle");

function explicit(tab_briefs,tab_explicits,brief) {
var i=0;
result='';
while ((i<tab_briefs.length)&&(tab_briefs[i]!=brief)) {
i++;
}
if (i<tab_briefs.length) {result=tab_explicits[i];}
document.write(result);
}

var pays=new Array("Afghanistan","Afrique Centrale","Afrique du Sud","Albanie","Algerie","Allemagne","Andorre","Angola","Anguilla","Arabie Saoudite","Argentine","Armenie","Australie","Autriche","Azerbaidjan","Bahamas","Bangladesh","Barbade","Bahrein","Belgique","Belize","Benin","Bermudes","Bielorussie","Bolivie","Botswana","Bhoutan","Boznie Herzegovine","Bresil","Brunei","Bulgarie"
,"Burkina Faso","Burundi","Caiman","Cambodge","Cameroun","Canada","Canaries","Cap Vert","Chili","Chine","Chypre","Colombie","Comores","Congo","Congo democratique","Cook","Coree du Nord","Coree du Sud","Costa Rica","Cote d Ivoire","Croatie","Cuba","Danemark","Djibouti","Dominique","Egypte","Emirats Arabes Unis","Equateur","Erythree","Espagne","Estonie","Etats Unis","Ethiopie","Falkland","Feroe",
"Fidji","Finlande","France","Gabon","Gambie","Georgie","Ghana","Gibraltar","Grece","Grenade","Groenland","Guadeloupe","Guam","Guatemala","Guernesey","Guinee","Guinee Bissau","Guinee Equatoriale","Guyana","Guyane Francaise","Haiti","Hawaii","Honduras","Hong Kong","Hongrie","Inde","Indonesie","Iran","Iraq","Irlande","Islande","Israel","italie","Jamaique","Jan Mayen","Japon","Jersey","Jordanie",
"Kazakhstan","Kenya","Kirghizistan","Kiribati","Koweit","Laos","Lesotho","Lettonie","Liban","Liberia","Liechtenstein","Lituanie","Luxembourg","Lybie","Macao","Macedoine","Madagascar","Mad&egrave;re","Malaisie","Malawi","Maldives","Mali","Malte","Man","Mariannes du Nord","Maroc","Marshall", "Martinique","Maurice","Mauritanie","Mayotte","Mexique","Micronesie","Midway","Moldavie","Monaco","Mongolie",
"Montserrat","Mozambique","Namibie","Nauru","Nepal","Nicaragua","Niger","Nigeria","Niue","Norfolk","Norvege","Nouvelle Caledonie","Nouvelle Zelande","Oman","Ouganda","Ouzbekistan","Pakistan","Palau","Palestine","Panama","Papouasie Nouvelle Guinee","Paraguay","Pays Bas","Perou","Philippines","Pologne","Polynesie","Porto Rico","Portugal","Qatar","Republique Dominicaine","Republique Tcheque","Reunion",
"Roumanie","Royaume Uni","Russie","Rwanda","Sahara Occidental","Sainte Lucie","Saint Marin","Salomon","Salvador","Samoa Occidentales","Samoa Americaine","Sao Tome et Principe","Senegal","Seychelles","Sierra Leone","Singapour","Slovaquie","Slovenie","Somalie","Soudan","Sri Lanka","Suede","Suisse","Surinam","Swaziland","Syrie","Tadjikistan","Taiwan","Tonga","Tanzanie","Tchad","Thailande","Tibet",
"Timor Oriental","Togo","Trinite et Tobago","Tristan da cunha","Tunisie","Turkmenistan","Turquie","Ukraine","Uruguay","Vanuatu","Vatican","Venezuela","Vierges Americaines","Vierges Britanniques","Vietnam","Wake","Walllis et Futuma","Yemen","Yougoslavie","Zambie","Zimbabwe","Autres");