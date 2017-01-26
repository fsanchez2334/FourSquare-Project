// JavaScript File$(document).ready(function(){
    $("#search").click(function() {
        //alert("This works");
 
        var searchVal=$("#search-bar").val();
        var first="https://api.foursquare.com/v2/venues/search?client_id=13V2HBWHG5RS5XMVAXDXD0STSY5OAVN0EQ2V0LQPBSDG34VT&client_secret=RIO145YPZWDGEJIUPLREJBQIGUO3I5UBV3UFUSNGBSCMMWKT&v=20130815&near=40.7,-74&query="
        var url= first + searchVal;
    $.getJSON(url,function(response){
        
        });
     });
});    
