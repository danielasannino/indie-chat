(function() {
    function ModalCtrl(Room, $uibModalInstance) {

        this.text = 'some text';

        this.sendOff = function(){
            Room.add(this.text);
            this.dismiss();
        }

        this.dismiss = function() {
            $uibModalInstance.close();
        }


    }


    angular
        .module('indieChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl])
})();
