import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Вызвать
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Витамин Е</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Витамин Е позволяет улучшить питание кожи и волос, снизить их сухость, укрепить ногти.
        Витамин Е влияет на свертываемость крови, помогая предупреждать образование тромбов, улучшает эластичность крупных и мелких сосудов, а также замедляет образование холестериновых бляшек.
        Кроме того, этот витамин жизненно необходим для нормальной работы репродуктивной системы. 
        Витамин Е способствует улучшению выработки сперматозоидов у мужчин, а у женщин участвует в регуляции менструального цикла и смягчает неприятные симптомы при климаксе.
        Важен витамин Е для полноценного питания эмбриона – улучшает усвоение питательных веществ клеткам.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Example;