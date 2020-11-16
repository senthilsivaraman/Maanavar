const toggleForm = () => {
  const containers1 = document.querySelector('.containers1');
  containers1.classList.toggle('active');
};


var mini = true;

function toggleSidebar() {
  if (mini) {
    console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.mini = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "50px";
    document.getElementById("main").style.marginLeft = "50px";
    this.mini = true;
  }
}


/*http://laravel.io/forum/02-08-2014-ajax-autocomplete-input*/
var questions = {
  "book-flight": "How do I book a flight...",
  "visa": "Do I need a visa for my flights?",
   "carrier-difference": "What's the difference between low-cost and high-value airline carriers?",
    "baggage": "How do I update baggage?",

}
var questionsString = [
   "visa",
   "test",
   "test"
];
var questionsArray = $.map(questions, function (value, key) { return { value: value, data: key }; });

// Initialize ajax autocomplete:
$('#autocomplete').autocomplete({
   // serviceUrl: '/autosuggest/service/url',
   //lookup: countriesString,
   lookup: questionsArray,
   lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
       var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
       return re.test(suggestion.value);
   },
   onSelect: function(suggestion) {
       $('#selction-ajax').html('You selected: ' + suggestion.value + ', ' + suggestion.data);
   },
   onHint: function (hint) {
       $('#autocomplete-ajax-x').val(hint);
   },
   onInvalidateSelection: function() {
       $('#selction-ajax').html('You selected: none');
   }
});


$(document).ready(function(){
   $(".search-bar a").click(function(){
       var value = $(this).html();
       var input = $('#autocomplete');
       input.val(value);
       $( "#autocomplete" ).change();
   });
});
