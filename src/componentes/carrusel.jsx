function Carrusel(){
    return(
    <div id='envolturaprincipal' className='flex'>
    <div id='botonera' className='flex gap-10'>
        <button className="bg-red-500 text-white rounded border border-amber-300">sig</button>
        <button className="bg-red-500 text-white rounded border border-amber-300">ant</button>
        </div>
    <div id='contenidocarrusel'>
    <div class="slide"><img src="/img/foto1.jpg" /></div>
    <div class="slide"><img src="/img/foto2.jpg" /></div>
    <div class="slide"><img src="/img/foto3.jpg" /></div>
        </div>
        </div>
        )
    }