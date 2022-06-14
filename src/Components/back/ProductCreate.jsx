import { useRef } from "react";
import { useState, useContext } from "react";
import BackContext from "../../Contexts/BackContexts";

const empty = {
       title: '',
       price: '',
       code: '',
       description: ''
}

function ProductCreate () {

    const {setCreateProductData} = useContext(BackContext);

    const button = useRef();
    
    const [inputs, setInputs] = useState(empty);

    const handleInputs = (e, input) => setInputs(i => ({...i, [input]: e.target.value}));

    const create = () => {
        setCreateProductData({...inputs, price: parseFloat(inputs.price)});
        setInputs(empty);
        button.current.blur();
    }    

    return (
        <div className="col-5">
            <div className="card mt-4">
                <div className="card-header">
                    <h2>Naujas Produktas</h2>
                </div>
                <div className="card-body">
                    <div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label className="fu gray">Pavadinimas:</label>
                                    <input type="text" className="form-control" value={inputs.title} onChange ={e => handleInputs(e, 'title')}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group">
                                    <label className="fu gray">Kaina:</label>
                                    <input type="text" className="form-control" value = {inputs.price} onChange ={e => handleInputs(e, 'price')} />
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="form-group">
                                    <label className="fu gray">Kodas:</label>
                                    <input type="text" className="form-control" value={inputs.code} onChange ={e => handleInputs(e, 'code')} />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label className="fu gray">Aprašymas:</label>
                                    <textarea className="form-control" rows="3" value={inputs.description} onChange ={e => handleInputs(e, 'description')}></textarea>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mt-3">
                                <button type="button" ref={button} className="btn btn-outline-dark fu up" onClick={create}>Sukurti</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductCreate;