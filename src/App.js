import React from "react";
import "./App.css";
import logo from "./assets/logo.png"; // Импорт логотипа
import Calculator from "./components/Calculator"; // Импорт компонента калькулятора

function App() {
    return (
        <div className="app">
            {/* Шапка */}
            <header className="header">
                <div className="logo-container">
                    <img src={logo} alt="Логотип компании" className="logo-image" />
                    <span className="logo-text">Архитектура Комфорта</span>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#home">Главная</a></li>
                        <li><a href="#services">Услуги</a></li>
                        <li><a href="#about">О нас</a></li>
                        <li><a href="#testimonials">Отзывы</a></li>
                        <li><a href="#calculator">Калькулятор</a></li>
                        <li><a href="#contacts">Контакты</a></li>
                    </ul>
                </nav>
            </header>

            {/* Главная страница */}
            <main>
                <section id="home" className="home">
                    <h1>Добро пожаловать в «Архитектура Комфорта»</h1>
                    <p>Мы создаем комфортные и безопасные пространства для жизни и работы.</p>
                    <p>Наша компания предлагает полный спектр услуг по проектированию и строительству домов, начиная от фундамента и заканчивая внутренней отделкой.</p>
                </section>

                {/* Услуги */}
                <section id="services" className="services">
                    <h2>Наши услуги</h2>
                    <ul>
                        <li>
                            <strong>Строительство домов под ключ:</strong> Полный цикл работ: фундамент, стены, крыша, отделка. Материалы: кирпич, дерево, газобетон.
                        </li>
                        <li>
                            <strong>Проектирование:</strong> Индивидуальные и готовые проекты, включая ландшафтный дизайн.
                        </li>
                        <li>
                            <strong>Отделка и ремонт:</strong> Внутренняя и внешняя отделка, капитальный и косметический ремонт.
                        </li>
                        <li>
                            <strong>Консультации:</strong> Помощь в расчете стоимости, выборе материалов и контроль проекта.
                        </li>
                    </ul>
                </section>

                {/* О компании */}
                <section id="about" className="about">
                    <h2>О компании</h2>
                    <p>
                        Основанная в 2010 году, компания «Архитектура Комфорта» быстро завоевала репутацию надежного партнера в строительстве. Наша команда профессионалов с многолетним опытом помогает клиентам реализовать мечту о собственном доме.
                    </p>
                    <h3>Миссия и ценности</h3>
                    <p>
                        Наша миссия — создавать комфортные, безопасные и экологически чистые пространства для жизни. Мы верим в инновации, качество и индивидуальный подход к каждому клиенту.
                    </p>
                </section>

                {/* Отзывы */}
                <section id="testimonials" className="testimonials">
                    <h2>Отзывы наших клиентов</h2>
                    <div className="testimonial">
                        <p>
                            «Мы остались в полном восторге от качества работы. Уютный дом был построен вовремя!»
                            — Анна и Сергей Петровы
                        </p>
                    </div>
                    <div className="testimonial">
                        <p>
                            «Отличная работа, профессиональная команда помогла на каждом этапе!»
                            — Игорь Сидоров
                        </p>
                    </div>
                    <div className="testimonial">
                        <p>
                            «Дом получился именно таким, как мы мечтали. Спасибо за внимание к деталям!»
                            — Елена Кузнецова
                        </p>
                    </div>
                </section>

                {/* Калькулятор стоимости */}
                <section id="calculator" className="calculator-section">
                    <Calculator />
                </section>

                {/* Контакты */}
                <section id="contacts" className="contacts">
                    <h2>Контакты</h2>
                    <p><strong>Адрес:</strong> г. Москва, ул. Примерная, д. 10</p>
                    <p><strong>Телефон:</strong> 8 (999) 177-17-17</p>
                    <p><strong>Email:</strong> info@architecturecomfort.ru</p>
                    <p><strong>Часы работы:</strong> Пн-Пт: 10:00 - 19:00, Сб: 10:00 - 16:00, Вс: выходной</p>
                </section>
            </main>

            {/* Футер */}
            <footer className="footer">
                <p>&copy; 2024 Архитектура Комфорта. Все права защищены.</p>
            </footer>
        </div>
    );
}

export default App;
