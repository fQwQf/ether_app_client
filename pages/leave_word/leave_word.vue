<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row">
				<text class="title" >内容：</text>
				<textarea v-model="text" auto-height="true" maxlength="-1" style=" padding: 8px;width: 80%;"></textarea>
			</view>
		</view>
		<p>{{fuck}}</p>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="leaveWord">确定</button>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js';
	import mInput from '../../components/m-input.vue';
	import {
		mapState
	} from 'vuex'
	
	
	export default {
		components: {
			mInput
		},
		data() {
			return{
				email: ''
			}
		},
		computed: mapState(['hasLogin', 'userName']),
		methods: {
			leaveWord() {
				if (!this.text) {
					uni.showToast({
						icon: 'none',
						title: '请输入内容',
					});
					return;
				};
				
				uni.request({
					url: 'http://ether.gq/leave_word.php',
					data: {
						username: this.userName,
						text: this.text
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded', 
					},	
					method:'POST',
					success: res => {
						uni.showToast({
							icon: 'none',
							title: '已留言',
							duration: 3000
							});
						}
					});
			}
		},

	}
</script>

<style>

</style>