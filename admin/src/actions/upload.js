import { Storage } from '../Firebase';

const upload = async file => {
  const storageRef = Storage.ref();
  const ref = storageRef.child(`produtos/${file.name}`);

  try {
    const snapshot = await ref.put(file);
    return snapshot.ref.getDownloadURL();
  } catch (error) {
    console.log(error);
  }
}

export {
  upload
}