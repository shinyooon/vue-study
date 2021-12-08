Vue.component('product',{
	props:['image', 'title', 'desc', 'profile'],
	template:`
		<div class="product">
			<div class="item_image"><img :src="image"></div>
			<div class="item_info">
				<span class="profile_image"><img :src="profile" ></span>
				<strong class="item_title">{{title}}</strong>
				<p class="item_desc">{{desc}}</p>
			</div>
		</div>
	`
})
let app = new Vue({
	el: '#app',
	data(){
		return{
			products : [
				{
					image:'https://picsum.photos/300/320?image=0',
					profile:'https://picsum.photos/30/30?image=80',
					title: '노트북',
					desc : '노트북 상품설명'
				},
				{
					image:'https://picsum.photos/300/320?image=3',
					profile:'https://picsum.photos/30/30?image=80',
					title: '아이폰',
					desc : '아이폰 상품설명'
				},
				{
					image:'https://picsum.photos/300/320?image=5',
					profile:'https://picsum.photos/30/30?image=80',
					title: '포크',
					desc : '포크 상품설명'
				},
				{
					image:'https://picsum.photos/300/320?image=10',
					profile:'https://picsum.photos/30/30?image=80',
					title: '책',
					desc : '책 상품설명'
				}
			]
		};
	},
});