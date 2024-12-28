import React from "react";
import mapImage from "../assets/map.jpg"; 

function ContactPage() {
    return (
        <section className="contacts">
            <h2>Контакты</h2>
            <p><strong>Адрес:</strong> г. Москва, ул. Примерная, д. 10</p>
            <p><strong>Телефон:</strong> 8 (999) 177-17-17</p>
            <p><strong>Email:</strong> info@architecturecomfort.ru</p>
            <p><strong>Часы работы:</strong> Пн-Пт: 10:00 - 19:00, Сб: 10:00 - 16:00, Вс: выходной</p>
            
            <div className="map-container">
                <h3>Мы на карте</h3>
                <img src={mapImage} alt="Карта местоположения офиса" className="map-image" />
            </div>

            <div className="contact-form">
                <h3>Напишите нам</h3>
                <form>
                    <label>
                        Имя:
                        <input type="text" name="name" placeholder="Ваше имя" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" placeholder="Ваш email" required />
                    </label>
                    <label>
                        Сообщение:
                        <textarea name="message" placeholder="Ваше сообщение" required></textarea>
                    </label>
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </section>
    );
}

export default ContactPage;
