import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "@styles/components/calculator.module.scss";
import fonts from "@styles/base/fonts.module.scss";
import { cities } from "@data/cities";
import { City } from "@types";
import { formatCurrency } from "@utils";

const Calculator: FunctionComponent = () => {
  const [days, setDays] = useState<number>(15);
  const [selectedCity, setSelectedCity] = useState<City>({
    name: "",
    avgDailyIncome: 360,
  });
  const [revenue, setRevenue] = useState<number | null>(5400);

  const handleDaysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setDays(newValue);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!event.target.value) return;

    const newCity = {
      name: event.target.value,
      avgDailyIncome: cities.filter(
        ({ name }) => name === event.target.value
      )[0].avgDailyIncome,
    };
    setSelectedCity(newCity);
  };

  const updateRevenue = () => {
    const { avgDailyIncome } = selectedCity;
    const newRevenue = Math.ceil(days * avgDailyIncome);
    setRevenue(newRevenue);
  };

  useEffect(() => {
    updateRevenue();
  }, [selectedCity, days]);

  return (
    <div className={styles.container}>
      <h3 className={styles.money}>{formatCurrency(revenue as number)}</h3>
      <p className={fonts.text}>
        Lugg {days} day{days === 1 ? "" : "s"} a month
      </p>
      <input
        className={styles.input}
        type="range"
        min="1"
        max="30"
        value={days}
        onChange={handleDaysChange}
      />
      <select
        value={selectedCity.name}
        onChange={handleCityChange}
        className={styles.selectCity}
      >
        <option value="">Select a city</option>
        {cities.map(({ name }) => {
          return (
            <option key={name} value={name}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Calculator;
