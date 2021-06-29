let app = new Vue({
	el: '#app',
	data:{
		id: 1,
		image:'https://picsum.photos/200/200/?image=353',
		style:{
			background:'red',
		},
		fontStyle:{
			fontSize:'30px',
			fontFamily:'dotum'
		},
		dropdown:'dropdown',
		toggle:{
			on:false
		},
		list : [
			{
				title:'메뉴1'
			},
			{
				title:'메뉴2'
			}
		]
	}
});