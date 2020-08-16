<template>
	<view class="cont">
		
		<view v-for="username in list['request_add_friends']" class="cu-list menu" :class="'sm-border'">
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-friendadd text-green"></text>
					<text class="text-grey">{{username}}</text>
				</view>
				<view class="action">
					<button class="cu-btn round bg-gradual-green shadow" @click="add_friend(username)">
						<text class="cuIcon-check"></text>接受</button> <text>   </text>
					<button class="cu-btn round bg-gradual-red shadow" @click="refuse(username)">
						<text class="cuIcon-close"></text>拒绝</button>
				</view>
			</view>
		</view>
		
		<view class="u-demo-wrap" v-if="!list">
			<view class="u-demo-area">
				<u-empty :mode="'list'">
				</u-empty>
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
		computed:{
			...mapState(['userName'])
		},
		data(){
			return{
				list:[]
			}
		},
		onLoad() {
			this.get_list()
		},
		methods:{
			get_list() {
				uni.request({
					url: 'http://ether.gq:90/show_request_add_friend.php',
					data: {
						username: this.userName
						},
					method:'GET',
					success: res => {
						this.$data.list=res.data
						console.log(res.data)
						if (!res.data['request_add_friends']){
							this.$data.list=false
						}
						console.log(this.$data.list)
					},
					fail:res => {
						console.log('jjj')
					}
					
				});
			},
			add_friend(username){
				uni.request({
					url: 'http://ether.gq:90/add_friend.php',
					data: {
						friendname: username,
						username: this.userName
						},
					method:'GET',
					success: res => {
						
						uni.request({
							url: 'http://ether.gq:90/request_delete_friend.php',
							data: {
								friendname: this.userName,
								username: username
								},
							method:'GET',
							success: res => {
								uni.showToast({
									icon: 'none',
									title: '已接受',
									duration: 3000
									});
								this.get_list()
							},
							fail:res => {
								console.log('jjj')
							}
							
						});
					},
					fail:res => {
						console.log('jjj')
					}
					
				});
			},
			refuse(username){
				uni.request({
					url: 'http://ether.gq:90/request_delete_friend.php',
					data: {
						friendname: this.userName,
						username: username
						},
					method:'GET',
					success: res => {
						console.log(res.data)
						uni.showToast({
							icon: 'none',
							title: '已拒绝',
							duration: 3000
							});
						this.get_list()
					},
					fail:res => {
						console.log('jjj')
					}
					
				});
			}
		}
	}
</script>

<style>
	@import "../../colorui/main.css";
	@import "../../colorui/icon.css";
	@import "../../colorui/animation.css";
</style>
