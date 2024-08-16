import "./Create.css";
import Header from "../Header/Header";
import { useContext, useState } from "react";
import { toast } from "sonner";
import { AuthContext, FirebaseContext } from "../../context/FireContext";
import { useNavigate } from "react-router-dom";

const Create = () => {

  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  //  Upload Image :-

  const {user} = useContext(AuthContext)
  const {uploadImage} = useContext(FirebaseContext)

  const handleSumbit = () => {
    try {

      console.log(user.uid , "hahahahhaha");

      uploadImage(name, category, price, image, user.uid)
      navigate('/')

    } catch (error) {
      toast.error("Somthing Went Wrong");
    }
  };

  return (
    <>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              required
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              type="number"
              id="fname"
              name="Price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              required
            />
            <br />
          </form>
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>

          <br />
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <br />
          <button onClick={handleSumbit} type="submit" className="uploadBtn">
            upload and Submit
          </button>
        </div>
      </card>
    </>
  );
};

export default Create;