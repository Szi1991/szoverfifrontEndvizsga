export function findUniqueGenres(genres) {

    let uGenre =[];

    for (let i =0;i < genres.length;i++){

        for (let j = 0;j< genres[i].length;j++){

            const genre = genres[i][j];

            if (!uGenre.includes (genre)){
                uGenre.push(genre);
            }
        }
      
    }
   
    return uGenre;


    

}