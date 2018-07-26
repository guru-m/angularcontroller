"use strict";

var formsController = function($scope) {
  $scope.form = {
    luxuryType:'No',
    carType: '',
    hasTurbo: true
    
  };

  $scope.formDisabled = {
    name:'',
    PlayerName:'Messi',
    disableName:false,
    disablePlayerName:true
  };

  $scope.formSubmit = {
    name: '',
    newName:'',
    checkedName:'',
    newCheckedName:'',
    hasId: true,
    error: undefined
  };

  $scope.checkbox = {};
  $scope.checkbox.cb1 = true;
  $scope.checkbox.cb2 = 'Y';
  $scope.checkbox.cb3 = 'Going';

  $scope.dropdownArray = [
    { value: 1, name: "This is one (array)" },
    { value: 2, name: "This is two (array)" },
    { value: 3, name: "This is three (array)" },
  ];

  $scope.default = {
    manual: '2',
    fromArray: $scope.dropdownArray[2],
    singleValueFromArray: 2
  };
// ng submit validation
  $scope.validateForm = function() {
    alert('calling');
    $scope.formSubmit.error = undefined;
    // alert(!$scope.formSubmit.hasId);
    if (!$scope.formSubmit.hasId) {
      $scope.formSubmit.error = 'Dude do not have ID!';
      return;
    }
     if($scope.formSubmit.newName === $scope.formSubmit.name){
      alert('wrong');
      console.log('inside value comperator');
    }

    
    // Do something here like call REST service or change screen
  }
};

app.controller("formsController", ['$scope', formsController]);
