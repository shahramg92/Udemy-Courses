var movies = [
    { 
      title: "In Bruges",
      rating:  3,
      hasWatched: "No"
    },
    { 
      title: "Frozen",
      rating: 4,
      hasWatched: "Yes"
    },
    { 
      title: "Mad Max Fury Road",
      rating:  5,
      hasWatched: "No"
    },
    { 
      title: "Les Miserables",
      rating:  4,
      hasWatched: "No"
    }
];

movies.forEach(function(obj) {
    if (obj.hasWatched === "Yes") {
        console.log("You have watched: " + obj.title + " - " + obj.rating + " stars")
    } else {
        console.log("You have not watched: " + obj.title + " - " + obj.rating + " stars")
    }
});