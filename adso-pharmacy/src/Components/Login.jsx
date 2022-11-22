import React from "react";
import medical from "../media/medicalcare.png";
import Footer from "../Pages/Footer";
import Header from "../Pages/Header";

function Login() {
  return (
    <>
      <Header />
      <div id="inicio-sesion">
        <div class="primer-contair-is">
          <img src={medical} alt="Imagen" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
