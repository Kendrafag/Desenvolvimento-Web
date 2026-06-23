import { useState, useEffect } from "react";
import Logo from "../assets/Logo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/button.css";
import "../styles/pricing.css";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/footer.css";
import "../styles/testimonials.css";
import "../styles/contact.css";
import Champion from "../assets/Champion.svg";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Check from "../assets/Check.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import ProfileImageOne from "../assets/images/ProfileImageOne.jpg";
import Button from "../components/button.tsx";
import PianoBackground from "../assets/images/PianoBackground.jpg";
import TestimonialCard from "../components/TestimonialCard.tsx";
import Card from "../components/Card.tsx";

const testimonials = [
    {
        profileImage: ProfileImageOne,
        testimony: "Cada nota tocou nossos corações e fez o nosso grande dia ser ainda mais perfeito.",
        rating: 4.5,
        name: "Juliana & Rafael",
        role: "Recém-casados",
    },
    {
        profileImage: ProfileImageOne,
        testimony: "Repertório impecável! A melhor escolha que fizemos para a cerimônia, todos os convidados ficaram encantados com a música.",
        rating: 5,
        name: "Marcos & Amanda",
        role: "Recém-casados",
    },
    {
        profileImage: ProfileImageOne,
        testimony: "Nossos convidados não param de elogiar a elegância que o piano trouxe. Foi mágico! A trilha sonora perfeita para um dia que ficará na nossa memória.",
        rating: 4.5,
        name: "Carlos & Beatriz",
        role: "Recém-casados",
    },
];

export default function Home() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

    async function sendContactEmail() {
        if (!email.trim() || !message.trim()) {
            setFeedback({ type: "error", text: "Preencha e-mail e mensagem antes de enviar." });
            return;
        }

        setIsSending(true);
        setFeedback(null);

        try {
            const response = await fetch("/.netlify/functions/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error ?? "Erro ao enviar mensagem.");
            }

            setFeedback({ type: "success", text: "Mensagem enviada com sucesso! Em breve retornaremos." });
            setEmail("");
            setMessage("");
        } catch (error) {
            setFeedback({
                type: "error",
                text: error instanceof Error ? error.message : "Falha ao enviar. Tente novamente.",
            });
        } finally {
            setIsSending(false);
        }
    }

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo Music-side" width={220} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />

                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#contact">Contato</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>

                </nav>
            </header>
            <section id="hero">
                <img
                    src={PianoBackground}
                    alt=""
                    className="hero-bg-image"
                    aria-hidden="true"
                />
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

                <div className="container content">
                    <p className="desktop-only">
                        A trilha sonora perfeita
                    </p>
                    <h1>O toque especial para emocionar e marcar seu grande dia!</h1>
                    <p>Já pensou em caminhar até o altar ao som da sua música favorita tocada ao vivo? Criamos arranjos emocionantes e exclusivos para tornar o seu casamento inesquecível.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Solicitar Orçamento" /></span>
                        <span className="desktop-only">
                            <Button text="Ouvir repertório" secondary />
                        </span>
                    </div>
                </div>

            </section>

            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>
                                Tudo pensado especialmente para esse dia especial!
                            </h2>
                        </span>
                    </span>
                    <p>
                        A <strong>Music-side </strong>
                        já tornou inesquecível o grande dia de diversos casais.
                        Seja você o próximo a encantar seus convidados!
                        Veja abaixo como podemos transformar a sua cerimônia:
                    </p>
                </header>

                <section className="even-columns">
                    <Card
                        icon={Champion}
                        iconAlt="ícone de música"
                        title="Repertório Exclusivo"
                        description="Criamos arranjos únicos das suas músicas favoritas. Cada nota é tocada no piano para transmitir a emoção exata da sua história de amor."
                    />

                    <Card
                        icon={Champion}
                        iconAlt="ícone de excelência"
                        title="Excelência Musical"
                        description="Com anos de experiência em cerimônias, garantimos uma performance impecável e emocionante, desde a entrada até a saída dos noivos."
                    />

                    <Card
                        icon={Champion}
                        iconAlt="ícone de elegância"
                        title="Elegância Impecável"
                        description="Além da trilha sonora perfeita, a presença de um piano clássico traz um toque de sofisticação inigualável para a decoração do seu grande dia."
                    />
                </section>
            </section>


            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem já viveu essa emoção
                        </p>
                        <h2>Cada história de amor importa!</h2>
                    </span>
                    <p>
                        Quem já nos escolheu sabe do cuidado que temos com a trilha sonora. Acompanhe abaixo os depoimentos de casais que confiaram em nosso trabalho para tornar o seu grande dia inesquecível e emocionante.
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">

                        {testimonials.map((item, index) => (
                            <TestimonialCard key={`testimonial-${index}`} {...item} />
                        ))}

                        {testimonials.map((item, index) => (
                            <TestimonialCard key={`testimonial-dup-${index}`} {...item} hidden />
                        ))}

                    </div>
                </section>
            </section>



            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>

                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Essencial</h3>
                            <p>Piano clássico tocado do começo ao fim da sua cerimônia! Baixe a ferramenta já e comece acompanhar seu repertório!</p>
                        </span>
                        <h2>R$ 500</h2>
                        <Button text="Ver detalhes" secondary key="essencial" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Piano clássico dedilhado</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Repertório limitado</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Sem gravação de áudio</p>
                        </span>

                    </div>

                    <div className="pricing-card premium">

                        <span className="plan">
                            <h3>Premium</h3>
                            <p>Para quem deseja ter seu repertório da forma que preferir disponível a qualquer momento!
                                E para tornar ainda mais emociante um lindo acompanhamento de um violino clássico!
                            </p>
                        </span>
                        <span className="price">
                            <h2>R$ 1100</h2>
                        </span>
                        <Button text="Ver detalhes" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Repertório ilimitado</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Acompanhamento de violino</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Pequenas gravações das músicas disponível pós-celebração!</p>
                        </span>
                    </div>
                </section>
            </section>


            <section id="contact" className="container">

                <header>
                    <p className="desktop-only">
                        Entre em contato
                    </p>

                    <h2>Solicite um orçamento</h2>
                </header>

                <div className="contact-form">

                    <input
                        type="email"
                        placeholder="Seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <textarea
                        placeholder="Descreva sua necessidade (data, horário, local)"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    {feedback && (
                        <p className={feedback.type === "success" ? "form-feedback success" : "form-feedback error"}>
                            {feedback.text}
                        </p>
                    )}

                    <Button
                        text={isSending ? "Enviando..." : "Enviar"}
                        onClick={sendContactEmail}
                        disabled={isSending}
                    />

                </div>

            </section>

            <footer className="footer">

                <div className="container footer-content">

                    <div className="footer-brand">
                        <img className="footer-logo" src={Logo} alt="Logo Music-side" width={140} height={48} />

                        <p>
                            Repertório perfeito para sua cerimônia de casamento!
                        </p>

                        <div className="socials">
                            <a href="#" aria-label="Instagram">
                                <img src={instagram} alt="" width={20} height={20} />
                                Instagram
                            </a>
                            <a href="#" aria-label="Facebook">
                                <img src={facebook} alt="" width={20} height={20} />
                                Facebook
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3>Empresa</h3>

                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Faça parte do time</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3>Serviços</h3>

                        <ul>
                            <li><a href="#solution">Repertório exclusivo</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#pricing">Planos e preços</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3>Contato</h3>

                        <ul>
                            <li><a href="#contact">Solicitar orçamento</a></li>
                            <li><a href="mailto:contato@musicside.com">contato@musicside.com</a></li>
                            <li><a href="tel:+5500000000000">(45) 99820-1040</a></li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>© 2026 Music-side. Todos os direitos reservados.</p>
                </div>

            </footer>



        </>
    )
}
