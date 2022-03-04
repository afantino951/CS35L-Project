//convert snapshot of problems collection to problems
export function convertCollectionToProblems(querySnapshot){
  let tempData = [];
  querySnapshot.forEach((doc) => {
    let temp = {};
    temp['id'] = doc.id;
    temp['image'] = doc.get('img');
    temp['title'] = doc.get('name');
    temp['isFavorite'] = false;
    temp['gym'] = doc.get('gymname');
    temp['description'] = doc.get('description');
    temp['rating'] = doc.get('rating');
    temp['vrating'] = doc.get('vrating');
    tempData = tempData.concat(temp);
  });
  
  return tempData;
}

export function convertDocumentToProblem(querySnapshot){
  const doc1 = querySnapshot.data();
  let temp = {};
  temp['id'] = doc1.id;
  temp['image'] = doc1['img'];
  temp['title'] = doc1['name'];
  temp['isFavorite'] = false;
  temp['gym'] = doc1['gymname'];
  temp['description'] = doc1['description'];
  temp['rating'] = doc1['rating'];
  temp['vrating'] = doc1['vrating'];

  return temp;
}