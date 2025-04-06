import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import MainView from "./MainView"

const Layout = ({ children, onSearch }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar onSearch={onSearch} />
      <div className="flex flex-1">
        <Sidebar />
        <MainView>{children}</MainView>
      </div>
    </div>
  )
}

export default Layout

