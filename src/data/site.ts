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

  phone: '+32 488 51 17 76',
  email: 'info@ce-it.be',
  // Canonieke vorm zoals LinkedIn die zelf opgeeft in og:url.
  linkedin: 'https://www.linkedin.com/company/ce-it-bv',
  yearsExperience: '10',
  region: 'Oost-Vlaanderen',

  // Web3Forms access key (publiek bedoeld: staat in de form-HTML).
  // Inzendingen komen binnen op info@ce-it.be.
  web3formsKey: 'ae126825-aa39-41e4-8241-f054320152f8',

  seo: {
    title:
      'CE-iT Netwerkbeheer — Netwerk, wifi en bekabeling voor gebouwen en KMO’s',
    description:
      'Professionele netwerkoplossingen voor studentenhuisvesting, gebouwen en KMO’s. Van bekabeling en wifi tot installatie, monitoring en volledig beheer.',
  },
};
