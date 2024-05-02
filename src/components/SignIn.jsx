import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function SignIn () {
  
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className='abrirModal bg-green-500 text-white p-5 flex flex-row justify-between items-end absolute' onClick={abrirModal}>Sign In</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel="Abrir Sign In"
      >
        
        <button className='fecharModal' onClick={fecharModal}>X</button>
        <form className="email">
            <input type="email" name="" id="" placeholder='E-mail'/>
            <input type="password" name="" id="" placeholder='Password' />
            <button className='signin' >Sign in</button>
        </form>
    
      </Modal>
    </div>
  );
}
