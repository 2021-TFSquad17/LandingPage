import closeModalIcon from "../../../assets/img/close-icon.svg";

function DepoimentoItem({titulo,subTitulo,link,imagem,textoDeFala}) {
    return (
        <div className="Depoimento-modal modal fade" id={link} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src={closeModalIcon} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">{titulo}</h2>
                                    <p className="item-intro text-muted">{subTitulo}</p>
                                    <img className="img-fluid d-block mx-auto" src={imagem} alt="..." />
                                    <p>"{textoDeFala}"</p>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Fechar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DepoimentoItem;