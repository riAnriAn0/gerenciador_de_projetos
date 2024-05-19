import style from './Submit.module.css'

function Submit({ text }){
    return(
        <div className={style.form_control} >
            <button className={style.btn}>{ text }</button>
        </div>
    )
}

export default Submit