import { useState } from "react"

export default function FormularioFinal(){
    const [respuesta1, setRespuesta1] = useState("");
    const [respuesta2, setRespuesta2] = useState("");
    const [respuesta3, setRespuesta3] = useState("");
    const [respuesta4, setRespuesta4] = useState("");
    const [respuesta5, setRespuesta5] = useState("");
    const [respuesta6, setRespuesta6] = useState("");
    const [respuesta7, setRespuesta7] = useState("");
    const [respuesta8, setRespuesta8] = useState("");
    const [respuesta9, setRespuesta9] = useState("");
    const [respuesta10, setRespuesta10] = useState("");
    const [respuesta11, setRespuesta11] = useState("");
    const [respuesta12, setRespuesta12] = useState("");
    const [respuesta13, setRespuesta13] = useState("");
    const [respuesta14, setRespuesta14] = useState("");
    const [respuesta15, setRespuesta15] = useState("");
    const [respuesta16, setRespuesta16] = useState("");
    const [respuesta17, setRespuesta17] = useState("");

    const [resultadoPantalla, setResultadoPantalla] = useState("");

    function handleCuestionario(evento){
        console.log(evento.target.name);
        console.log(evento.target.value);
        switch(evento.target.name){
            case "respuesta1":
                setRespuesta1(evento.target.value);
                break;
            case "respuesta2":
                setRespuesta2(evento.target.value);
                break;
            case "respuesta3":
                setRespuesta3(evento.target.value);
                break;
            case "respuesta4":
                setRespuesta4(evento.target.value);
                break;
            case "respuesta5":
                setRespuesta5(evento.target.value);
                break;
            case "respuesta6":
                setRespuesta6(evento.target.value);
                break;
            case "respuesta7":
                setRespuesta7(evento.target.value);
                break;
            case "respuesta8":
                setRespuesta8(evento.target.value);
                break;
            case "respuesta9":
                setRespuesta9(evento.target.value);
                break;
            case "respuesta10":
                setRespuesta10(evento.target.value);
                break;
            case "respuesta11":
                setRespuesta11(evento.target.value);
                break;
            case "respuesta12":
                setRespuesta12(evento.target.value);
                break;
            case "respuesta13":
                setRespuesta13(evento.target.value);
                break;
            case "respuesta14":
                setRespuesta14(evento.target.value);
                break;
            case "respuesta15":
                setRespuesta15(evento.target.value);
                break;
            case "respuesta16":
                setRespuesta16(evento.target.value);
                break;
            case "respuesta17":
                setRespuesta17(evento.target.value);
                break;
        }
    }

        function handleEnvio(evento){
            evento.preventDefault();
            const resultadoFormulario = parseInt(respuesta1) + parseInt(respuesta2) + parseInt(respuesta3) + parseInt(respuesta4) + parseInt(respuesta5) + parseInt(respuesta6) + parseInt(respuesta7) + parseInt(respuesta8) + parseInt(respuesta9) + parseInt(respuesta10) + parseInt(respuesta11) + parseInt(respuesta12) + parseInt(respuesta13) + parseInt(respuesta14) + parseInt(respuesta15) + parseInt(respuesta16) + parseInt(respuesta17);
            setResultadoPantalla((e) => {
                if (resultadoFormulario )
        })

    return(
        
        <form onSubmit={(e) => handleEnvio(e)} className="bg-red-300 p-1 text-lg">
            
    <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://i.pinimg.com/736x/17/f3/df/17f3df5751abc0b44101af90834a3377.jpg')"}}>
        </div>
            <div className="formcheckbox m-4">
                <p className="">¿Tenes brillo en la nariz, mentón, frente o en los pómulos? </p>
                <input type="radio" name="respuesta1" value="20" onChange={(e) => handleCuestionario(e)}/>
                <label>Si</label><br/>
                <input type="radio" name="respuesta1" value="10" onChange={(e) => handleCuestionario(e)}/>
                <label>No</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Tenés los poros dilatados?</p>
                <input type="radio" name="respuesta2" value="20" onChange={(e) => handleCuestionario(e)}/>
                <label>Si</label><br/>
                <input type="radio" name="respuesta2" value="10" onChange={(e) => handleCuestionario(e)}/>
                <label>No</label><br/>
            </div>

            <div className="formcheckbox m-4">
                <p className="">¿Tenés enrojecimiento o telangiectasias en los pómulos?</p>
                <input type="radio" name="respuesta3" value="20" onChange={(e) => handleCuestionario(e)}/>
                <label>Si</label><br/>
                <input type="radio" name="respuesta3" value="10" onChange={(e) => handleCuestionario(e)}/>
                <label>No</label><br/>
            </div>

            <div className="formcheckbox m-4">
                <p className="">¿Tenés la nariz enrojecida y con telangiectasias?</p>
                <input type="radio" name="respuesta4" value="30" onChange={(e) => handleCuestionario(e)}/>
                <label>Si</label><br/>
                <input type="radio" name="respuesta4" value="10" onChange={(e) => handleCuestionario(e)}/>
                <label>No</label><br/>
            </div>

            <div className="formcheckbox m-4">
                <p className="">La piel al tacto entre los dedos pulgar e indice, ¿Se siente fina o gruesa?</p>
                <input type="radio" name="respuesta5" value="10" onChange={(e) => handleCuestionario(e)}/>
                <label>Fina</label><br/>
                <input type="radio" name="respuesta5" value="20" onChange={(e) => handleCuestionario(e)}/>
                <label>Gruesa</label><br/>
            </div>

            <div className="formcheckbox m-4">
                <p className="">La piel al tacto entre los dedos pulgar e indice, ¿Es elástica o se siente disminución de la elasticidad?</p>
                <input type="radio" name="respuesta6" value="10" onChange={(e) => handleCuestionario(e)}/>
                <label>Se siente elástica</label><br/>
                <input type="radio" name="respuesta6" value="20" onChange={(e) => handleCuestionario(e)}/>
                <label>Se siente disminución de la elasticidad</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Cómo sentis la piel al tacto?</p>
                <input type="radio" name="respuesta7" value="10" onChange={(e) => handleCuestionario(e)}/>
                <label>Se siente suave</label><br/>
                <input type="radio" name="respuesta7" value="20" onChange={(e) => handleCuestionario(e)}/>
                <label>Se siente áspera</label><br/>
                <input type="radio" name="respuesta7" value="0"  onChange={(e) => handleCuestionario(e)}/>
                <label>No consigo darme cuenta</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Tienes arrugas superficiales o lineas de expresión?</p>
                <input type="radio" name="respuesta8" value="0" onChange={(e) => handleCuestionario(e)}/>
                <label>No</label><br/>
                <input type="radio" name="respuesta8" value="20" onChange={(e) => handleCuestionario(e)}/>
                <label>Algunas</label><br/>
                <input type="radio" name="respuesta8" value="30" onChange={(e) => handleCuestionario(e)}/>
                <label>Si, muchas</label><br/>
            <div className="formcheckbox m-4">
                <p className="">¿Te enrojeces facilmente en lugares con calefacción?</p>
                <input type="radio" name="respuesta9" value="20" onChange={(e) => handleCuestionario(e)}/>
                <label>Si</label><br/>
                <input type="radio" name="respuesta9" value="0" onChange={(e) => handleCuestionario(e)}/>
                <label>No</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Te enrojeces muy rápido cuando estás expuestx al sol?</p>
                <input type="radio" name="respuesta10" value="20" onChange={(e) => handleCuestionario(e)}/>
                <label>Si</label><br/>
                <input type="radio" name="respuesta10" value="0" onChange={(e) => handleCuestionario(e)}/>
                <label>No</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Te enrojeces rapidamente cuando tomas bebidas alcoholicas?</p>
                <input type="radio" name="respuesta11" value="20" onChange={(e) => handleCuestionario(e)}/>
                <label>Si</label><br/>
                <input type="radio" name="respuesta11" value="0" onChange={(e) => handleCuestionario(e)}/>
                <label>No</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Tenes comedones (los llamados puntos negros) en el rostro?</p>
                <input type="radio" name="respuesta12" value="30" onChange={(e) => handleCuestionario(e)}/>
                <label>Si</label><br/>
                <input type="radio" name="respuesta12" value="0" onChange={(e) => handleCuestionario(e)}/>
                <label>No</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Tenes comedones en el pecho, espalda o ambos lados?</p>
                <input type="radio" name="respuesta13" value="30" onChange={(e) => handleCuestionario(e)}/>
                <label>Si, en uno de los lugares mencionados</label><br/>
                <input type="radio" name="respuesta13" value="0" onChange={(e) => handleCuestionario(e)}/>
                <label>No</label><br/>
                <input type="radio" name="respuesta13" value="50" onChange={(e) => handleCuestionario(e)}/>
                <label>En ambos lados</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Toleras bien los cosmeticos que se aplican en tu piel?</p>
                <input type="radio" name="respuesta14" value="0" onChange={(e) => handleCuestionario(e)}/>
                <label>Si</label><br/>
                <input type="radio" name="respuesta14" value="50" onChange={(e) => handleCuestionario(e)}/>
                <label>No, todas me irritan o me enrojecen la piel</label><br/>
                <input type="radio" name="respuesta14" value="20" onChange={(e) => handleCuestionario(e)}/>
                <label>Algunas</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Sentis que el cuero cabelludo es oleoso o graso?</p>
                <input type="radio" name="respuesta15" value="30" onChange={(e) => handleCuestionario(e)}/>
                <label>Si</label><br/>
                <input type="radio" name="respuesta15" value="0" onChange={(e) => handleCuestionario(e)}/>
                <label>No</label><br/>
                <input type="radio" name="respuesta15" value="20" onChange={(e) => handleCuestionario(e)}/>
                <label>A veces</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Te pica el cuero cabelludo o tenes caspa?</p>
                <input type="radio" name="respuesta16" value="20" onChange={(e) => handleCuestionario(e)}/>
                <label>Si</label><br/>
                <input type="radio" name="respuesta16" value="0" onChange={(e) => handleCuestionario(e)}/>
                <label>No</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className="">¿Sentis que tenes el cabello opaco o sin vida?</p>
                <input type="radio" name="respuesta17" value="20" onChange={(e) => handleCuestionario(e)}/>
                <label>Si</label><br/>
                <input type="radio" name="respuesta17" value="0" onChange={(e) => handleCuestionario(e)}/>
                <label>No</label><br/>
            </div>


    </div>
    <button className="p-2 bg-rose-400 hover:bg-pink-700 transform-color duration-500" type="submit">Enviar formulario</button>
    <p>Su resultado fue: {resultadoPantalla}</p>
    <p>{</p>
</form>
    )
}