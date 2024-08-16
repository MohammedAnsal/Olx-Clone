import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "sonner";

const firebaseConfig = {
  apiKey: "AIzaSyDv4fbJHsQU78Qvzdlx1mud1Op25_liBW0",
  authDomain: "olx-clone-8d759.firebaseapp.com",
  projectId: "olx-clone-8d759",
  storageBucket: "olx-clone-8d759.appspot.com",
  messagingSenderId: "968633153800",
  appId: "1:968633153800:web:9456435908997effe9d4bd",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const storage = getStorage(app);

//  SignUp Area :-

const signUp = async (name, email, password, phone) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;

    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      email,
      phone,
      authProvider: "local",
    });
  } catch (error) {
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

//  SignIn Area :-

const signIn = async (email, password) => {
  try {
    console.log(email,password);
    
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    toast.error('SignIn Failed');
  }
};

//  Logout Area :-

const logOut = async () => {
  try {
    signOut(auth);
    localStorage.removeItem('user')
    toast.success('Logout Successfully')
  } catch (error) {
    toast.error(code.split("/")[1].split("-").join(" "));
  }
};

//  UploadImage :-

const uploadImage = async (name, category, price, image, userId) => {
  console.log(name, price, category, userId);

  const date = new Date();

  try {
    const storageRef = ref(storage, `/images/${image.name}`);
    await uploadBytes(storageRef, image);

    const dowloadURL = await getDownloadURL(storageRef);

    await addDoc(collection(db, "products"), {
      name,
      category,
      price,
      dowloadURL,
      userId: userId,
      createdAt: date.toDateString(),
    });

  } catch (error) {
    toast.error("Product Uploading Failed");
  }
};

//  Get Products (For Showing) :-

const getProduct = async (setProducts) => {
  try {
   await getDocs(collection(db, "products")).then((snapShot) => {
      const allPost = snapShot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });

      setProducts(allPost);
    });
  } catch (error) {
    toast.error("Somthing Went Wrong!!!");
  }
};

//  Single Product View :-

const singleProView = async (postDetails , setUser) => {

  try {

    const userId = postDetails.userId
    
    const data = await getDocs(collection(db, 'user'))
    
    data.forEach((doc) =>{
      
      const dataa = doc.data()

      if (dataa.uid === userId) {
        
        setUser(dataa)

      }

    })

  } catch (error) {

    toast.error('Somthing Went Wrong')
    
  }

}

export { db, auth, app, signUp, signIn, logOut, uploadImage, getProduct, singleProView };
