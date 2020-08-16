<template>
	<view class="cont">
		<br/>
			
		<view class="cu-list menu" v-if="!hasLogin">
			<view class="cu-item" :class="'arrow'" @tap="bindLogin">
				<view class="content">
				<text class="lg text-gray" :class="'cuIcon-my'"></text>
				<text class="text-grey">登录</text>
				</view>
			</view>
		</view>
		
		
		<view class="cu-list menu">
			<view class="cu-item" :class="'arrow'" @tap="checkUpdate">
				<view class="content">
					<text class="lg text-gray" :class="'cuIcon-pullup'"></text>
					<text class="text-grey">检查更新</text>
				</view>
			</view>
			<view class="cu-item" :class="'arrow'" @tap="options">
				<view class="content">
					<text class="lg text-gray" :class="'cuIcon-settings'"></text>
					<text class="text-grey">选项</text>
				</view>
			</view>
		</view>
		
		<view class="cu-list menu" v-if="hasLogin">
			<view class="cu-item" :class="'arrow'" @tap="friendsList">
				<view class="content">
					<text class="lg text-gray" :class="'cuIcon-friend'"></text>
					<text class="text-grey">好友列表</text>
				</view>
			</view>
			<view class="cu-item" :class="'arrow'" @tap="searchUsers">
				<view class="content">
					<text class="lg text-gray" :class="'cuIcon-search'"></text>
					<text class="text-grey">搜索用户</text>
				</view>
			</view>
			<view class="cu-item" :class="'arrow'" @tap="requestList">
				<view class="content">
					<text class="lg text-gray" :class="'cuIcon-friendadd'"></text>
					<text class="text-grey">请求列表</text>
				</view>
			</view>
		</view>
		
		<view class="cu-list menu" v-if="hasLogin">
			<view class="cu-item" :class="'arrow'" @tap="bindLogout">
				<view class="content">
					<text class="lg text-gray" :class="'cuIcon-exit'"></text>
					<text class="text-grey">退出登录</text>
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

	export default {
		computed: {
			...mapState(['hasLogin','testVersion'])
		},
		methods: {
			...mapMutations(['logout']),
			bindLogin() {
				uni.navigateTo({
					url: '../login/login',
				});
			},
			options() {
				uni.navigateTo({
					url: '../options/options',
				});
			},
			bindLogout() {
				this.logout();
			},
			options() {
				uni.navigateTo({
					url: '../options/options',
				});
			},
			friendsList() {
				uni.navigateTo({
					url: '../friend/friends_list',
				});
			},
			searchUsers() {
				uni.navigateTo({
					url: '../search/search_users',
				});
			},
			requestList() {
				uni.navigateTo({
					url: '../friend/request_add_friend_list',
				});
			},
			checkUpdate(){
				console.log(this.testVersion)
					var server = "http://ether.gq:90/update.php"; //检查更新地址
					var req = { //升级检测数据
						"appid": plus.runtime.appid,
						"version": plus.runtime.version,
						"BETA": this.testVersion
					};
					
					uni.request({
						url: server,
						data: req,
						success: (res) => {
							if (res.statusCode == 200 && res.data.status === 1) {
								var data=res.data;
								uni.showModal({ //提醒用户更新
									title: "更新提示",
									content: res.data.note,
									success: (res) => {
										if (res.confirm) {
										plus.runtime.openURL(data.url);
										}
									}
								})
							}else if (res.statusCode == 200 && res.data.status === 0){
								uni.showToast({
									icon: 'none',
									title: '已是最新版本',
									duration: 3000
									});
							}
						},
						fail: () => {
							uni.showToast({
								icon: 'none',
								title: '检查失败',
								duration: 3000
								});
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
