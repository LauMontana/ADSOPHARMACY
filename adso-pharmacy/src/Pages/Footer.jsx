import React from "react";
import "./footer.css";
import Mercado from "../media/logo-mercado-pago.png"

export default function Footer() {
  return (
    // <!-- aqui inicis el contenido del footer -->
    <footer id="footer-container">
      <div className="footer-main-wapper">
        <div className="primer-f-sub-container">
          <h2>Informacion de contacto: </h2>
          <p>
            <i class="bx bxs-planet"></i> www.ADSOPharmacy.com
          </p>
          <p>
            <i class="bx bxs-phone"></i> 311 866 7499
          </p>
          <p>
            <i class="bx bxs-map"></i> Cra 98# 54 b 29 - Bogotá D.C
          </p>
          <p>
            <i class="bx bxs-store"></i> Horario de lunes a viernes de 8:00am a
            8:00pm
          </p>
        </div>

        <div className="segundo-f-sub-container">
          <div class="metodo-pago">
            <p>Metodos de pago</p>
            <i class="bx bxl-visa"></i>
            <i class="bx bxl-mastercard"></i>
            <img
              class="mrd-pgo"
              src={Mercado}
              alt="Mercado-pago"
            />
          </div>
          <div class="redes-sociales">
            <p>Redes sociales:</p>
            <i class="bx bxl-facebook-circle"></i>
            <i class="bx bxl-instagram-alt"></i>
            <i class="bx bxl-twitter"></i>
            <i class="bx bxl-whatsapp-square"></i>
          </div>

          <div class="newsletter">
            <p>Suscribase a news letter: </p>
            <input type="text" placeholder="Suscribirse.." />
            <i class="bx bxs-send"></i>
          </div>
        </div>

        <div className="tercer-f-sub-container">
          <div class="clausulas">
            <nav class="menu-wrapper-footer">
              <h2>Politicas: </h2>
              <a href="#">Politica de privacidad</a>
              <a href="#">Tratamiento de datos</a>
              <a href="#">PQR</a>
            </nav>
          </div>
        </div>
      </div>
      <div id="copyright">
        &copy Copyright - ADSO PHARMACY - Todos los derechos reservados.
      </div>
    </footer>
  );
}
