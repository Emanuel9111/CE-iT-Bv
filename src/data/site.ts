/**
 * Centrale plek voor alle bedrijfsgegevens.
 * Lege velden = nog aan te leveren door Emanuel (zie checklist in docs/03-KICKOFF).
 * Zolang een veld leeg is, toont de site een duidelijke [PLAATSHOUDER].
 */
export const site = {
  name: 'CE-iT Netwerkbeheer',
  shortName: 'CE-iT',
  address: 'Sousbeekstraat 86, 9250 Waasmunster',
  btw: 'BE 0765.560.127',

  // TODO — door Emanuel aan te leveren:
  phone: '', // bv. '+32 4xx xx xx xx'
  email: '', // bv. 'info@ce-it.be'
  linkedin: '', // volledige URL van de LinkedIn-pagina
  yearsExperience: '', // bv. '8'
  region: '', // bv. 'Waasland en omstreken'

  // Web3Forms access key — gratis aan te maken op https://web3forms.com
  // (e-mail invullen → key komt per mail). Zolang leeg: formulier inactief.
  web3formsKey: '',

  seo: {
    title:
      'CE-iT Netwerkbeheer — Netwerk, wifi en bekabeling voor gebouwen en KMO’s',
    description:
      'Professionele netwerkoplossingen voor studentenhuisvesting, gebouwen en KMO’s. Van bekabeling en wifi tot installatie, monitoring en volledig beheer.',
  },
};
