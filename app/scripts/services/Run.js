(function() {
    function IndieChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        console.log(currentUser);
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                animation: true,
                backdrop: 'static',
                templateUrl: '/templates/login.html',
                size: 'md',
                controller: 'UsernameCtrl as username'
            })
        }
    }

    angular
        .module('indieChat')
        .run(['$cookies', '$uibModal', IndieChatCookies]);
})();
