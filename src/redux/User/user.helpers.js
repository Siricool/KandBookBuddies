//verkar bara vara resetpassword

import { firestore } from './../../firebase/utils';


export const handleFetchUsers = () => {
  return new Promise((resolve, reject) => {
   // const pageSize = 6;
   // let ref = firestore.collection('books');

   //if (filterType) ref = ref.where('productCategory', '==', filterType);
  //  if (startAfterDoc) ref = ref.startAfter(startAfterDoc);

  firestore
      .collection('users')
      .get()
      .then(snapshot => {
          const usersArray = snapshot.docs.map(doc => {
              return {
                  ...doc.data(),
                  documentID: doc.id
              }
          });
     
        resolve(usersArray);
      })
      .catch(err => {
        reject(err);
      })
  })
}