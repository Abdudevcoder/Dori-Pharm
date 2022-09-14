import {createRoot} from 'react-dom/client';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
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
          <Modal.Title>Титул модалки</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Окно модалки
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary">Понятно</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
const root = createRoot(Example)
root.render(Example)

export default Example;