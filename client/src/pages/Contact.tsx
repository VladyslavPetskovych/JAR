import axios from "axios";
import { FormEventHandler, useRef } from "react";
import Footer from "../components/footer/Footer";

export default function Contact() {

  return (<div>
      <p>Contact</p>
      <form encType="multipart/form-data" method="post">
        <input type="file" name="image" accept='image/*' />
        <input type="submit" value="Upload"/>
      </form>  
      <Footer />
    </div>);
}
