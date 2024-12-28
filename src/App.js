import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import logo from "./assets/logo.png"; 
import Calculator from "./components/Calculator"; 
import Gallery from "./components/Gallery"; 
import ContactPage from "./components/ContactPage"; 


const ScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return null;
};

function MainPage() {
    return (
        <div>
            
            <section id="home" className="home">
                <h1>Добро пожаловать в «Архитектура Комфорта»</h1>
                <p>Создаём комфортные и безопасные пространства для жизни и работы.</p>
                <p>Наша компания предлагает полный спектр услуг по проектированию и строительству домов, начиная от фундамента и заканчивая внутренней отделкой.</p>
            </section>

            
            <section id="about" className="about">
                <h2>О компании</h2>
                <p>
                    Архитектура Комфорта — это надежный партнер в сфере строительства домов, который предлагает полный спектр услуг по проектированию и возведению жилых и коммерческих объектов. Наша команда состоит из опытных специалистов, которые обладают глубокими знаниями и навыками в области строительства, архитектуры и дизайна.
                </p>
                <h3>Миссия компании</h3>
                <p>Миссия компании "Атмосфера комфорта" заключается в создании комфортных и безопасных пространств для жизни и работы, где каждый клиент чувствует заботу и внимание к своим потребностям.</p>
                <h3>Основные ценности</h3>
                <ul>
                    <li><strong>Качество:</strong> Используем только лучшие материалы и технологии.</li>
                    <li><strong>Индивидуальный подход:</strong> Учитываем все пожелания и требования клиентов.</li>
                    <li><strong>Инновации:</strong> Постоянно ищем новые технологии для улучшения услуг.</li>
                    <li><strong>Устойчивое развитие:</strong> Забота об экологии и будущем планеты.</li>
                    <li><strong>Командная работа:</strong> Ценим вклад каждого сотрудника, создаём атмосферу сотрудничества.</li>
                </ul>
            </section>

            
            <section id="services" className="services">
                <h2>Наши услуги</h2>
                <ul>
                    <li>
                        <strong>Строительство домов под ключ:</strong> Полный цикл услуг, включая проектирование, фундамент, стены, крышу и отделку. Материалы: кирпич, газобетон, дерево.
                    </li>
                    <li>
                        <strong>Проектирование:</strong> Уникальные проекты домов, готовые проекты, а также ландшафтный дизайн.
                    </li>
                    <li>
                        <strong>Отделка и ремонт:</strong> Внутренняя и внешняя отделка, капитальный и косметический ремонт.
                    </li>
                    <li>
                        <strong>Консультации:</strong> Оценка стоимости, помощь в выборе материалов, сопровождение проектов.
                    </li>
                    <li>
                        <strong>Калькулятор стоимости строительства:</strong> Удобный онлайн-калькулятор для расчета стоимости строительства.
                    </li>
                </ul>
            </section>

            
            <section id="testimonials" className="testimonials">
                <h2>Отзывы наших клиентов</h2>
                <div className="testimonial">
                    <p>
                        «Мы обратились в Архитектура Комфорта для строительства нашего первого дома, и остались в полном восторге! Проект был разработан быстро, а качество работ превзошло наши ожидания.» — <strong>Анна и Сергей Петровы</strong>
                    </p>
                </div>
                <div className="testimonial">
                    <p>
                        «Хочу выразить благодарность Архитектура Комфорта за отличную работу! Я долго искал подрядчика, и нашел лучших. Рекомендую!» — <strong>Игорь Сидоров</strong>
                    </p>
                </div>
                <div className="testimonial">
                    <p>
                        «С Архитектура Комфорта мы строили дом для нашей семьи. Мы довольны результатом. Спасибо за внимание к деталям!» — <strong>Елена Кузнецова</strong>
                    </p>
                </div>
            </section>

            
            <section id="calculator" className="calculator-section">
                <Calculator />
            </section>

            
            <section id="gallery" className="gallery-section">
                <Gallery />
            </section>
        </div>
    );
}

function App() {
    return (
        <Router>
            <ScrollToSection />
            <div className="app">
                
                <header className="header">
                    <div className="logo-container">
                        <img src={logo} alt="Логотип компании" className="logo-image" />
                        <span className="logo-text">Архитектура Комфорта</span>
                    </div>
                    <nav className="nav">
                        <ul>
                            <li><Link to="/#home">Главная</Link></li>
                            <li><Link to="/#services">Услуги</Link></li>
                            <li><Link to="/#about">О нас</Link></li>
                            <li><Link to="/#testimonials">Отзывы</Link></li>
                            <li><Link to="/#calculator">Калькулятор</Link></li>
                            <li><Link to="/#gallery">Галерея</Link></li>
                            <li><Link to="/contacts">Контакты</Link></li>
                        </ul>
                    </nav>
                </header>

               
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/contacts" element={<ContactPage />} />
                    </Routes>
                </main>

                
                <footer className="footer">
                    <p>&copy; 2024 Архитектура Комфорта. Все права защищены.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
