kinoteatri = {
    name:"კავეა ქუთაისი",
    languages: ["რუსული" , "ინგლისური" , "ქართული"],
    adress:"წერეთლის ქუჩა N2",
    movies :[
    {name:"ავატარი", imdb:8.5},
    {name:"ოუშენის 11 მეგობარი", imdb:7.7},
    {name:"მისტერ და მისის სმიტები", imdb:7.5}
    ]
    }

    document.write(kinoteatri.name + "</br>");
    
    document.write(kinoteatri.languages[1]+ "</br>");

    document.write(kinoteatri.adress+ "</br>");

    document.write("ფილმების ჩამონათვალი" + "</br>");

    for(var i=0; i<kinoteatri.movies.length; i++){
        document.write(kinoteatri.movies[i].name+ "</br>");
    }

    for(var i=1; i<2; i++){
        document.write(kinoteatri.movies[i].name+ "</br>");
    }

    document.write("ფილმების ჩამონათვალი + imdb" + "</br>");

    for(var i=0; i<kinoteatri.movies.length; i++){
        document.write(kinoteatri.movies[i].name + kinoteatri.movies[i].imdb+ "</br>");
    }