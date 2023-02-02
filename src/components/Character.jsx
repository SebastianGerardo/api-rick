 export function Character(character){
    return(
        <div className="character-info">
            <div className="character-box__img">
                <img className="character-img" src={character.image} alt="" />
            </div>
            <div className="character-box__info">
                <h3>{character.name}</h3>
                <p>{`Origin:${character.origin && character.origin.name}`}</p>
            </div>
        </div>
    )

 }