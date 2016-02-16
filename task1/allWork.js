function AllWork() {

	var _tasks = [];

	var _freePlacesForTasks = 10;

	var _currentUnsignedTask;

	this.setFreePlacesForTasks = function(freePlacesForTasks) {
		_freePlacesForTasks = freePlacesForTasks;
	}

	this.getFreePlacesForTasks = function(){
		return _freePlacesForTasks;
	}

	this.getNextTask = function(){
		_currentUnsignedTask = _tasks.pop();
		_freePlacesForTasks++;
		return _currentUnsignedTask;
	}

	this.addTask = function(Task) {
		if(this.getFreePlacesForTasks() == 0){
			console.log('Not enough space!');
		}
		_tasks.unshift(Task);
		_freePlacesForTasks--;
		console.log(Task.getName() + 'has been added to the tasks!');
	}

	this.isAllWorkDone = function(){
		return _tasks.length == 0;
	}

	this.getCurrentUnasignedTask = function(){
		return _tasks[_tasks.length - 1];
	}
}