	var colors = ["#CC6A19","#D99522","#E5BD3F","#F2E289","#F1F1F1","#97DFC7","#5CB79A","#00906E","#004837"]
	var difScale = difScale = d3.scaleThreshold()
		//.domain([-30,-20,-10,-5,0,5,10,20,30])
		.domain([-20,-15,-10,-5,0,5,10,15,20])
		.range(colors)