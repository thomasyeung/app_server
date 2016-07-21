app.directive('customTable', function () {

    return {
        restrict: "EA",
        scope: {
            gridList:"=" // @ gets the values from the parent,
            // = is two way data binding,
            // & child communicates to the parent
        },
        templateUrl: "templates/table.html"
    };
});