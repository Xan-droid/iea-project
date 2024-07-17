import { useRef } from 'react';
import ComponentByUser from '../components/componentByUser';
import ToolByUserTable from '../components/toolByUserTable';
import ModalRequestComponent from '../components/modalRequestComponent';
import ModalRequestTool from '../components/modalRequestTool';
import BtnCloseSession from '../components/btnCloseSession';
import GetUserName from '../services/getUserName';

const UserHome = () => {

    const modalRequestToolRef = useRef(null)
    const modalRequestComponentRef = useRef(null)

    const showModalRequestTool = () => {
      const modal = new window.bootstrap.Modal(modalRequestToolRef.current)
      modal.show()
    };

    const showModalRequestComponent = () => {
        const modal = new window.bootstrap.Modal(modalRequestComponentRef.current)
        modal.show()
      }

    const userName = GetUserName()

    return (
        <>
            <div className="container-home pb-5">
            <div className="second-header row align-items-center mb-5">
                    <div className="container-title py-3 col-12 col-md-7">
                        <p className="text-center h2 mb-0"> User Home </p>
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
                            className="btn btn-primary btn-principal mb-3"
                            onClick={showModalRequestTool}
                        >
                                Solicitar herramienta
                        </button>
                        <button
                            type="button"
                            className="btn btn-info btn-principal mb-3"
                            onClick={showModalRequestComponent}
                        >
                            Solicitar componente
                        </button>
                    </div>
                </div>
                <ComponentByUser />
                <ToolByUserTable />
            </div>
            <ModalRequestComponent refProp = {modalRequestComponentRef}/>
            <ModalRequestTool refProp = {modalRequestToolRef} />
        </>
    );
};

export default UserHome