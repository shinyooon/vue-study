let app = new Vue({
	el: '#app',
	data(){
		return{
			counter :0,
			style:{
				padding:'10px'
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
			],
		};
	},
	// methodes json을 만들어 함수 기능 구현
	//주의  화살표 함수(arrow function)을 사용하면 안됨(this를 통해 data에 접근하기 위해)
	methods:{
		add(){
			this.counter ++;
		},
		keyUp(ev){
			if(ev.keyCode!==13){
				console.log('엔터키아님');
				return;
			}
			console.log('엔터키눌림');
		},
		click(){
			this.toggle.on = !this.toggle.on;
		},
	}
});