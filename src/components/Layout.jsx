import TopNav from './TopNav';
import Footer from './Footer';
import '../App.css';
import '../utils.css';
import styles from './Layout.module.css';


export default function Layout() {
  return (
    <>
     <TopNav />
    <main className={styles.wrapper}>
     
     
      
      <section className={styles.container}>
        
        
      </section>
      <Footer />
    </main>
    </>

  )
 
}