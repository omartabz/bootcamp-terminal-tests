export default function findItemsOver(list, threshold){ 
    var itemsOverThreshold = []; 
    for(let j=0; j<list.length; j++){ 
      var item = list[j]; if(item.qty > threshold){ 
        itemsOverThreshold.push(list[j]); 
      } 
    } return itemsOverThreshold; 
  };
  