<template>
	<view class="cont">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">账号：</text>
				<m-input type="text" focus clearable v-model="account" placeholder="请输入账号"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
			<view class="input-row">
				<text class="title">邮箱：</text>
				<m-input type="text" clearable v-model="email" placeholder="请输入邮箱"></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="register">注册</button>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js';
	import mInput from '../../components/m-input.vue';

	export default {
		components: {
			mInput
		},
		data() {
			return {
				account: '',
				password: '',
				email: ''
			}
		},
		methods: {
			register() {
				if (this.account.length < 2) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 2 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				if (this.email.length < 3 || !~this.email.indexOf('@')) {
					uni.showToast({
						icon: 'none',
						title: '邮箱地址不合法'
					});
					return;
				}

				const data = {
					username: this.account,
					password: this.password,
					email: this.email
				}
				
				uni.request({
					url: 'http://ether.gq:90/sign_up.php',
					data: data,
					method:'GET',
					success: res => {
						if (res.data==1){
							uni.showToast({
								icon: 'none',
								title: '注册成功',
								duration: 3000
								});
							uni.navigateBack({
								delta: 1
							});
						}else{
							uni.showToast({
								icon: 'none',
								title: '账号已被占用',
								duration: 3000
							});
						}
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '注册失败',
							duration: 3000
						});
					}
					});
				
				
			}
		}
	}
</script>

<style>

</style>
