import { useState } from 'react'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

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
    <TransactionsProvider>

      <Header onOpenModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />

    </TransactionsProvider>
  );
}


