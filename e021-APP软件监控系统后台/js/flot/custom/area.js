$(function () {
		
	var d1, data, chartOptions;

	var d1 = [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]];
	var d2 = [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]];

	data = [{ 
		label: "Income", 
		data: d2
	}, {
		label: "Expenditure",
		data: d1
	}];

	chartOptions = {
		xaxis: {
			min: (new Date(2009, 12, 1)).getTime(),
			max: (new Date(2010, 11, 2)).getTime(),
			mode: "time",
			tickSize: [1, "month"],
			monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			tickLength: 0
		},
		yaxis: {

		},
		series: {
			lines: {
				show: true, 
				fill: true,
				fill: 0.2,
				lineWidth: 3
			},
			points: {
				show: true,
				radius: 4,
				fill: true,
				fillColor: "#2a3039",
				lineWidth: 2
			}
		},
		grid:{
			hoverable: true,
			clickable: false,
			borderWidth: 1,
			tickColor: '#353c48',
			borderColor: '#353c48',
		},
		legend: {
			show: true,
			position: 'nw'
		},
		tooltip: true,
		tooltipOpts: {
			content: '%s: %y'
		},
		shadowSize: 0,
		colors: ['#BF7A6A', '#6FB4CE', '#666666', '#333333', '#CCCCCC'],
	};

	var holder = $('#area-chart');

	if (holder.length) {
		$.plot(holder, data, chartOptions);
	}
});