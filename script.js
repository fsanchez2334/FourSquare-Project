$(document).ready(function(){
    $("#search").click(function() {
        //alert("This works");
 
        var searchVal1=$("#address").val();
        var searchVal2=$("#food").val();
        var first="https://api.foursquare.com/v2/venues/search?client_id=13V2HBWHG5RS5XMVAXDXD0STSY5OAVN0EQ2V0LQPBSDG34VT&client_secret=RIO145YPZWDGEJIUPLREJBQIGUO3I5UBV3UFUSNGBSCMMWKT&v=20130815&near="
      
        var url= first + searchVal1 + "&query=" + searchVal2;
      
       $.getJSON(url, function(response){
           var name=response.response.venues.name[];
           var location=response.response.venues.location[].formattedAddress;
           var number=response.response.venues.contact[].formattedPhone;
         $("body").append(name);
         $("body").append(location);
         $("body").append(number);
         
       });
            
});    

});
//https://api.foursquare.com/v2/venues/search?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=20130815&ll=40.7,-74&query=sushi
 // var clientId="13V2HBWHG5RS5XMVAXDXD0STSY5OAVN0EQ2V0LQPBSDG34VT";
//var clientSecret="RIO145YPZWDGEJIUPLREJBQIGUO3I5UBV3UFUSNGBSCMMWKT";
 //var url= first + searchVal1 +searchVal2; 
        //$.getJSON(url, function (response){
            //var food
            //var address
            