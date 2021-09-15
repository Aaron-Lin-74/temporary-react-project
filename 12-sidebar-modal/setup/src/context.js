import React, { useState, useContext } from 'react'

// useContext will need to use it
const AppContext = React.createContext()

// Create a separate component, wrap the whole app in the AppProvider
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  // With the children, we can see the other components
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openSidebar,
        openModal,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// custom hook, reduced the number of imports
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
