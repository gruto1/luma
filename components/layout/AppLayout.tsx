import Footer from './footer/Footer';
import Header from './header/Header'
import { ReactNode } from "react";
type ContainerProps = {
  children: ReactNode;
};
const AppLayout = ({children}: ContainerProps) => {
  return (
    <>
    <Header/>
    <main className='min-h-screen'>
        {children}
    </main>
    <Footer/>
      
    </>
  )
}

export default AppLayout
