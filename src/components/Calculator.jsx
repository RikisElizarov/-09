import React, { useState } from "react";

function Calculator() {
    const [formData, setFormData] = useState({
        area: "",
        floors: "",
        foundation: "ленточный",
        walls: "кирпич",
        roof: "скатная",
        options: {
            balcony: false,
            terrace: false,
            garage: false,
        },
    });

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData({
                ...formData,
                options: {
                    ...formData.options,
                    [name]: checked,
                },
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const calculateCost = () => {
        const basePrice = 5000; 
        const foundationMultiplier = formData.foundation === "плитный" ? 1.2 : formData.foundation === "столбчатый" ? 0.8 : 1;
        const wallsMultiplier = formData.walls === "дерево" ? 0.9 : formData.walls === "газобетон" ? 1.1 : 1.2;
        const roofMultiplier = formData.roof === "плоская" ? 0.8 : 1;

        let cost = formData.area * basePrice * foundationMultiplier * wallsMultiplier * roofMultiplier;

        if (formData.options.balcony) cost += 50000;
        if (formData.options.terrace) cost += 70000;
        if (formData.options.garage) cost += 100000;

        setResult({
            total: cost,
            breakdown: {
                foundation: cost * 0.3,
                walls: cost * 0.4,
                roof: cost * 0.2,
                extras: cost * 0.1,
            },
        });
    };

    return (
        <div className="calculator">
            <h2>Калькулятор стоимости строительства</h2>
            <form>
                <label>
                    Площадь дома (м²):
                    <input
                        type="number"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Количество этажей:
                    <input
                        type="number"
                        name="floors"
                        value={formData.floors}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Тип фундамента:
                    <select
                        name="foundation"
                        value={formData.foundation}
                        onChange={handleChange}
                    >
                        <option value="ленточный">Ленточный</option>
                        <option value="плитный">Плитный</option>
                        <option value="столбчатый">Столбчатый</option>
                    </select>
                </label>

                <label>
                    Материал стен:
                    <select
                        name="walls"
                        value={formData.walls}
                        onChange={handleChange}
                    >
                        <option value="кирпич">Кирпич</option>
                        <option value="дерево">Дерево</option>
                        <option value="газобетон">Газобетон</option>
                    </select>
                </label>

                <label>
                    Тип крыши:
                    <select
                        name="roof"
                        value={formData.roof}
                        onChange={handleChange}
                    >
                        <option value="скатная">Скатная</option>
                        <option value="плоская">Плоская</option>
                    </select>
                </label>

                <fieldset>
                    <legend>Дополнительные опции:</legend>
                    <label>
                        <input
                            type="checkbox"
                            name="balcony"
                            checked={formData.options.balcony}
                            onChange={handleChange}
                        />
                        Балкон
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="terrace"
                            checked={formData.options.terrace}
                            onChange={handleChange}
                        />
                        Терраса
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="garage"
                            checked={formData.options.garage}
                            onChange={handleChange}
                        />
                        Гараж
                    </label>
                </fieldset>

                <button type="button" onClick={calculateCost}>
                    Рассчитать стоимость
                </button>
            </form>

            {result && (
                <div className="result">
                    <h3>Результат:</h3>
                    <p><strong>Общая стоимость:</strong> {result.total.toFixed(2)} руб.</p>
                    <ul>
                        <li>Фундамент: {result.breakdown.foundation.toFixed(2)} руб.</li>
                        <li>Стены: {result.breakdown.walls.toFixed(2)} руб.</li>
                        <li>Крыша: {result.breakdown.roof.toFixed(2)} руб.</li>
                        <li>Дополнительные опции: {result.breakdown.extras.toFixed(2)} руб.</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Calculator;
