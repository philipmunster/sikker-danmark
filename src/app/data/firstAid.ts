export type firstAidItem = {
    id: number,
    type: string
    steps: string[]
}

export const firstAidData = [
  {
    id: 1,
    type: 'Vurder situationen',
    steps: [
      'Sørg for din egen sikkerhed først – stop ikke hvis du også kommer i fare',
      'Tjek om personen er ved bevidsthed – rist forsigtigt på skuldrene',
      'Rop efter hjælp hvis muligt – få andre til at hjælpe',
      'Ring 112 hvis telefonnette virker – giv præcis lokation'
    ]
  },
  {
    id: 2,
    type: 'ABC - Livsvigtige funktioner',
    steps: [
      'A – Airways (luftveje): Tjek om luftvejene er frie – fjern genstand fra mund',
      'B – Breathing (vejrtrækning): Tjek om personen trækker vejret – se, hør, mærk',
      'C – Circulation (cirkulation): Tjek puls på hals eller håndled og stop blødning'
    ]
  },
  {
    id: 3,
    type: 'Stabilt sideleje',
    steps: [
      'Hvis bevidstløs men trækker vejret: Læg i stabilt sideleje',
      'Knæl ved siden af personen på deres højre side',
      'Løft armen nærmest dig vinkelret op som et stop-tegn',
      'Træk modsatte arm over brystet og læg hånden mod kinden',
      'Bøj modsatte ben i knæet og rul personen mod dig forsigtigt'
    ]
  }
]
