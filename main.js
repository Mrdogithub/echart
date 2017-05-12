    var dom = document.getElementById("container");

    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    var geoCoordMap = {
        '上海': [121.4648,31.2891],
        '东莞': [113.8953,22.901],
        '东营': [118.7073,37.5513],
        '中山': [113.4229,22.478],
        '临汾': [111.4783,36.1615],
        '临沂': [118.3118,35.2936],
        '丹东': [124.541,40.4242],
        '丽水': [119.5642,28.1854],
        '乌鲁木齐': [87.9236,43.5883],
        '佛山': [112.8955,23.1097],
        '保定': [115.0488,39.0948],
        '兰州': [103.5901,36.3043],
        '包头': [110.3467,41.4899],
        '北京': [116.4551,40.2539],
        '北海': [109.314,21.6211],
        '南京': [118.8062,31.9208],
        '南宁': [108.479,23.1152],
        '南昌': [116.0046,28.6633],
        '南通': [121.1023,32.1625],
        '厦门': [118.1689,24.6478],
        '台州': [121.1353,28.6688],
        '合肥': [117.29,32.0581],
        '呼和浩特': [111.4124,40.4901],
        '咸阳': [108.4131,34.8706],
        '哈尔滨': [127.9688,45.368],        
        '唐山': [118.4766,39.6826],
        '嘉兴': [120.9155,30.6354],
        '大同': [113.7854,39.8035],
        '大连': [122.2229,39.4409],
        '天津': [117.4219,39.4189],
        '太原': [112.3352,37.9413],
        '威海': [121.9482,37.1393],
        '宁波': [121.5967,29.6466],
        '宝鸡': [107.1826,34.3433],
        '宿迁': [118.5535,33.7775],
        '常州': [119.4543,31.5582],
        '广州': [113.5107,23.2196],
        '廊坊': [116.521,39.0509],
        '延安': [109.1052,36.4252],
        '张家口': [115.1477,40.8527],
        '徐州': [117.5208,34.3268],
        '德州': [116.6858,37.2107],
        '惠州': [114.6204,23.1647],
        '成都': [103.9526,30.7617],
        '扬州': [119.4653,32.8162],
        '承德': [117.5757,41.4075],
        '拉萨': [91.1865,30.1465],
        '无锡': [120.3442,31.5527],
        '日照': [119.2786,35.5023],
        '昆明': [102.9199,25.4663],
        '杭州': [119.5313,29.8773],
        '枣庄': [117.323,34.8926],
        '柳州': [109.3799,24.9774],
        '株洲': [113.5327,27.0319],
        '武汉': [114.3896,30.6628],
        '汕头': [117.1692,23.3405],
        '江门': [112.6318,22.1484],
        '沈阳': [123.1238,42.1216],
        '沧州': [116.8286,38.2104],
        '河源': [114.917,23.9722],
        '泉州': [118.3228,25.1147],
        '泰安': [117.0264,36.0516],
        '泰州': [120.0586,32.5525],
        '济南': [117.1582,36.8701],
        '济宁': [116.8286,35.3375],
        '海口': [110.3893,19.8516],
        '淄博': [118.0371,36.6064],
        '淮安': [118.927,33.4039],
        '深圳': [114.5435,22.5439],
        '清远': [112.9175,24.3292],
        '温州': [120.498,27.8119],
        '渭南': [109.7864,35.0299],
        '湖州': [119.8608,30.7782],
        '湘潭': [112.5439,27.7075],
        '滨州': [117.8174,37.4963],
        '潍坊': [119.0918,36.524],
        '烟台': [120.7397,37.5128],
        '玉溪': [101.9312,23.8898],
        '珠海': [113.7305,22.1155],
        '盐城': [120.2234,33.5577],
        '盘锦': [121.9482,41.0449],
        '石家庄': [114.4995,38.1006],
        '福州': [119.4543,25.9222],
        '秦皇岛': [119.2126,40.0232],
        '绍兴': [120.564,29.7565],
        '聊城': [115.9167,36.4032],
        '肇庆': [112.1265,23.5822],
        '舟山': [122.2559,30.2234],
        '苏州': [120.6519,31.3989],
        '莱芜': [117.6526,36.2714],
        '菏泽': [115.6201,35.2057],
        '营口': [122.4316,40.4297],
        '葫芦岛': [120.1575,40.578],
        '衡水': [115.8838,37.7161],
        '衢州': [118.6853,28.8666],
        '西宁': [101.4038,36.8207],
        '西安': [109.1162,34.2004],
        '贵阳': [106.6992,26.7682],
        '连云港': [119.1248,34.552],
        '邢台': [114.8071,37.2821],
        '邯郸': [114.4775,36.535],
        '郑州': [113.4668,34.6234],
        '鄂尔多斯': [108.9734,39.2487],
        '重庆': [107.7539,30.1904],
        '金华': [120.0037,29.1028],
        '铜川': [109.0393,35.1947],
        '银川': [106.3586,38.1775],
        '镇江': [119.4763,31.9702],
        '长春': [125.8154,44.2584],
        '长沙': [113.0823,28.2568],
        '长治': [112.8625,36.4746],
        '阳泉': [113.4778,38.0951],
        '青岛': [120.4651,36.3373],
        '韶关': [113.7964,24.7028]
    };
    
  
    var CityList = [
        {
    		"name":"深圳",
    	 	"toCoord":[{"name":"重庆","alarmValueTotal":"60"},{"name":"北京","alarmValueTotal":"20"}],
    	 	"alarmValueTotal":"90",
    	 	"productList":[
    	 		{"name":"Level1 supplier","alarmValue":"Company Name"},
    	 		{"name":"Site location","alarmValue":"深圳"},
    	 		{"name":"KSP","alarmValue":"KSP"},
    	 		{"name":"Event","alarmValue":"电力中断"},
    	 		{"name":"Risk Level","alarmValue":"High"}
    	 	],
            "alarmList":[
                {"eventno":"20170203547","event":"工厂停水","eventType":"市政水网改造","riskLevel":"严重","itemInvolved":"2298123","mitigationPlan":"调整供货商"},
                {"eventno":"20170203547","event":"生产设备故障","eventType":"设备故障","riskLevel":"严重","itemInvolved":"2298123","mitigationPlan":"调整供货商"}
            ]

    	},
    	{
    		"name":"上海",
    	 	"toCoord":[{"name":"深圳","alarmValueTotal":"60"},{"name":"大连","alarmValueTotal":"29"}],
    	 	"alarmValueTotal":"90",
    	 	"productList":[
    	 		{"name":"Level1 supplier","alarmValue":"Company Name"},
    	 		{"name":"Site location","alarmValue":"上海"},
    	 		{"name":"KSP","alarmValue":"KSP"},
    	 		{"name":"Event","alarmValue":"员工数量大幅度削减"},
    	 		{"name":"Risk Level","alarmValue":"High"}
    	 	],
            "alarmList":[
                {"eventno":"201701031247","event":"员工数量大幅度削减","eventType":"人力不足","riskLevel":"严重","itemInvolved":"114392","mitigationPlan":"延期交付"}
            ]

    	},
    	{
    		"name":"北京",
    	 	"toCoord":[{"name":"深圳","alarmValueTotal":"90"}],
    	 	"alarmValueTotal":"90",
    	 	"productList":[
    	 		{"name":"Level1 supplier","alarmValue":"Company Name"},
    	 		{"name":"Site location","alarmValue":"北京"},
    	 		{"name":"KSP","alarmValue":"KSP"},
    	 		{"name":"Event","alarmValue":"交付延期"},
    	 		{"name":"Risk Level","alarmValue":"High"}
    	 	],
            "alarmList":[
                {"eventno":"20170501247","event":"交付延期","eventType":"延期","riskLevel":"严重","itemInvolved":"11245312","mitigationPlan":"调整供货商"}
            ]

    	},
    	{
    		"name":"福州",
    	 	"toCoord":[{"name":"上海","alarmValueTotal":"30"}],
    	 	"alarmValueTotal":"30",
    	 	"productList":[
     	 		{"name":"Level1 supplier","alarmValue":"Company Name"},
    	 		{"name":"Site location","alarmValue":"福州"},
    	 		{"name":"KSP","alarmValue":"KSP"},
    	 		{"name":"Event","alarmValue":"物流延误"},
    	 		{"name":"Risk Level","alarmValue":"High"}
    	 	],
            "alarmList":[
                {"eventno":"20170501147","event":"物流延误","eventType":"交通","riskLevel":"严重","itemInvolved":"2298233","mitigationPlan":"增加供货渠道"}
            ]

    	},
    	{
    		"name":"包头",
    	 	"toCoord":[{"name":"深圳","alarmValueTotal":"90"}],
    	 	"alarmValueTotal":"90",
    	 	"productList":[
    	 		{"name":"Level1 supplier","alarmValue":"Company Name"},
    	 		{"name":"Site location","alarmValue":"包头"},
    	 		{"name":"KSP","alarmValue":"KSP"},
    	 		{"name":"Event","alarmValue":"市政水网改造"},
    	 		{"name":"Risk Level","alarmValue":"High"}  	 		
    	 	],
            "alarmList":[
                {"eventno":"201702123","event":"工厂停水","eventType":"市政水网改造","riskLevel":"严重","itemInvolved":"2212323","mitigationPlan":"调整供货商"},
                {"eventno":"201704047","event":"生产设备故障","eventType":"设备故障","riskLevel":"严重","itemInvolved":"9831223","mitigationPlan":"调整供货商"}
            ]

    	},
    	{
    		"name":"大连",
    	 	"toCoord":[{"name":"上海","alarmValueTotal":"70"}],
    	 	"alarmValueTotal":"40",
    	 	"productList":[
        	 	{"name":"Level1 supplier","alarmValue":"Company Name"},
    	 		{"name":"Site location","alarmValue":"大连"},
    	 		{"name":"KSP","alarmValue":"KSP"},
    	 		{"name":"Event","alarmValue":"工厂搬迁"},
    	 		{"name":"Risk Level","alarmValue":"low"}  
    	 	],
           "alarmList":[
                {"eventno":"201702123","event":"工厂搬迁","eventType":"工厂变动","riskLevel":"正常","itemInvolved":"2212323","mitigationPlan":"调整供货商"}
            ]

    	},
    	{
    		"name":"重庆",
    	 	"toCoord":[{"name":"深圳","alarmValueTotal":"90"}],
    	 	"alarmValueTotal":"29",
    	 	"productList":[
    	 		{"name":"Level1 supplier","alarmValue":"Company Name"},
    	 		{"name":"Site location","alarmValue":"重庆"},
    	 		{"name":"KSP","alarmValue":"KSP"},
    	 		{"name":"Event","alarmValue":"设备故障"},
    	 		{"name":"Risk Level","alarmValue":"low"}  
    	 	],
            "alarmList":[
                {"eventno":"2017040127","event":"生产设备故障","eventType":"设备故障","riskLevel":"告警","itemInvolved":"87331223","mitigationPlan":"调整供货商"}
            ]

    	}
    ]
    var convertData = function (data) {
        var res = [];
        var len = data.toCoord.length;

        if (len) {
        	for (var i = 0; i < len; i++) {
				var fromCoord = geoCoordMap[data.name];
	        	var toCoord = geoCoordMap[data.toCoord[i].name];
	        	 if (fromCoord && toCoord) {
	                res.push({
	                    fromName: data.name,
	                    toName: data.toCoord,
	                    coords: [fromCoord, toCoord]
	                });
	            }
        	}
        }
        return res;
    };
    
    var color = [  '#80F1BE','#fec42c','#dd4444']; // 局点颜色
    var series = [];

    CityList.forEach(function (item, i) {
        series.push({
            name: item.name,
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item)
        },
        { // 控制曲线对位obj
            name: item.name,
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                //symbol: planePath,
                symbolSize:0
            },
            lineStyle: {
                normal: {
                    color: function (dataItem) {
                    	var toCoordList = dataItem.data.toName;
                    	for (var i =0 ; i < toCoordList.length; i++) {
                    		console.log(toCoordList[i].alarmValueTotal)
                    		if (toCoordList[i].alarmValueTotal < 30) {
                    		  return color[0];
	                    	}

	                    	if (toCoordList[i].alarmValueTotal >= 30 && toCoordList[i].alarmValueTotal <90) {

	                    		return color[1];
	                    	}


	                    	if (toCoordList[i].alarmValueTotal >= 90) {
	                    		return color[2];
	                    	}
                    	}
                    	
                    },
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(item)
        },
        {  // 地图局点obj
            name: item.name,
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: { // 局点颜色
                    color: function (dataItem){
                    	if (dataItem.value[2] < 30) {
                    		return color[0];
                    	}

                    	if (dataItem.value[2] >= 30 && dataItem.value[2] <90) {
                    		return color[1];
                    	}

                    	if (dataItem.value[2] >= 90) {
                    		return color[2];
                    	}
                    }
                }
            },
            data: CityList.map(function (dataItem) {
           
                return {
                    name: dataItem.name,
                    value: geoCoordMap[dataItem.name].concat([dataItem.alarmValueTotal])
                };
            })
        });
    });
    
    option = {
        backgroundColor: '#404a59',
        title : {
            text: '供应商风险地图',
            subtext: '实时反馈',
            left: 'center',
            textStyle : {
                color: '#fff'
            }
        },
        tooltip : {
            triggerOn: 'click',
            padding:5,
            formatter:function (item){
       			var oStr = '';
            	CityList.map(function(currentCity) {
            	 	if(currentCity.name === item.data.name) {
            	 		var len = currentCity.productList.length;

            	 		currentCity.productList.forEach(function(item){
                            var bgcolor = color[0];
                            if (item.alarmValue < 30) {
                                bgcolor = color[0];
                            }

                            if (item.alarmValue >= 30 && item.alarmValue <90) {
                               bgcolor = color[1];
                            }


                            if (item.alarmValue >= 90) {
                               bgcolor = olor[2];
                            }
            	 			oStr += '<li>' + item.name + '：<span style="display:inline-block;margin-left:10px;color:'+bgcolor+'">'+ item.alarmValue +'<span>' +'</li>';
            	 		});
            	 	} 

            	});
				return "<ul style = 'list-style:none;width:100%;text-align:left;padding:10px;margin:0;'>"+oStr+'</ul>';
            
            }
        },


        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#404a59'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: series
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

    myChart.on('click',function(params){

        $('.content-wrapper').css('display','none');
         // create element dynamic
        $('.trList').empty();
        $('.trList').append($('<tr class = "loading"><td style = "text-align:center" colspan="6"> <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></td></tr>'));
         var currentCity = params.name;
         $('.siteLocation').html(currentCity);
         CityList.map(function (item) {
            if (item.name == currentCity) {
                clearTimeout(timer);
                var $tr_1 = '';
                var trArray = [];
                item.alarmList.forEach(function (alarmItem) {
                   var _color = alarmItem.riskLevel == "严重" ? 'alarm' : (alarmItem.riskLevel == "告警" ? "yellow" : "normal");
                   trArray.push('<tr>'
                                +'<td class = "count-wrapper">'
                                +'<span>'
                                + alarmItem.eventno
                                +'</span>'
                                +'</td>'
                                +'<td class = "count-wrapper">'
                                +'<span>'
                                + alarmItem.event
                                +'</span>'
                                +'</td>'
                                +'<td class = "count-wrapper">'
                                +'<span>'
                                + alarmItem.eventType
                                +'</span>'
                                +'</td>'
                                +'<td class = "count-wrapper">'
                                +'<span class ="count '+ _color +'">'
                                + alarmItem.riskLevel 
                                +'</span>'
                                +'</td>'
                                +'<td class = "count-wrapper">'
                                +'<span>'
                                + alarmItem.itemInvolved 
                                +'</span>'
                                +'</td>'
                                 +'<td class = "count-wrapper">'
                                +'<span>'
                                + alarmItem.mitigationPlan 
                                +'</span>'
                                +'</td>'
                     +'</tr>');
                });
                var timer = setTimeout(function () {
                    $('.trList').append($(trArray.join("")));
                    $('.trList').fadeIn();
                },1000);
                $('.loading').fadeOut()
               $('.content-wrapper').css('display','block')
            }
         });
    });


    ///

    $('.toggle-button').click(function(){
        tipBarStatus();

    })

    function tipBarStatus () {
        var hasClass = $(".btn-icon").hasClass('fa-chevron-up');
        if (hasClass) {
            $('#btn-icon').removeClass().addClass('fa fa-chevron-down');
           
        } else {
            $('#btn-icon').removeClass().addClass('fa fa-chevron-up');
        }
         $('.content-wrapper').slideToggle();
    }


    $('#nav-tabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })