var app = new Vue({
	el: '#app',
	data:{
		message: 'Hello Vue!',
		userId : '',
		userPassword : '',
	}
});

app.message = 'I have changed the data!'

var app2 = new Vue({
	el: '#app-2',
	data: {
	  message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
	}
  })
  app2.message = '새로운 메시지'