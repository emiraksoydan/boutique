import React from 'react'

const DeleteModal = ({ name, handleSubmit = () => { } }: {
    name?: string,
    handleSubmit?: () => void | Promise<void>;
}) => {
    return (
        <div
            className="modal fade"
            id="deleteModal"
            aria-labelledby="deleteModalLabel"
            data-bs-backdrop="static"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalLabel">Silme Onayı</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
                    </div>
                    <div className="modal-body">
                        <p>
                            {name
                                ? `"${name}" adlı öğeyi silmek istediğinizden emin misiniz?`
                                : ''}
                        </p>
                    </div>
                    <div className="modal-footer d-flex flex-row">
                        <button
                            type="button"
                            className="btn btn-warning flex-fill"
                            data-bs-dismiss="modal"
                        >
                            Vazgeç
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger flex-fill"
                            data-bs-dismiss="modal"
                            onClick={handleSubmit}
                        >
                            Sil
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal