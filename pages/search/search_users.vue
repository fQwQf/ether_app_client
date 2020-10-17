<template>
	<view class="cont">
		<view class="u-demo-wrap">
			<view class="u-demo-area">
				<u-toast ref="uToast"></u-toast>
				<u-search v-model="value" @change="change" @custom="custom" @search="search" :shape="shape" :clearabled="clearabled" 
				:show-action="showAction" :input-align="inputAlign" @clear="clear"></u-search>
			</view>
		</view>
		
		<view class="u-demo-wrap" v-if="!usernames">
			<view class="u-demo-area">
				<u-empty :mode="'search'">
				</u-empty>
			</view>
		</view>
		
		<view v-for="username in usernames" class="cu-list menu" :class="'sm-border'" v-if="usernames">
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-friendadd text-green"></text>
					<text class="text-grey">{{username}}</text>
				</view>
				<view class="action">
					<button class="cu-btn round bg-green shadow" @click="add_friend(username)">
						<text class="cuIcon-add"></text>好友</button>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	
	export default{
		data(){
			return{
				usernames:[]
			}
		},
		onLoad() {
			
			Array.prototype.indexOf = function(val) { 
			for (var i = 0; i < this.length; i++) { 
			if (this[i] == val) return i; 
			} 
			return -1; 
			};
			Array.prototype.remove = function(val) { 
			var index = this.indexOf(val); 
			if (index > -1) { 
			this.splice(index, 1); 
			} 
			};
		},
		computed: {
			...mapState(['userName'])
		},
		methods:{
			custom(value) {
				this.search(value)
			},
			search(value) {
				if(!value){
					this.$refs.uToast.show({
						title: '请输入内容',
						type: 'warning'
					})
					return
				}
				uni.request({
					url: 'http://ether.gq:90/search_users.php',
					data: {
						username: value
						},
					method:'GET',
					success: res => {
						
						this.$data.usernames=res.data['usernames']
					},
					fail:res => {
						console.log('jjj')
					}
					
				});
			},
			add_friend(username){
				var list
				uni.request({
					url: 'http://ether.gq:90/request_add_friend.php',
					data: {
						friendname:username,
						username:this.userName
						},
					method:'GET',
					success: res => {
						console.log(res.data)
						if(res.data=='2'){
							this.$refs.uToast.show({
								title: '申请已发出',
								type: 'warning'
							})
						}else if(res.data=='1'){
							this.$refs.uToast.show({
								title: '申请已发出',
								type: 'success'
							})
						}
					},
					fail:res => {
						console.log('jjj')
					}
				})
				
			}
		}
	}
</script>

<style>
	@import "../../colorui/main.css";
	@import "../../colorui/icon.css";
	@import "../../colorui/animation.css";
</style>
