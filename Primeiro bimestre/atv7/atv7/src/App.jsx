import Header from './components/Header';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  
  const dadosReceita = {
    titulo: "Como preparar um bolo de chocolate",
    dataISO: "2024-05-04",
    dataLegivel: "Publicado em 04 de Maio de 2024",
    paragrafo1: "O bolo de chocolate é uma receita fácil que agrada a todos! Pode ser realizada para uma ocasião especial ou apenas para um cafezinho.",
    paragrafo2: "Utilizando os ingredientes corretos é possível preparar um belo bolo de chocolate de dar água na boca!",
    paragrafo3: "Para preparar é bem simples utilize um liquidificador, bata os ovos, o açúcar, o óleo, o achocolatado e a farinha de trigo. Depois Despeje a massa em uma tigela e adicione a água quente, o sal e o fermento, misturando bem e por fim despeje a massa em uma forma untada e asse em forno médio-alto (200° C), preaquecido, por 40 minutos.",
    
    imgSrc: "/img/bolo-de-chocolate-fofinho-molhadinho-calda-chocolate.jpg",
    imgAlt: "Bolo caseiro de chocolate fofinho em forma redonda, com cobertura muito cremosa de chocolate também",
    imgLegenda: "Bolo de chocolate caseiro com cobertura cremosa"
  };

  return (
    <div className="grid-container">
      <Header />
      
      <Article 
        titulo={dadosReceita.titulo}
        dataISO={dadosReceita.dataISO}
        dataLegivel={dadosReceita.dataLegivel}
        paragrafo1={dadosReceita.paragrafo1}
        paragrafo2={dadosReceita.paragrafo2}
        paragrafo3={dadosReceita.paragrafo3}
        imgSrc={dadosReceita.imgSrc}
        imgAlt={dadosReceita.imgAlt}
        imgLegenda={dadosReceita.imgLegenda}
      />
      
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;