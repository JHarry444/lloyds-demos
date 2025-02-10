import { useCallback, useEffect, useState } from "react";
import FetchTrainers from "./FetchTrainers";
import TrainerForm from "./TrainerForm";
import styles from './Trainer.module.css';
import Trainer from "./Trainer";

function TrainerContainer() {
    const [search, setSearch] = useState("");
    const [trainers, setTrainers] = useState<Trainer[]>([]);

    const getTrainers = useCallback(async () => {
        const res = await fetch("http://localhost:8081/trainers");
        const data = await res.json();

        setTrainers(data);
    }, []);

    useEffect(() => {
        getTrainers();
    }, [getTrainers]);


    return ( <div>
        <div>
            <label htmlFor="searchInput">Search</label>
            <input type="text" name="search" id="searchInput" value={search} onChange={e => setSearch(e.target.value)}/>
        </div>
        <div className={styles.trainerGrid}>
            <div>
                <TrainerForm fetchTrainers={getTrainers}/>
            </div>
            <div>
                <FetchTrainers trainers={trainers} search={search}/>
            </div>
        </div>
   
    </div> );
}

export default TrainerContainer;