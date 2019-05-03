import { Pair } from './pair';
import { Team } from './team';

const PAIRS: Pair[] = [
  { teammateOne: 'spen', teammateTwo: 'spen', pairNames: ['paul'] },
  { teammateOne: 'spen', teammateTwo: 'sean', pairNames: ['seanser'] },
  { teammateOne: 'spen', teammateTwo: 'ryder', pairNames: ['spyder'] },
  { teammateOne: 'spen', teammateTwo: 'tex', pairNames: ['???'] },
  { teammateOne: 'spen', teammateTwo: 'paul', pairNames: ['mustache'] },
  { teammateOne: 'spen', teammateTwo: 'lara', pairNames: ['???'] },

  { teammateOne: 'sean', teammateTwo: 'sean', pairNames: ['???'] },
  { teammateOne: 'sean', teammateTwo: 'ryder', pairNames: ['???'] },
  { teammateOne: 'sean', teammateTwo: 'tex', pairNames: ['???'] },
  { teammateOne: 'sean', teammateTwo: 'paul', pairNames: ['pope sean paul the second'] },
  { teammateOne: 'sean', teammateTwo: 'lara', pairNames: ['???'] },

  { teammateOne: 'ryder', teammateTwo: 'ryder', pairNames: ['ry ry'] },
  { teammateOne: 'ryder', teammateTwo: 'tex', pairNames: ['???'] },
  { teammateOne: 'ryder', teammateTwo: 'paul', pairNames: ['???'] },
  { teammateOne: 'ryder', teammateTwo: 'lara', pairNames: ['walker texas ryder'] },

  { teammateOne: 'tex', teammateTwo: 'tex', pairNames: ['???'] },
  { teammateOne: 'tex', teammateTwo: 'paul', pairNames: ['el paulso'] },
  { teammateOne: 'tex', teammateTwo: 'lara', pairNames: ['???'] },

  { teammateOne: 'paul', teammateTwo: 'paul', pairNames: ['???'] },
  { teammateOne: 'paul', teammateTwo: 'lara', pairNames: ['get off my lawn'] },

  { teammateOne: 'lara', teammateTwo: 'lara', pairNames: ['larry'] }
];

export const TEAM: Team = {
  teamName: 'Baker\'s Dozen',
  teammates: ['Spen', 'Sean', 'Ryder', 'Tex', 'Lara', 'Paul'],
  pairs: PAIRS
};
