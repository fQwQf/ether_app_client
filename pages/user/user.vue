<template>
	<view class="content">
		<view class="btn-row">
			<button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
			<button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
			<button v-if="hasLogin" type="default" @tap="checkUpdate">检查更新</button>
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
			...mapState(['hasLogin'])
		},
		methods: {
			...mapMutations(['logout']),
			bindLogin() {
				uni.navigateTo({
					url: '../login/login',
				});
			},
			bindLogout() {
				this.logout();
				
			},
			checkUpdate(){
					var server = "https://ether.gq/update.php"; //检查更新地址
					var req = { //升级检测数据
						"appid": plus.runtime.appid,
						"version": plus.runtime.version
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

</style>
