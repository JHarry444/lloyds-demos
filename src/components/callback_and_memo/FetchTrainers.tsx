import Trainer from './Trainer';

function FetchTrainers(props: {trainers: Trainer[], search: string}) {
    return ( <div>
    {
        props.trainers
        .filter((trainer) => trainer.name.toLowerCase().startsWith(props.search.toLowerCase()))
        .map((trainer: Trainer) => (
                <div key={trainer.id}>
                    <p>Name: {trainer.name}</p>
                    <p>Age: {trainer.age}</p>
                    <p>Specialism: {trainer.specialism}</p>
                </div>
        ))
    }
    </div> );
}

export default FetchTrainers;