import admin from '../../../helpers/firebase';
const Firestore = admin.firestore();

export default (req, res) => {
  return Firestore
    .collection("paginas")
    .get()
    .then(
      snap => {
        let list = [];
        snap.forEach(
          doc => list.push(
            {
              id: doc.id,
              ...doc.data()
            }
          )
        )
        res.json(list);
      }
    )
    .catch((error) => {
      console.log(error)
      res.json({ error });
    });
};