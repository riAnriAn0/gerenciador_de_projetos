import style from './Select.module.css'

function Select({ text, name, options, placeholder, handleOnchange, value }){
    return(
        <div className={style.form_control} >
            <label htmlFor={ name } >{ text }:</label>
            <select 
                required
                placeholder={placeholder}
                name={name} 
                id={name} 
                onChange={handleOnchange}
                value={ value || ''}
            >   
                <option></option>
                {options.map((option) => (
                    <option 
                        value={option.id} 
                        key={option.id}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select