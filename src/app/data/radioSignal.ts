export type p4Station = {
    sender: string
    district: string
    frequency: string
    power: string
}

export const p4Stations: p4Station[] = [
  { sender: 'Frejlev', district: 'Nordjylland', frequency: '98.1 MHz', power: '60 kW' },
  { sender: 'Gl. Højen', district: 'Trekanten', frequency: '94.0 MHz', power: '10 kW' },
  { sender: 'Gladsaxe', district: 'København', frequency: '96.5 MHz', power: '60 kW' },
  { sender: 'Mejrup', district: 'Midt & Vest', frequency: '98.5 MHz', power: '60 kW' },
  { sender: 'Nakskov', district: 'Sjælland', frequency: '92.2 MHz', power: '30 kW' },
  { sender: 'Rangstrup', district: 'Syd', frequency: '99.9 MHz', power: '60 kW' },
  { sender: 'Skamlebæk', district: 'Sjælland', frequency: '92.0 MHz', power: '3 kW' },
  { sender: 'Sønder Højrup', district: 'Fyn', frequency: '96.8 MHz', power: '60 kW' },
  { sender: 'Søsterhøj', district: 'Østjylland', frequency: '95.9 MHz', power: '60 kW' },
  { sender: 'Thisted', district: 'Midt & Vest', frequency: '95.6 MHz', power: '2 kW' },
  { sender: 'Tolne', district: 'Nordjylland', frequency: '94.4 MHz', power: '8 kW' },
  { sender: 'Varde', district: 'Esbjerg', frequency: '99.0 MHz', power: '8 kW' },
  { sender: 'Ølgod', district: 'Midt & Vest', frequency: '97.7 MHz', power: '10 kW' },
  { sender: 'Øverup', district: 'Sjælland', frequency: '97.5 MHz', power: '100 kW' },
  { sender: 'Årsballe', district: 'Bornholm', frequency: '99.3 MHz', power: '30 kW' }
]
