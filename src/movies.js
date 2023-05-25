// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(element => element.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergMovies = moviesArray.filter(element => element.director == `Steven Spielberg`)
    return spielbergMovies.filter(element => element.genre.includes('Drama')).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length > 0) {
        let myAverage = moviesArray.reduce((total, current) => {
            if(typeof current.score === `number`){
                return total + current.score
            }
            else {
                return total
            }
        }, 0) / moviesArray.length
        return Number(myAverage.toFixed(2))
    }
    else {
        return 0
    }    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(element => element.genre.includes('Drama'))
    if(dramaMovies.length > 0) {
        let myAverage = dramaMovies.reduce((total, current) => {
            if(typeof current.score === `number`){
                return total + current.score
            }
            else {
                return total
            }
        }, 0) / dramaMovies.length
        return Number(myAverage.toFixed(2))
    }
    else {
        return 0
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortedArray =[...moviesArray]
    sortedArray.sort((a,b) => {
        if(a.year != b.year) {
            return a.year - b.year
        }
        else {
            return a.title.localeCompare(b.title)
        }
    })
    return sortedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let sortedArray = [...moviesArray]
    sortedArray.sort((a,b) => {
        return a.title.localeCompare(b.title)
    })
    let titlesArray = []
    sortedArray.forEach(item => titlesArray.push(item.title))
    if(titlesArray.length>20) {
        titlesArray.splice(20-titlesArray.length)
    }
    return titlesArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    console.log(moviesArray)
    let transformedArray = [...moviesArray]
    transformedArray.map(item => {
        let myHours = item.duration[0]
        let myMinutes = item.duration[3,4]
        if(+item.duration[4]) {
            myMinutes = myMinutes[0]
        }
        item.duration = `${myHours*60 + myMinutes}min` 
    })
    return transformedArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
