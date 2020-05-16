import { callApi } from '../helpers/apiHelper';
import {getFighterInfo} from '../fightersView';
import { showFighterDetailsModal } from '../modals/fighterDetails';

export async function getFighters() {
  try {
    const endpoint = 'fighters.json';
    const apiResult = await callApi(endpoint, 'GET');
    getFighterOnClick();
    return apiResult;
  } catch (error) {
    throw error;
  }
}

export async function getFighterDetails(id = 1) {
  // endpoint - `details/fighter/${id}.json`;

  try {
    const endpoint = `details/fighter/${id}.json`;
    const apiResult = await callApi(endpoint, 'GET');
    return apiResult;
  } catch {
      throw new Error("No find detail info");
  }

}

export async  function getFighterOnClick() {
  try {
    const endpoint = 'fighters.json';
    const apiResult = await callApi(endpoint, 'GET');
    const elements = document.querySelectorAll('#root');
    elements.forEach( (element)=>{
      element.addEventListener('click',(event)=>{
      if(event.target.className='name')
        {
          let name = event.target.innerText;
          var _id = 0;
          let strMap = new Map();
          for (let element of apiResult) {
              if(element["name"]== name){
                strMap.set("_id",element["_id"]);
              }//endif
          }
          _id = strMap.get("_id");
          let fighter = getFighterInfo(_id);
        } //if
  }, false);
  });

  } catch (error) {
    throw error;
  }
  // return elements;
}