(function() {
    function UsernameCtrl(Room, $cookies, $uibModalInstance) {


        this.text = '';

        this.dismiss = function() {
            $uibModalInstance.close();
        }


        this.submitUsername = function() {
            currentUser = this.text;
            $cookies.put('blocChatCurrentUser', currentUser);
            if (currentUser || currentUser !== '') {
                this.dismiss();
            }
            else if (!currentUser || currentUser === '') {
                alert('Please Enter a username');
            }

            console.log(currentUser);
        }





    }


    angular
        .module('indieChat')
        .controller('UsernameCtrl', ['Room', '$cookies', '$uibModalInstance', UsernameCtrl]);
})();
