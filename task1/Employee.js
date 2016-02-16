function Employee(name){
 
	var _name = name;

	var _hoursLeft = 8;

	var _currentTask;

	var _allWork;

	this.getCurrentTask = function(){
		return _currentTask;
	}

	this.setCurrentTask = function(task){
		_currentTask = task;
	}

	this.getName = function(){
		return _name;
	}

	this.setName = function(name) {
		_name = name;
	}

	this.getHoursLeft = function(){
		return _hoursLeft;
	}

	this.setHoursLeft = function(hoursLeft){
		_hoursLeft = hoursLeft;
	}

}

Employee.prototype.setAllWork = function(allWork){
	this._allWork = allWork;
}

Employee.prototype.getAllWork = function(){
	return this._allWork;
}

Employee.prototype.work = function(){
	if(typeof this.getCurrentTask() == 'undefined'){
		var taskName = this.getAllWork().getNextTask().getName();
		this.setCurrentTask(this.getAllWork().getNextTask());
		var employeeName = this.getName();
		console.log('Assigning ' + taskName + ' to ' + employeeName);
	}
	if(this.getHoursLeft() == 0){
		this.setWorkingDay();
	}
	if(this.getHoursLeft() - this.getCurrentTask().getWorkingHours() < 0){
		var hoursLeft = 8 + (this.getHoursLeft() - this.getCurrentTask().getWorkingHours());
		this.setWorkingDay();
		this.setHoursLeft(hoursLeft);
	}
	if(this.getHoursLeft() - this.getCurrentTask().getWorkingHours() > 0){
		var hoursLeft = this.getHoursLeft() - this.getCurrentTask().getWorkingHours();
		this.setHoursLeft(hoursLeft);
		var nextTask = this.getAllWork().getNextTask();
		this.setCurrentTask(nextTask);
	}
}

Employee.prototype.setWorkingDay = function() {
	this.setHoursLeft(8);
	//var currentHours =
	console.log(this.getName() + ' is working on ' + this.getCurrentTask() + ' for ' + this.getCurrentTask().getWorkingHours());
}