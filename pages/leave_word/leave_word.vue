<template>
	<view class="cont">
		<view id="text" class="cu-form-group align-start">
			<view class="title">内容：</view>
			<textarea v-model="text" maxlength="-1" :disabled="modalName!=null" @input="textareaBInput" placeholder=""></textarea>
		</view>
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
			
			}
		},
		computed: mapState(['userName']),
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
					url: 'http://ether.gq:90/leave_word.php',
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
	@import "../../colorui/main.css";
	@import "../../colorui/icon.css";
</style>