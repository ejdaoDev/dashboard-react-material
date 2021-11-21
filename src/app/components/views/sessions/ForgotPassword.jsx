import * as React from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className="bg">
    <br/><br/><br/><br/><br/><br/>
    <div className="row justify-content-center">
      <div className="col-10 col-md-8 col-xl-6 shadow cg">
        <div className="text-center">
          <h5 className="mt-2">CreditoFacil</h5>
          <p><small className="text-muted">¿Olvidaste tu contraseña?, aquí puedes recuperarla facilmente</small></p>
        </div>
        <form>
          <div className="mb-3">
            <div className="input-group position-relative">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
          </div>
          <div className="">
            <button className="btn btn-outline-primary btn-block " type="button">Obtener nueva contraseña</button>
          </div>
        </form>
        <div className="mb-3">
          <p className="mt-3 mb-1"><Link to="/session/signin" style={{textDecoration:"none"}}>Ingresar</Link></p>
        </div>
      </div>
    </div>
    <br/>
  </div>

  );
}