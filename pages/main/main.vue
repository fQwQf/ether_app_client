<template>
	<view class="cont">
		<view v-if="hasLogin" class="hello">
			<view class="title">
				您好 {{userName}}，您已成功登录。
			</view>
			<view class="ul">
				<button  type="default" @tap="goLeaveWord">留言</button>
			</view>
		</view>
		<view v-if="!hasLogin" class="hello">
			<view class="title">
				您好。
			</view>
			<view class="ul">
				<view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
			</view>
		</view>
		<br /><hr />
		<view class="hello">
			<h4>留言</h4>
			<view v-for="word in leave_word['text']" v-bind:key="leave_word.id" class="leave_word">
				<span class="span">{{word['username']}}</span>
				<p v-html="word['text']" class="test"></p>
				<span class="span">{{word['time']}}</span>
			</view>
			<view>
				<button v-show="leave_word['page'].indexOf('lastPage')+1"  @tap="lastPage">上一页</button>
				<button v-show="leave_word['page'].indexOf('nextPage')+1"  @tap="nextPage">下一页</button>
			</view>
			</view>
			<view class="cu-modal drawer-modal justify-start" :class="modalName=='DrawerModalL'?'show':''" @tap="hideModal">
				<view class="cu-dialog basis-lg" @tap.stop="" :style="[{top:CustomBar+'px',height:'calc(100vh - ' + CustomBar + 'px)'}]">
					<view class="cu-list menu text-left">
						<view class="cu-item arrow" >
							<view class="content">
								<navigator url="../log/update_log">更新日志</navigator>
							</view>
						</view>
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
		data(){
			return{
				leave_word_number: 0,
				leave_word: [],
				modalName: null
			}
		},
		computed: {
			...mapState(['hasLogin','userName'])
		},
		onNavigationBarButtonTap() {console.log("点击了自定义按钮");      } ,
		onLoad (){
			this.showLeaveWord(this.$data.leave_word_number);
		},
		onPullDownRefresh() {
			this.$data.leave_word_number = 0;
			uni.request({
			url: 'http://ether.gq:90/show_leave_word.php',
			data: {
				q: 0
				},
			method:'GET',
			success: res => {
				this.$data.leave_word=res.data;
				}
			})
			uni.stopPullDownRefresh();
		},
		onNavigationBarButtonTap() {
			this.showModal()
		},
		methods: {
			showModal(e) {
				this.modalName ='DrawerModalL'
			},
			hideModal(e) {
				this.modalName = null
			},
			goLeaveWord() {
				uni.navigateTo({
					url: '../leave_word/leave_word'
				});
			},
			showLeaveWord: function(q) {
				uni.request({
					url: 'http://ether.gq:90/show_leave_word.php',
					data: {
						q: this.q
						},
					method:'GET',
					success: res => {
						this.$data.leave_word=res.data;
						}
				})
				
			},
			lastPage() {
				this.$data.leave_word_number -= 10;
				uni.request({
					url: 'http://ether.gq:90/show_leave_word.php',
					data: {
						q: this.$data.leave_word_number
						},
					method:'GET',
					success: res => {
						this.$data.leave_word=res.data;
						}
					
				});
				uni.pageScrollTo({
							scrollTop: 0,
							duration: 0
						});
				},
			nextPage() {
				this.$data.leave_word_number += 10;
				uni.request({
					url: 'http://ether.gq:90/show_leave_word.php',
					data: {
						q: this.$data.leave_word_number
						},
					method:'GET',
					success: res => {
						this.$data.leave_word=res.data;
						}
					
				});
				uni.pageScrollTo({
							scrollTop: 0,
							duration: 0
						});
			}
		}
	}
	
	
</script>

<style>
	
	@import "../../colorui/main.css";
	@import "../../colorui/icon.css";
	@import "../../colorui/animation.css";
	
	.hello {
		display: flex;
		/*flex: 1;*/
		flex-direction: column;
	}

	.title {
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul {
		font-size: 15px;
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul>view {
		line-height: 25px;
	}
	
	.span{
		color: #C8C7CC;
	}
	
	view.leave_word {
		width: 97.5%;
		height: auto;  
		word-wrap:break-word;  
		word-break:break-all;  
		overflow: hidden;
		background-color: #FFFFFF;
		padding: 5px;
		margin: 5px;
		border-radius:7.5px
	}
	
</style>
