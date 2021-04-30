import admin from '../../../helpers/firebase';
const Firestore = admin.firestore();

export default (req, res) => {
  const { pageID } = req.query;

  console.log(pageID)

  return Firestore
    .collection("imagens")
    .where("pagina.id", "==", pageID)
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