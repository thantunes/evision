import { InputFile } from './components/formWWU/customInputFile';
import CustomSelect from './components/formWWU/customSelect';
import './components/formWWU/index.global.css'

const Formwwu = () => {
    const SelectConfig = {
        showList: false,
        defaultSelectText: "Selecione o cargo",
        countryList: [
            { id: 1, name: "Cargo administrativo" },
            { id: 2, name: "Cargo vendas" }
        ]
    }
    return (
        <div>
            <form action="" className="Form-wwu">
                <input type="text" placeholder='Nome' name="Name" id="Name" />
                <input type="email" placeholder='E-mail' name="Name" id="Name" />
                <input type="phone" placeholder='Telefone' name="Name" id="Name" />
                <label style={{ width: "100%" }}>
                    <CustomSelect
                        defaultText={SelectConfig.defaultSelectText}
                        optionsList={SelectConfig.countryList}
                    />
                </label>
                <InputFile/>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}


export default Formwwu