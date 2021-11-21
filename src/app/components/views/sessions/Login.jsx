import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className=" bg">
    <br/><br/><br/><br/>
    <div className="container col-xl-6 col-lg-8 col-md-6 col-sm-8 col-10 rounded">
        <div className="row align-items-stretch">
            <div className="col-0 d-none d-lg-block col-lg-6 font">
            </div>
            <div className="col-12 col-lg-6 bg-white p-3 rounded-end">
                <div className="text-center">
                    <h3>CreditoFacil</h3>
                    <p>Ingresa para iniciar tu sesión</p>
                </div>
                    <div className="form-group" style={{textAlign: "center"}}>
                        <span className="help-block">
                            <br/>
                          {/*<strong>{{ msj }}</strong>*/}
                        </span>
                      </div>
                    <div className="mb-3 position-relative">
                        <input type="text" className="form-control" formControlName="username" placeholder="Email o Nombre de usuario" />
                       
                    </div>
                    <div className="mb-3 position-relative">
                        <input type="password" className="form-control" formControlName="password" placeholder="Contraseña" />
                      
                    </div>
                    <div className="row justify-content-between">
                        <div className="col">
                            <input type="checkbox" className="form-checkbox " />
                            <label for="" className="ml-2">Recuerdame</label>
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-primary btn-block">Ingresa</button>
                        </div>
                    </div>
                    <div className="mt-3 mb-3">
                        {/*<button className="btn btn-primary btn-block ">Sign in using Facebook</button>
                        <button className="btn btn-danger btn-block ">Sign in using Google</button>*/}
                    </div>
                    <div className="mb ">
                        <Link to="/session/forgot-password" style={{textDecoration:"none"}}>Olvidé mi contraseña</Link><br/>
                    </div>
              
            </div>
        </div>
    </div>
    <br/>
</div>
  );
}