import FormularioFinal from "./formulariofinal"
export default function ClaseForm(){
    return(
        <>
        
    <div
    className="bg-cover bg-center bg-fixed"
    style={{ backgroundImage: "url('https://i.pinimg.com/736x/17/f3/df/17f3df5751abc0b44101af90834a3377.jpg')" }}
    >
            <h2 className="m-4 text-3xl font-bold">Formulario Dermatológico</h2>
            <p className="m-4">Los formularios dermatológicos nos ayudaran a tener un diagnostico y así tener una noción del tipo de piel con el que vayamos a trabajar</p>
            <div>
                <p className="m-4">A continuación podrás ingresar tu información</p>
            </div> 
                
            <div>
                <div className="m-5">
                <h3 className="m-4 text-2xl font-bold">Selecciona la opción que creas correspondiente</h3>
                    <form>
                        <input type="radio" name="tipopiel" value="Piel Grasa" />
                        <label>Tengo piel grasa</label><br/>
                        <input type="radio" name="tipopiel" value="Piel Seca" />
                        <label>Tengo piel seca</label><br/>
                        <input type="radio" name="tipopiel" value="Piel Mixta" />
                        <label>Tengo piel mixta</label><br/>
                    </form>
                    </div>
                </div>
            <FormularioFinal/>



            <div className="m-4 [&>input]:border [&>input]:border-blue-500 [&>input]:bg-white [&>input]:rounded-sm">
                <h1>A continuación te pediremos tus datos para enviarte el resultado que tanto esperas!</h1>
                <label for="fnombre">Nombre:</label><br/>
                <input type="text" name="fnombre" id="fnombre" /><br/>
                <label for="fapellido">Apellido:</label><br/>
                <input type="text" name="fapellido" id="fapellido" /><br/>
                <label for="fdni">Edad</label><br/>
                <input type="text" name="fedad" id="fedad" /><br/>
                <label for="fmail">E-Mail:</label><br/>
                <input type="text" name="fmail" id="fmail" /><br/>
                <label for="ftelefono">Telefono:</label><br/>
                <input type="text" name="ftelefono" id="ftelefono" /><br/>
                {/*<label>El type="date" nos muestra un calendario que varia según el navegador</label>*/}
                <label for="fnac">Fecha de Nacimiento:</label><br/>
                <input type="date" name="fnac" id="fnac" /><br/>
            </div>
        </div>
</>
        )
}