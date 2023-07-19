function skillsMember(){
    return{
            restrict: 'E',
            templateUrl: 'modules/skills/views/member.html',
            controler: 'SkillsMemberControler',
            controllerAs:'vm',
            bindToController: true,
            scope: {
                member: 'M',
            }
        };
    }