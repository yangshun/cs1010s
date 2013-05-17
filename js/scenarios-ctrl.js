function ScenariosCtrl($scope, $http) {
	$http.get('js/scenarios-data.json').success(function(data) {
		$scope.tutors = data.tutors;
		console.log($scope.tutors);

		for (var i = 0; i < $scope.tutors.length; i++) {
			$scope.tutors[i].name_id = hashify($scope.tutors[i].name);
		}
	});

	function hashify(name) {
		return name.toLowerCase().split(" ").join("-");
	}
}