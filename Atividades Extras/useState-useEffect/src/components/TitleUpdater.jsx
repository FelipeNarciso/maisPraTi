import { useEffect, useState } from "react";
import styles from './TitleUpdater.module.css'

function TitleUpdater() {

  const [number, setNumber] = useState(0)

  useEffect(() => {
    document.title = `${number}`;
  }, [number]);

  return (
    <div className={styles.box}>
      <h1>Exercício 01</h1>
      <h3>Atualizar Número do Título</h3>
      <button onClick={() => { setNumber(number + 1) }}>Incrementar número do título</button>
      <button onClick={() => { setNumber(number - 1) }}>Decrementar número do título</button>
    </div>
  );
}

export default TitleUpdater;
