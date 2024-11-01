<template>
	<view>
		<i>如果你不是开发者，你不应该来到这里！</i>
	<h5>socket.io演示客户端</h5>
	<input type="text" placeholder="设置房间号" id="roomId"><button @click="setRoom">确定</button>
	<input type="text" placeholder="发送消息" id="msg">
	<input type="text" placeholder="发送给" id="toRoomId"><button @click="sayTo">确定</button>
	<div id="word">
	 
	</div>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	
	export default{
		onLoad: () => {
		},
		computed: {
			...mapState(['hasLogin','userName'])
		},
		methods:{
			setRoom(){
				this.socket.emit('setRoom',{"roomId":this.userName});
			}
		}
	}
	
	
</script>

<style>
</style>
