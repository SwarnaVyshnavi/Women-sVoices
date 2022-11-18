function generator(){
    var quotes={
        "-Madeleine Albright":'"It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent."',
        "-Michelle Obama":'"There is no limit to what we, as women, can accomplish."',
        "-Amy Schumer":'"I am a woman with thoughts and questions and shit to say. I say if I am beautiful. I say if I am strong. You will not determine my story—I will."',
        "-Simone Biles":'"It is important to teach our female youth that it is OK to say, "Yes, I am good at this," and you donot  hold back.”',
        "-Janice Trachtman":'"Everything is within your power, and your power is within you,"',
        "-Michelle Obama":'"There is no limit to what we, as women, can accomplish,"',
        // "Kavita Ramdas":'We need women who are so strong they can be gentle, so educated they can be humble, so fierce they can be compassionate, so passionate they can be rational, and so disciplined they can be free.”'
        // "Angelina Jolie":
    
    }
     var authors=Object.keys(quotes);
     var author = authors[Math.floor(Math.random()*authors.length)];
     var quote=quotes[author];

    //  console.log(authors);
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;

}