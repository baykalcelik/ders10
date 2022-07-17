import Header from './components/Header';
import Footer from './components/Footer';

function Iletisim() {

    return <>
        <Header />
        <section>
            <h1>İletişim</h1>
            <p>Aşağıdaki iletişim formu ile bize yazabilrisiniz</p>
            <form action="">
                <div>
                    <label htmlFor="">Ad Soyad</label> <br />
                    <input type="text" /> <br />
                </div>
                <div>
                    <label htmlFor="">Eposta</label> <br />
                    <input type="email" /> <br />
                </div>
                <div>
                    <label htmlFor="">Mesajınız</label> <br />
                    <textarea></textarea>
                </div>
                <button type='submit'>Gönder</button>
            </form>
        </section>
        <Footer />
    </>
}

export default Iletisim;