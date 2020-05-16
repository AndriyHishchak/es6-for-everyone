import { fight } from '../fight.js';
import { showFighterDetailsModal } from '../modals/fighterDetails';

export async function showWinnerModal(fighter) {
  // show winner name and image
    console.log('------------');
    console.log(fighter);
    console.log('------------');
    const title = 'WINNER';


    document.querySelectorAll( '[type="checkbox"]').checked = false;
    document.querySelectorAll( '.fighter').hidden = true;
    const elements = document.querySelectorAll('#root');

    showFighterDetailsModal(fighter);



}
