import React from 'react'

const AccordionComp = () => {
    return (
        <div className="shadow">
            <div className='container'>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button style={{outline: "none", fontSize: '24px'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Quick Booking
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"><div className="row g-3 align-items-center">
                                <div className="col-auto">
                                    <label htmlFor="inputPassword6" className="col-form-label">Phone Number:</label>
                                </div>
                                <div className="col-auto">
                                    <input type="password" id="inputPassword6" className="form-control" aria-labelledby="passwordHelpInline" />
                                </div>
                                <div className="col-auto">
                                    <span id="passwordHelpInline" className="form-text">
                                        <button type="button" className="btn btn-primary" onClick={() => {
                                            alert("Submitted!")
                                        }}>Submit</button>
                                    </span>
                                </div>
                            </div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccordionComp