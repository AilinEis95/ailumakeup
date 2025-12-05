export default function FormularioFinal(){
    return(
        
        <form className="bg-red-300 p-1 text-lg">
            
    <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://i.pinimg.com/736x/17/f3/df/17f3df5751abc0b44101af90834a3377.jpg')"}}>
        </div>
            <div className="formcheckbox m-4">
                <p className="">¿Tenes brillo en la nariz, mentón, frente o en los pómulos? </p>
                <input type="checkbox" name="respuesta1" value="20" />
                <label>Si</label><br/>
                <input type="checkbox" name="respuesta1" value="10" />
                <label>No</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Tenés los poros dilatados?</p>
                <input type="checkbox" name="respuesta2" value="20" />
                <label>Si</label><br/>
                <input type="checkbox" name="respuesta2" value="10" />
                <label>No</label><br/>
            </div>

            <div className="formcheckbox m-4">
                <p className="">¿Tenés enrojecimiento o telangiectasias en los pómulos?</p>
                <input type="checkbox" name="respuesta3" value="20" />
                <label>Si</label><br/>
                <input type="checkbox" name="respuesta3" value="10" />
                <label>No</label><br/>
            </div>

            <div className="formcheckbox m-4">
                <p className="">¿Tenés la nariz enrojecida y con telangiectasias?</p>
                <input type="checkbox" name="respuesta4" value="30" />
                <label>Si</label><br/>
                <input type="checkbox" name="respuesta4" value="10" />
                <label>No</label><br/>
            </div>

            <div className="formcheckbox m-4">
                <p className="">La piel al tacto entre los dedos pulgar e indice, ¿Se siente fina o gruesa?</p>
                <input type="checkbox" name="respuesta5" value="10" />
                <label>Fina</label><br/>
                <input type="checkbox" name="respuesta5" value="20" />
                <label>Gruesa</label><br/>
            </div>

            <div className="formcheckbox m-4">
                <p className="">La piel al tacto entre los dedos pulgar e indice, ¿Es elástica o se siente disminución de la elasticidad?</p>
                <input type="checkbox" name="respuesta6" value="10" />
                <label>Se siente elástica</label><br/>
                <input type="checkbox" name="respuesta6" value="20" />
                <label>Se siente disminución de la elasticidad</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Cómo sentis la piel al tacto?</p>
                <input type="checkbox" name="respuesta7" value="10" />
                <label>Se siente suave</label><br/>
                <input type="checkbox" name="respuesta7" value="20" />
                <label>Se siente áspera</label><br/>
                <input type="checkbox" name="respuesta7" value="0" />
                <label>No consigo darme cuenta</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Tienes arrugas superficiales o lineas de expresión?</p>
                <input type="checkbox" name="respuesta8" value="0" />
                <label>No</label><br/>
                <input type="checkbox" name="respuesta8" value="20" />
                <label>Algunas</label><br/>
                <input type="checkbox" name="respuesta8" value="30" />
                <label>Si, muchas</label><br/>
            <div className="formcheckbox m-4">
                <p className="">¿Te enrojeces facilmente en lugares con calefacción?</p>
                <input type="checkbox" name="respuesta9" value="20" />
                <label>Si</label><br/>
                <input type="checkbox" name="respuesta9" value="0" />
                <label>No</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Te enrojeces muy rápido cuando estás expuestx al sol?</p>
                <input type="checkbox" name="respuesta10" value="20" />
                <label>Si</label><br/>
                <input type="checkbox" name="respuesta10" value="0" />
                <label>No</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Te enrojeces rapidamente cuando tomas bebidas alcoholicas?</p>
                <input type="checkbox" name="respuesta11" value="20" />
                <label>Si</label><br/>
                <input type="checkbox" name="respuesta11" value="0" />
                <label>No</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Tenes comedones (los llamados puntos negros) en el rostro?</p>
                <input type="checkbox" name="respuesta12" value="30" />
                <label>Si</label><br/>
                <input type="checkbox" name="respuesta12" value="0" />
                <label>No</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Tenes comedones en el pecho, espalda o ambos lados?</p>
                <input type="checkbox" name="respuesta13" value="30" />
                <label>Si, en uno de los lugares mencionados</label><br/>
                <input type="checkbox" name="respuesta13" value="0" />
                <label>No</label><br/>
                <input type="checkbox" name="respuesta13" value="50" />
                <label>En ambos lados</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Toleras bien los cosmeticos que se aplican en tu piel?</p>
                <input type="checkbox" name="respuesta14" value="0" />
                <label>Si</label><br/>
                <input type="checkbox" name="respuesta14" value="50" />
                <label>No, todas me irritan o me enrojecen la piel</label><br/>
                <input type="checkbox" name="respuesta14" value="20" />
                <label>Algunas</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Sentis que el cuero cabelludo es oleoso o graso?</p>
                <input type="checkbox" name="respuesta15" value="30" />
                <label>Si</label><br/>
                <input type="checkbox" name="respuesta15" value="0" />
                <label>No</label><br/>
                <input type="checkbox" name="respuesta15" value="20" />
                <label>A veces</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Te pica el cuero cabelludo o tenes caspa?</p>
                <input type="checkbox" name="respuesta16" value="20" />
                <label>Si</label><br/>
                <input type="checkbox" name="respuesta16" value="0" />
                <label>No</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Sentis que tenes el cabello opaco o sin vida?</p>
                <input type="checkbox" name="respuesta17" value="20" />
                <label>Si</label><br/>
                <input type="checkbox" name="respuesta17" value="0" />
                <label>No</label><br/>
            </div>


    </div>
</form>
    )
}