import { type map} from '@/app/medicin/injuries/page'

type emergencyDataItem = {
    id: number
    type: keyof map
    label: 'KRITISK' | 'VIGTIG' | 'NYTTIG'
    steps: string[]
}

export const emergencyData: emergencyDataItem[] = [
  {
    id: 1,
    type: 'Alvorlig blødning',
    label: 'KRITISK',
    steps: [
      'Tryk direkte på såret med ren klud eller dine hænder',
      'Løft såret område over hjerteniveau hvis muligt',
      'Hvis blødningen ikke stopper, tilføj flere lag uden at fjerne de første',
      'Lav en fast trykforbinding med bandage eller rive stof i strimler',
      'Søg lægehjælp så hurtigt som muligt - tab ikke for meget blod'
    ]
  },
  {
    id: 4,
    type: 'Forgiftning',
    label: 'KRITISK',
    steps: [
      'Identificér hvad personen har indtaget - gem emballagen',
      'Kontakt Giftlinjen: 82 12 12 12',
      'Gem emballagen eller resten af det giftige stof til undersøgelse',
      'Fremkald ALDRIG opkastning medmindre du får specifik instruktion',
      'Giv vand at drikke hvis personen er ved bevidsthed og ikke opkaster',
      'Følg nøje instruktioner fra giftlinjen eller læge'
    ]
  },
  {
    id: 5,
    type: 'Bevidstløshed',
    label: 'KRITISK',
    steps: [
      'Tjek for reaktion - ryst forsigtigt på skuldrene og tal højt',
      'Åbn luftvejene - løft hagen, tipt hovedet forsigtigt bagover',
      'Tjek for vejrtrækning i 10 sekunder - se, hør, mærk',
      'Hvis ingen vejrtrækning: Start genoplivning øjeblikkeligt',
      'Hvis der er vejrtrækning: Læg i stabil sideleie',
      'Overvåg kontinuerligt og vær klar til at starte genoplivning'
    ]
  },
  {
    id: 2,
    type: 'Forbrænding',
    label: 'VIGTIG',
    steps: [
      'Fjern personen fra varmekilden øjeblikkeligt',
      'Køl forbrændingen med koldt (ikke iskoldt) vand i 10-20 minutter',
      'Fjern smykker og løst tøj før hævelse opstår',
      'Dæk med sterilt ikke-klæbende forbinding eller rent tøj',
      'Giv aldrig is direkte på forbrændingen - det kan gøre skaden værre',
      'Søg lægehjælp ved store eller dybe forbrændinger'
    ]
  },
  {
    id: 3,
    type: 'Brud eller forstuvning',
    label: 'VIGTIG',
    steps: [
      'Immobiliser det skadede område - flyt det ikke unødvendigt',
      'Anvend is indpakket i håndklæde i 15-20 minutter for at reducere hævelse',
      'Løft det skadede område over hjerteniveau hvis muligt',
      'Lav en skinne med stive materialer (brædder, magasiner) hvis nødvendigt',
      'Flyt ALDRIG personen hvis rygskade er mistænkt - vent på hjælp'
    ]
  }
]
