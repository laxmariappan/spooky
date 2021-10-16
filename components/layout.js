import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
    return (
      <>
       <div className="spooky-wrapper bg-neutral" data-theme="halloween">
        <Header />
        <main className="">{children}</main>
        <Footer />
        </div>
      </>
    )
  }