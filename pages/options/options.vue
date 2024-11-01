<template>
	<view class="cont">
		<view class="cu-form-group margin-top">
			<view class="title">更新测试版本</view>
			<switch @change="SetTestVersion" :class="TestVersion?'checked':''" :checked="TestVersion?true:false" color="#07e50e"></switch>
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
			return {
				TestVersion:false
			}
		},
		computed: {
			...mapState(['testVersion'])
		},
		onLoad() {
			this.TestVersion=this.testVersion
		},
		methods:{
			...mapMutations(['setTestVersion']),
			SetTestVersion(e) {
				this.TestVersion = e.detail.value
				this.setTestVersion(this.TestVersion)
				uni.setStorageSync('testVersion',this.TestVersion)
			}
		}
	}
</script>

<style>
	@import "../../colorui/main.css";
	@import "../../colorui/icon.css";
	@import "../../colorui/animation.css";
</style>
