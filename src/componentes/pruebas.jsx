export default function Pruebas(){
    return(
        <form className="bg-cyan-50 p-4 flex flex-col md:flex-row">
            <div className="[&>input]:border [&>input]:border-blue-500 [&>input]:bg-white [&>input]:rounded-sm">
                <label for="fnombre">Nombre:</label><br/>
                <input type="text" name="fnombre" id="fnombre" /><br/>
                <label for="fapellido">Apellido:</label><br/>
                <input type="text" name="fapellido" id="fapellido" /><br/>
                <label for="fdni">DNI:</label><br/>
                <input type="text" name="fdni" id="fdni" /><br/>
                <label for="fmail">E-Mail:</label><br/>
                <input type="text" name="fmail" id="fmail" /><br/>
                <label for="ftelefono">Telefono:</label><br/>
                <input type="text" name="ftelefono" id="ftelefono" /><br/>
                {/*<label>El type="date" nos muestra un calendario que varia según el navegador</label>*/}
                <label for="fnac">Fecha de Nacimiento:</label><br/>
                <input type="date" name="fnac" id="fnac" /><br/>
            </div>
        </form>
    )
}