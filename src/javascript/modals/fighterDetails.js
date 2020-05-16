import { createElement } from '../helpers/domHelper';
import { showModal } from './modal';




export  function showFighterDetailsModal(fighter) {
  const title = 'Fighter info';
  const bodyElement = createFighterDetails(fighter);
  showModal({ title, bodyElement });
}

function createFighterDetails(fighter) {
  console.log('createFighterDetails');
  console.log(fighter);
  console.log('createFighterDetails');

  const {name} = fighter;
  const fighterDetails = createElement({tagName: 'div', className: 'modal-body'});
  const nameElement = createElement({tagName: 'span', className: 'fighter-name'});

  nameElement.innerText = 'name : '+name+'\n';
  fighterDetails.append(nameElement);

  // show fighter name, attack, defense, health, image

    if('attack' in fighter) {
      const {attack} = fighter;
      const attackElement = createElement({tagName: 'span', className: 'fighter-attack'});
      attackElement.innerText = 'attack :'+ attack+'\n';
      fighterDetails.append(attackElement);
    }
    if('defense' in fighter) {
      const {defense} = fighter;
      const defenseElement = createElement({tagName: 'span', className: 'fighter-defense'});
      defenseElement.innerText = 'defense :'+ defense+'\n';
      fighterDetails.append(defenseElement);
    }
    if('health' in fighter) {
      const {health} = fighter;
      const healthElement = createElement({tagName: 'span', className: 'fighter-health'});
      healthElement.innerText = 'health :'+ health+'\n';
      fighterDetails.append(healthElement);
    }
    if('source' in fighter) {
      const {source} = fighter;
      const attributes = { src: source };
      const imgElement = createElement({ tagName: 'img', className: 'fighter-image', attributes });
      // imgElement.innerText = image;
      fighterDetails.append(imgElement);

    }


  return fighterDetails;
}
