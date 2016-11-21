app.factory('questionFactory', ['$http', '$location', function($http, $location) {
  function QuestionFactory() {
    var self = this;
    this.getQuestion = function(questionId, callback) {
      $http.get(`/question/${questionId}`).then(function(res) {
        callback(res.data);
      })
    }
    this.checkSess = function(callback) {
      $http.get('/checkSess').then(function(res) {
        if (!res.data) {
        } else {
          callback(res.data);
        }
      });
    };
    this.create = function(question) {
      $http.post(`/questions`, question).then(function(res) {
        $location.url('/dashboard');
      })
    };
    this.createAnswer = function(answer) {
      var questionId = answer._question
      $http.post(`/answers/`, answer).then(function(res) {
        $location.url(`/question/${questionId}`)
      })
    };
    this.like = function(answerId, callback) {
      $http.get(`answers/${answerId}/like`).then(function(res) {
        self.getQuestion(res.data._question,callback);
      })
    };
  }
  return new QuestionFactory();
}])
