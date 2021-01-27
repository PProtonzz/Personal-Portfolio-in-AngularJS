angular.module('app', [])
    .controller('appController', function($scope, $locale) {

        var userData = firebase.database().ref('Data');
        userData.on('value', (snapshot) => {

            $scope.firstName = snapshot.child("firstName").val();
            $scope.lastName = snapshot.child("lastName").val();
            $scope.$apply();

        });

        // $scope.firstName = "Pranav";
        // $scope.lastName = "Fulkari";
        $scope.title = "Internet Entrepreneur & Realtime Programmer";
        $scope.email = "director@bottlecaptech.com";
        $scope.number = "+91-0000000000";
        $scope.website = "https://bottlecaptech.com";
        $scope.instagram = "https://www.instagram.com/pprotonzz/";
        $scope.twitter = "https://www.twitter.com/pprotonzz";
        $scope.facebook = "https://www.facebook.com/pprotonzz";
        $scope.youtube = "http://youtube.com/programmingwithpranavfulkari";
        $scope.linkedin = "https://www.linkedin.com/in/pprotonzz/";
        $scope.address = "Headquarters : Chinchpokli, L.A.";

        $scope.description = [
            { text: 'Director of BottleCap Technologies PVT. LTD' },
            { text: 'Professional Multi-Platform Developer based in Dubai, UAE.' },
            { text: '👨🏻‍🏫 IEEE Certified Speaker' },
            { text: '🥇 2 Time Google Awarded Programmer' },
            { text: '💻 Digital Marketer' },
            { text: 'Sometimes works as a freelancer.' }
        ];

    });