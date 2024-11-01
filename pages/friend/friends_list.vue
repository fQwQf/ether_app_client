<template>
	<view class="cont">
		<view class="cu-list menu-avatar">
			<view class="cu-item" :class="modalName=='move-box-'+ index?'move-cur':''" v-for="(username,index) in list['friends']" :key="index"
			 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + index">
				<view class="content" @click="chat(username)">
					<view class="text-grey">{{username}}</view>
				</view>
				<view class="move">
					<view class="bg-red" @click="delete_friend(username)">删除</view>
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
		
	export default {
		computed:{
			...mapState(['userName'])
		},
		data() {
			return {
				list:[],
				modalName: null,
				listTouchStart: 0,
				listTouchDirection: null
			};
		},
		onLoad() {
			this.get_list()
		},
		methods: {
			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},
			
			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},
			
			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			},
			get_list() {
				uni.request({
					url: 'http://ether.gq:90/show_friends_list.php',
					data: {
						username: this.userName
						},
					method:'GET',
					success: res => {
						this.$data.list=res.data
						
						if (res.data['friends']==''){
							this.$data.list=false
						}
						console.log(res.data)
					},
					fail:res => {
						console.log('jjj')
					}
					
				});
			},
			delete_friend(username){
				uni.request({
					url: 'http://ether.gq:90/delete_friend.php',
					data: {
						friendname: username,
						username: this.userName
						},
					method:'GET',
					success: res => {
						this.get_list()
					},
					fail:res => {
						console.log('jjj')
					}
					
				});
			},
			chat(username){
				uni.navigateTo({
				    url: './chat?username='+username
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "../../colorui/main.css";
	@import "../../colorui/icon.css";
	@import "../../colorui/animation.css";
</style>
