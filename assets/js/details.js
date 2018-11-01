var labels = [];
setActivePage('nav_details');
document.getElementById('convert-times').click();
document.getElementById('first-chart').click();

tableRows = document.querySelectorAll('.date');
tableRows.forEach( function(row, i) {
	row.innerHTML = labels[i];
});

function convertTimes(times) {
	for(i=0; i< times.length; i++) {
		var date = new Date(times[i]);
		labels[i] = date.toLocaleString();
	}
}

function showLineChart(elem, data) {

	var oldCtx = document.querySelector('canvas');
	var parent = oldCtx.parentNode;
	parent.removeChild(oldCtx);

	var ctx = document.createElement('canvas');
	ctx.height = 275;

	parent.appendChild(ctx);

	var items = elem.parentNode.children;
	for (i = 0; i < items.length; i++) {
		items[i].classList.remove('active');
	}
	elem.classList.add('active');

	renderChart(ctx, data);

}

function renderChart(ctx,data) {
	var data = {
		datasets: [{
			data: data
		}],
		labels: labels
	};


	var myLineChart = new Chart(ctx, {
	    type: 'line',
	    data: data,
	});
}