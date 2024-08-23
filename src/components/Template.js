import styles from './template.module.scss'

function Template() {
    return (
        <div className={styles['container']}>
            <div className={styles["template1"]}>
                <h1>Wdzięk i Harmonia</h1>
                <span> Idealne połączenie delikatności i równowagi, które uczyni Twój ślub niezapomnianym. Nasze szablony łączą w sobie elegancję i spójność, tworząc wirtualną przestrzeń pełną piękna i subtelnego uroku. Stwórz wyjątkową oprawę swojego wielkiego dnia z naszą pomocą.</span>
                <button className={styles['btn_hover']}>Szablon 1</button>
            </div>
            <div className={styles["template2"]}>
                <h1>Czar i Finezja</h1>
                <span>Zanurz się w świecie pełnym uroku i wyrafinowania. Nasze szablony emanują elegancją i subtelnością, tworząc idealną przestrzeń do celebracji Twojej miłości. Pozwól, by nasza strona dodała Twojemu dniu magicznego blasku i wyjątkowej klasy</span>
                <button className={styles['btn_hover']}>Szablon 2</button>
            </div>
            <div className={styles["template3"]}>
                <h1>Elegancja i Piękno</h1>
                <span>Wyjątkowa kombinacja klasy i estetyki, która sprawi, że Twój ślub będzie naprawdę niezapomniany. Nasze szablony łączą w sobie elegancję i urok, tworząc idealną oprawę dla Twojego wielkiego dnia. Odkryj doskonałość w każdym detalu.</span>
                <button className={styles['btn_hover']}>Szablon 3</button>
            </div>
        </div>
    )
};

export default Template;