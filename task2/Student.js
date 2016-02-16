function Student (name, age, isMale, score){

    Person.call(this, name, age, isMale);

    var _score = score;

    this.getScore = function(){
        return _score;
    }

    this.setScore = function(score){
        if(score >= 2 && score <= 6){
            _score = score;
        }
        console.log('The score must be between 2 and 6!');
    }
}

Student.prototype.showStudentInfo = function(){
    var personInfo = Person.prototype.showPersonInfo.call(this);
    return personInfo + ', score: ' + this.getScore();
}