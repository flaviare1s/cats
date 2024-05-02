import React from 'react';
import Modal from 'react-modal';
import './SignIn.css'
Modal.setAppElement('#root');

function SignIn() {
  
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className='abrirModal' onClick={abrirModal}>Sign In</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel="Abrir Sign In"
      >
        
        <button className='fecharModal' onClick={fecharModal}>x</button>
        <form className="email">
            <input type="email" name="" id="" placeholder='Inserir E-mail'/>
            <input type="password" name="" id="" placeholder='Criar Senha' />
            <button className='signin' >Sign in</button>
        </form>
    
      </Modal>
    </div>
  );
}

export default SignIn
