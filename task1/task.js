export function findByActorNameAndGenre(allMovies, allActors, actorName, genre) {



    const actor = allActors.find(actor => actor.name === actorName);

    if (!actor) {
        return[];
    }
   
    const resmovie = allMovies.filter(movie => {
        const actorMovie = movie.actor_ids.includes(actor.id);

        const hassGenre = movie.genres.includes(genre);

        return actorMovie && hassGenre;



        });

        return resmovie.map(movie => movie.title)


}
