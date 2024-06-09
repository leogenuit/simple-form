import { useState } from "react";
import styles from "./App.module.scss";
import Footer from "./components/footer/Footer";
import Input from "./components/input/Input";
function App() {
  return (
    <>
      <div className={styles.container}>
        <h1>Create an account</h1>
        <Input type="text" placeholder="jean dupont" label="Name" id="name" />
        <Footer />
      </div>
    </>
  );
}

export default App;
