import { firestore } from './../../firebase/utils';


export const handleFetchBC = () => {
  return new Promise((resolve, reject) => {
   // const pageSize = 6;
   // let ref = firestore.collection('books');

   //if (filterType) ref = ref.where('productCategory', '==', filterType);
  //  if (startAfterDoc) ref = ref.startAfter(startAfterDoc);

  firestore
      .collection('bookclubs')
      .get()
      .then(snapshot => {
          const bcArray = snapshot.docs.map(doc => {
              return {
                  ...doc.data(),
                  documentID: doc.id
              }
          });
     
        resolve(bcArray);
      })
      .catch(err => {
        reject(err);
      })
  })
}


/*
export const handleFetchProduct = (productID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('products')
      .doc(productID)
      .get()
      .then(snapshot => {

        if (snapshot.exists) {
          resolve({
            ...snapshot.data(),
            documentID: productID
          });
        }
      })
      .catch(err => {
        reject(err);
      })
  })
}
*/