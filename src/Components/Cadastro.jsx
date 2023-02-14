function Cadastro(props) {
    return(
    
        <form className="cadastro">
            <div className="inputs">
                <div>
                    <label>Selecione o Serviço:</label>
                   <select name="" className="select" placeholder="Selecione o serviço">
                        <option value="" hidden disabled selected></option>
                        <option value="1"> Serviço 1</option>
                   </select>
                    
                </div>

                <div>
                    <label>Dia:</label>
                    <input type="date"/>   
                    <label>Hora:</label>
                    <input type="time"/>
                    </div>
                </div>
            </form>
       
        
    )
}

export default Cadastro;