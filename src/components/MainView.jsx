const MainView = ({ children }) => {
  return (
    <div className="flex-1 p-6 md:p-8 bg-gray-50 min-h-screen overflow-y-auto">
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  )
}

export default MainView

