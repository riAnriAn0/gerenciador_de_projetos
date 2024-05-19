import style from './Input.module.css'

function Input({ type, text, name, placeholder, handleOnchange, value }){
    return(
        <div className={style.form_control} >
            <label htmlFor={ name } >{ text }:</label>
            <input 
                required
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnchange}
                value={value}
            />
        </div>
    )
}

export default Input