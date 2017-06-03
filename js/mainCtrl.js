angular.module('quoteBook').controller('mainCtrl', function($scope, dataService) {

    getQuotes();

    $scope.deleteQuote = function(quoteText) {
      dataService.removeData(quoteText);
      getQuotes();
    }

    $scope.addQuote = function() {
      var newQuote = {
        text: $scope.newQuoteText,
        author: $scope.newQuoteAuthor
      }
      if (dataService.addData(newQuote)) {
        $scope.newQuoteText = '';
        $scope.newQuoteAuthor = '';
        getQuotes();
      }
    }

    function getQuotes() {
      $scope.quotes = dataService.getQuotes();
    }

});

angular.module('quoteBook').controller('')
