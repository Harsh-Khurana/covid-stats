import React from "react";
import { Cards, MyChart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { dailyData } from "./api";
import CoronaImage from "./images/image.png";

class App extends React.Component {
  state = { data: {}, country: "" };

  async setDailyData() {
    const fetchedData = await dailyData(this.state.country);
    this.setState({ data: fetchedData });
  }

  async componentDidMount() {
    this.setDailyData();
  }

  onCountryChange = (country) => {
    this.setState({ country }, this.setDailyData);
  };

  render() {
    return (
      <div className={styles.container}>
        <img src={CoronaImage} alt="Covid 19" className={styles.image} />
        <Cards data={this.state.data} />
        <CountryPicker
          country={this.state.country}
          onCountryChange={this.onCountryChange}
        />
        <MyChart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
