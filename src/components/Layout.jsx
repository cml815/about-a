import TopNav from './TopNav';
import Footer from './Footer';
import '../App.css';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <>
    <main className={styles.wrapper}>
      <TopNav />
      <section className={styles.container}>
        
        
      </section>
      <Footer />
    </main>
    </>

  )
 
}