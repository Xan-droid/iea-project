import closeSession from "../services/closeSession";

const BtnCloseSession = () => {

    const closeCurrentSession = () => {
        closeSession()
    }
    return (
        <div className="btn-close-session col-6 text-center">
            <button
                type="button"
                className="btn btn-outline-danger"
                onClick={closeCurrentSession}
            >
                Cerrar sesión
            </button>
        </div>
    )
}


export default BtnCloseSession