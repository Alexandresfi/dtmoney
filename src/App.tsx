import { useState } from 'react'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsTable } from "./components/transactionsTable";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransctionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransctionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransctionModalOpen(false)
  }

  return (
    <>
      <Header onOpenModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <TransactionsTable />
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}


