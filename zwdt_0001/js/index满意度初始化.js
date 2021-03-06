function showHandleEchart(id, xArray, yArray, yArray2){
	var handleChart = echarts.init(document.getElementById(id));
	var handleOption = {
		color: ['#519ddd','#dd9d51'],
		legend : {
			data : [ '今日办理量', '今日咨询量'],
			right : '3%',
			top : '2%',
			textStyle : {
				color : '#fff',
				fontSize : 22
			}
		},
		tooltip : {
			trigger : 'axis',
			axisPointer : { // 坐标轴指示器，坐标轴触发有效
				type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid : {
			left : '5%',
			right : '3%',
			bottom : '8%',
			top : '20%',
			containLabel : true
		},
		xAxis : [ {
			type : 'category',
			data : xArray,
			axisLine : {
				show : false,
				lineStyle : {
					color : '#fff',
					width : 1
				}
			},
			axisTick : {
				show : false,
			},
			axisLabel : {
				show : true,
				rotate : '-30',
				// interval:0, //强制显示所有内容
				textStyle : {
					color : '#fff',
					fontSize : 22
				}
			},
			splitLine : {
				show : false,
				lineStyle : {
					color : '#647880',
					width : 1
				}
			}
		} ],
		yAxis : [ {
			type : 'value',
			/*name : '(人数)',
			nameLocation : 'end',
			nameTextStyle : {
				color : '#fff',
				fontSize : 16
			},*/
			axisLine : {
				show : false,
				lineStyle : {
					color : '#fff',
					width : 1
				}
			},
			axisTick : {
				show : false
			},
			axisLabel : {
				show : true,
				textStyle : {
					color : '#fff',
					fontSize : 22
				}
			},
			splitLine : {
				show : false,
				lineStyle : {
					color : '#647880',
					width : 1
				}
			}
		} ],
		series : [ {
			name : '今日办理量',
			type : 'line',
			data : yArray,
			areaStyle : {
				normal : {
					color : '#A37C7E',
					opacity : 0.7
				}
			},
			label : {
				normal : {
					show : true,
					position : 'top',
					textStyle : {
						color : '#FFFF00',
						fontSize : 22
					}
				}
			}
		}, {
			name : '今日咨询量',
			type : 'line',
			data : yArray2,
			areaStyle : {
				normal : {
					color : '#92A1B7',
					opacity : 0.7
				}
			},
			label : {
				normal : {
					show : true,
					position : 'top',
					textStyle : {
						color : '#FFFF00',
						fontSize : 22
					}
				}
			}
		}]
	};
	handleChart.setOption(handleOption);
}
function showHallWaitEchart(id,xArray,yArray,yArray2){		// ,yArray3
	var hallWaitChart = echarts.init(document.getElementById(id));
	var hallWaitOption = {
		color : [ '#dd9d51', '#519ddd'],	// ,'#434c4d' 
		legend : {
			data : [ '当前等待人数', '实际服务人数'],		// ,'预测服务人数'
			right : '0',
			top : '0',
			itemWidth: 20,
			itemHeight: 20,
			textStyle : {
				color : '#fff',
				fontSize : 28
			}
		},
		tooltip : {
			trigger : 'axis',
			axisPointer : { // 坐标轴指示器，坐标轴触发有效
				type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			},
			textStyle: {
				fontSize: 28
			}
		},
		grid : {
			left : '7%',
			right : '1%',
			bottom : '22%',
			top : '16%',
			containLabel : true
		},
		xAxis : [ {
			type : 'category',
			data : xArray,
			axisLine : {
				show : true,
				lineStyle : {
					color : '#fff',
					width : 1
				}
			},
			axisTick : {
				show : false
			},
			axisLabel : {
				show : true,
				rotate : '15',
				interval:0, //强制显示所有内容
				textStyle : {
					color : '#fff',
					fontSize : 34
				}
			},
			splitLine : {
				show : false
			}
		} ],
		yAxis : [ {
			type : 'value',
			axisLine : {
				show : true,
				lineStyle : {
					color : '#fff',
					width : 1
				}
			},
			axisTick : {
				show : false
			},
			axisLabel : {
				show : true,
				textStyle : {
					color : '#fff',
					fontSize : 34
				}
			},
			splitLine : {
				show : false
			}
		} ],
		series : [{
			name : '实际服务人数',
			type : 'bar',
			data : yArray2,
			label : {
				normal : {
					show : true,
					position : 'top',
					textStyle : {
						color : '#FFFF00',
						fontSize : 34
					}
				}
			}
		}, /*{
			name : '预测服务人数',
			type : 'bar',
			stack: "接待人数",
			data : yArray3,
			label : {
				normal : {
					show : true,
					position : 'top',
					textStyle : {
						color : '#FFFF00',
						fontSize : 40
					}
				}
			}
		},*/ {
			name : '当前等待人数',
			type : 'bar',
			data : yArray,
			label : {
				normal : {
					show : true,
					position : 'top',
					textStyle : {
						color : '#FFFF00',
						fontSize : 34
					}
				}
			}
		}]
	};
	hallWaitChart.setOption(hallWaitOption);
}
function drawReceptionChart(id,xArray,yArray){
	var receptionChart = echarts.init(document.getElementById(id));
	var receptionOption = {
		color : [ '#45e0d3'],
		tooltip : {
			trigger : 'axis',
			axisPointer : { // 坐标轴指示器，坐标轴触发有效
				type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			},
			textStyle: {
				fontSize: 24
			}
		},
		grid : {
			left : '4%',
			right : '4%',
			bottom : '10%',
			top : '4%',
			containLabel : true
		},
		xAxis : [ {
			type : 'category',
			data : xArray,
			axisLine : {
				show : true,
				lineStyle : {
					color : '#fff',
					width : 1
				}
			},
			axisTick : {
				show : false
			},
			axisLabel : {
				show : true,
				// rotate : '-10',
				// interval:0, //强制显示所有内容
				textStyle : {
					color : '#fff',
					fontSize : 24
				}
			},
			splitLine : {
				show : false
			}
		} ],
		yAxis : [ {
			type : 'value',
			axisLine : {
				show : true,
				lineStyle : {
					color : '#fff',
					width : 1
				}
			},
			axisTick : {
				show : false
			},
			axisLabel : {
				show : true,
				textStyle : {
					color : '#fff',
					fontSize : 24
				}
			},
			splitLine : {
				show : false
			}
		} ],
		series : [{
			name : '今日接待人数',
			type : 'line',
			data : yArray,
			label : {
				normal : {
					show : true,
					position : 'top',
					textStyle : {
						fontSize : 30
					}
				}
			}
		}]
	};
	receptionChart.setOption(receptionOption);
}
function showAverageOfficeEchart(id,xArray,yArray){
	var averageOfficeChart = echarts.init(document.getElementById(id));
	var averageOfficeOption = {
		color : [ '#77bef9'],
		tooltip : {
			trigger : 'axis',
			axisPointer : { // 坐标轴指示器，坐标轴触发有效
				type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid : {
			left : '12%',
			right : '8%',
			bottom : '4%',
			top : '3%',
			containLabel : true
		},
		xAxis : [ {
			type : 'value',
			axisLine : {
				show : false,
				lineStyle : {
					color : '#fff',
					width : 1
				}
			},
			axisTick : {
				show : false
			},
			axisLabel : {
				show : true,
				textStyle : {
					color : '#fff',
					fontSize : 30
				}
			},
			splitLine : {
				show : false
			}
		} ],
		yAxis : [ {
			type : 'category',
			data : xArray,
			axisLine : {
				show : false,
				lineStyle : {
					color : '#fff',
					width : 1
				}
			},
			axisTick : {
				show : false,
				lineStyle : {
					color : '#fff'
				}
			},
			axisLabel : {
				show : true,
				rotate : '0',
				// interval:0, //强制显示所有内容
				textStyle : {
					color : '#fff',
					fontSize : 30
				}
			},
			splitLine : {
				show : false
			}
		} ],
		series : [ {
			name : '月平均办件量TOP10',
			type : 'bar',
			data : yArray,
			label : {
				normal : {
					show : true,
					formatter: "{c}件",
					position : 'right',
					textStyle : {
						color : '#ffffff',
						fontSize : 24
					}
				}
			}
		}]
	};
	averageOfficeChart.setOption(averageOfficeOption);
}
function showAverageOfficeTimeEchart(id,xArray,yArray){
	var averageOfficeTimeChart = echarts.init(document.getElementById(id));
	var averageOfficeTimeOption = {
		color : [ '#67d4fc'],
		tooltip : {
			trigger : 'axis',
			axisPointer : { // 坐标轴指示器，坐标轴触发有效
				type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid : {
			left : '17%',
			right : '6%',
			bottom : '4%',
			top : '3%',
			containLabel : true
		},
		xAxis : [ {
			type : 'value',
			axisLine : {
				show : false,
				lineStyle : {
					color : '#fff',
					width : 1
				}
			},
			axisTick : {
				show : false
			},
			axisLabel : {
				show : true,
				textStyle : {
					color : '#fff',
					fontSize : 30
				}
			},
			splitLine : {
				show : false
			}
		} ],
		yAxis : [ {
			type : 'category',
			data : xArray,
			axisLine : {
				show : false,
				lineStyle : {
					color : '#fff',
					width : 1
				}
			},
			axisTick : {
				show : false,
				lineStyle : {
					color : '#fff'
				}
			},
			axisLabel : {
				show : true,
				//rotate : '-30',
				// interval:0, //强制显示所有内容
				textStyle : {
					color : '#fff',
					fontSize : 30
				}
			},
			splitLine : {
				show : false
			}
		} ],
		series : [ {
			name : '月平均办件时长TOP10',
			type : 'bar',
			data : yArray,
			label : {
				normal : {
					show : true,
					formatter: "{c}分钟",
					position : 'right',
					textStyle : {
						color : '#ffffff',
						fontSize : 24
					}
				}
			}
		}]
	};
	averageOfficeTimeChart.setOption(averageOfficeTimeOption);
}
function showWaitTimeEchart(id,array){
	var myChartWait = echarts.init(document.getElementById(id));
	var option = {
		color : [ '#83b0d7', '#464149', '#93ea7a', '#f1a25a' ],
		legend : {
			data : [ '0-10', '10-20','20-30','>30'],
			bottom : '0',
			left: '25%',
			itemWidth: 30,
	        itemHeight: 32,
			textStyle : {
				color : '#fff',
				fontSize : 32
			}
		},
		tooltip : {
			trigger : 'item',
			formatter : "{a} <br/>{b} : {c} ({d}%)"
		},
		graphic: {
	      elements: [{
	          type: 'text',
	          left: 'center',
	          top: 'middle',
	          z: 1,
	          zlevel: 1,
	          style: {
	              text: '等待时长',
	              font: '30px "STHeiti", sans-serif',
	              fill: '#fff'
	          },
	      }]  
	    },
		series : [ {
			name : '等待时长',
			type : 'pie',
			radius : ['35%','55%'],
			center : [ '50%', '42%' ],
			data : array,
			label : {
				normal : {
					show : true,
					position : 'outside',
					formatter : "{d}%",
					textStyle : {
						color : '#fff',
						fontSize : 34
					}
				}
			},
			itemStyle : {
				emphasis : {
					shadowBlur : 10,
					shadowOffsetX : 0,
					shadowColor : 'rgba(0, 0, 0, 0.5)'
				}
			}
		} ]
	}
	myChartWait.setOption(option);
}
function showSatisfactionEchart(id,array){
	var satisfactionWait = echarts.init(document.getElementById(id));
	var option = {
		color : [ '#83b0d7', '#f1a25a'],
		legend : {
			data : [ '满意', '不满意'],
			bottom : '3%',
			orient: 'horizontal',
			itemWidth: 30,
	        itemHeight: 32,
			textStyle : {
				color : '#fff',
				fontSize : 32
			}
		},
		tooltip : {
			trigger : 'item',
			formatter : "{a} <br/>{b} : {c} ({d}%)"
		},
		graphic: {
	      elements: [{
	          type: 'text',
	          left: 'center',
	          top: 'middle',
	          z: 1,
	          zlevel: 1,
	          style: {
	              text: '等待时长',
	              font: '30px "STHeiti", sans-serif',
	              fill: '#fff'
	          },
	      }]  
	    },
		series : [ {
			name : '满意度',
			type : 'pie',
			radius : ['35%','55%'],
			center : [ '50%', '42%' ],
			data : array,
			label : {
				normal : {
					show : true,
					position : 'outside',
					formatter : "{d}%",
					textStyle : {
						color : '#fff',
						fontSize : 34
					}
				}
			},
			itemStyle : {
				emphasis : {
					shadowBlur : 10,
					shadowOffsetX : 0,
					shadowColor : 'rgba(0, 0, 0, 0.5)'
				}
			}
		} ]
	}
	satisfactionWait.setOption(option);
}