import { useRef } from 'react';
import UserTable from '../components/userTable';
import ComponentTable from '../components/componentTable';
import ToolTable from '../components/toolTable';
import ModalNewUser from '../components/modalNewUser';
import ModalNewComponent from '../components/modalNewComponent';
import ModalNewTool from '../components/modalNewTool';
import BtnCloseSession from '../components/btnCloseSession';
import GetUserName from '../services/getUserName';
const AdminHome = () => {

    const modalNewUserRef = useRef(null)
    const modalNewComponentRef = useRef(null)
    const modalNewToolRef = useRef(null)

    const showModalNewUser = () => {
      const modal = new window.bootstrap.Modal(modalNewUserRef.current)
      modal.show()
    };

    const showModalNewComponent = () => {
        const modal = new window.bootstrap.Modal(modalNewComponentRef.current)
        modal.show()
      }

    const showModalNewTool = () => {
        const modal = new window.bootstrap.Modal(modalNewToolRef.current)
        modal.show()
      }

    const userName = GetUserName()

    return (
        <>
            <div className="container-home pb-5">
                <div className="second-header row align-items-center mb-5">
                    <div className="container-title py-3 col-12 col-md-7">
                        <p className="text-center h2 mb-0"> Admin Home </p>
                        <p className="text-center small fst-italic text-secondary mb-0">
                            IEA management system
                        </p>
                    </div>
                    <div className='row col-12 col-md-5 text-center'>
                        <p className='col-6 mb-0 mt-2'> Usuario: <b>{userName}</b> </p>
                        <BtnCloseSession/>
                    </div>
                </div>
                <div className="principal-container">
                    <div className="container-principal-butttons d-flex flex-column flex-md-row justify-content-md-around">
                        <button
                            type="button"
                            className="btn btn-primary mb-3 btn-principal"
                            onClick={showModalNewUser}
                        >
                                Nuevo usuario
                        </button>
                        <button
                            type="button"
                            className="btn btn-info mb-3 btn-principal"
                            onClick={showModalNewComponent}
                        >
                            Nuevo componente
                        </button>
                        <button
                            type="button"
                            className="btn btn-warning mb-3 btn-principal"
                            onClick={showModalNewTool}
                        >
                            Nueva herramienta
                        </button>
                    </div>
                </div>
                <UserTable />
                <ComponentTable />
                <ToolTable />
            </div>
            <ModalNewUser refProp = {modalNewUserRef}/>
            <ModalNewComponent refProp = {modalNewComponentRef} />
            <ModalNewTool refProp = {modalNewToolRef}/>
        </>
    );
};

export default AdminHome