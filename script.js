    var movies= ["Conan", "Star wars", "Speed", "Terminator"];

    

    function myFunction(){
        var insert="";
        insert = document.getElementById("new").value;
        if (insert===""){
            alert ("Your text is empty");
        }

        else if(movies.indexOf(insert)!==-1 ){
            alert("This text has already");
        }
                
        else {
            movies.push(insert);

            movies.sort(function (a,b){

        var A=a.toLowerCase();
        var B=b.toLowerCase();

        if (A < B){
        return -1;
     }
     else if (A > B){
       return  1;
     }
     else{
       return 0;
     }
});

            document.getElementById("demo").innerHTML = movies;
            document.getElementById("new").value="";

            var text="";

            for (i=0; i<movies.length; i++){

                text+="<option>"+movies[i]+"</option>";
            }
            document.getElementById("present").innerHTML=text;
        }
  }

function myInit (){
var text="";
for (index=0; index<movies.length; index++){


                text+="<option>"+movies[index]+"</option>";
            }

            document.getElementById("present").innerHTML=text;
            document.getElementById("demo").innerHTML = movies;        
}

    function myFunctionRemove(){
        var index = document.getElementById("present").selectedIndex;
        movies.splice(index,1);

        document.getElementById("demo").innerHTML=movies;

        text="";

        for (i=0; i<movies.length; i++){

            text+="<option>"+movies[i]+"</option>";
        }
        document.getElementById("present").innerHTML=text;
    }


    var favoritesArr=[];
    function myFavorites (){

        var favoriteText="";
        for (j=0; j<movies.length;j++) {
            favoriteText+= "<option>"+movies[j]+"</option>";
        }
        document.getElementById("favorites").innerHTML=favoriteText;
        document.getElementById("preview").innerHTML=movies;

        $(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
 });
    }

function addFavorites(){

    var insertFavorites=document.getElementById("favorites").value;
    favoritesArr.push(insertFavorites);
    document.getElementById("favoriteList").innerHTML=favoritesArr;
    insertFavorites="";

    var textFavorite="";

            for (f=0; f<favoritesArr.length; f++){

                textFavorite+="<option>"+favoritesArr[f]+"</option>";
            }
            document.getElementById("removeFavorites").innerHTML=textFavorite;

            var listOfFavorites="";
for (f = 0; f < favoritesArr.length; f++) {
    
    listOfFavorites+='<li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>'+favoritesArr[f]+'</li>';
}

document.getElementById("sortable").innerHTML=listOfFavorites;

 $(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
 });
            listOfFavorites="";
}

function removeFavorites(){

    var removerFavorites=document.getElementById("removeFavorites").selectedIndex;
    favoritesArr.splice(removerFavorites, 1);


    document.getElementById("favoriteList").innerHTML=favoritesArr;
 
    var textFavorite="";

            for (f=0; f<favoritesArr.length; f++){

                textFavorite+="<option>"+favoritesArr[f]+"</option>";
            }
            document.getElementById("removeFavorites").innerHTML=textFavorite;

            for (f = 0; f < favoritesArr.length; f++) {
    
    listOfFavorites+='<li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>'+favoritesArr[f]+'</li>';
}

document.getElementById("sortable").innerHTML=listOfFavorites;
            listOfFavorites="";
}





