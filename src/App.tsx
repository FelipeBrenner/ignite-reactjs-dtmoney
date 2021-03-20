import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from "./components/Header/"
import { Dashboard } from './components/Dashboard'
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionsModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle></GlobalStyle>
    </>
  );
}