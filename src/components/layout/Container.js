import style from './Container.module.css'

function Container({customClass, children}) {
    return(
        <div className={`${style.container} ${style[customClass]}`} >{children}</div>
    )
}

export default Container