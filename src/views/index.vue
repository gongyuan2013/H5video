<template>
	 <div class='video'>
		<video-player class="video-player vjs-custom-skin"
					  ref="videoPlayer"
					  :playsinline="true"
					  :options="playerOptions">
		</video-player>
		
		<h2>《扬帆向海 聚力攻坚》</h2>	
		<p>青岛，因海而生，向海而兴，海洋是青岛最大的潜力和希望所在。2019年以来，市委、市政府强力发起新旧动能转换“海洋攻势”，全面打响海洋产业转型跨越、海洋科技创新引领等六场硬仗，在蔚蓝大海上奏响蓝色华章。</p>
		<div>聚力攻坚打硬仗</div>
		<p>海洋是高质量发展的战略要地。2019年以来，青岛全面打响海洋产业转型跨越、高水平对外开放、海洋港口提质增效等硬仗。</p>
		<p>全球最大40万吨新型矿砂船、世界最大吨位“海上石油工厂”P70等世界级船舶海工产品在青建成交付。</p>
		<p>山东港口集团在青岛挂牌成立，青岛港全自动化码头二期投产运营，通达海内外33个地区的海铁联运班列升至48条。</p>
		<p>山东港口集团在青岛挂牌成立，青岛港全自动化码头二期投产运营，通达海内外33个地区的海铁联运班列升至48条。</p>
		<p>青岛海洋发展大会、中国国际渔业博览会、东亚海洋合作平台青岛论坛等高端展会成功举办；青岛海洋生物制品、船舶与海工装备等产业联盟和行业协会成立；设立总规模50亿元的“中国蓝色药库开发基金”，新增主板涉海上市企业3家。2019年，青岛海洋生产总值增速11.2%，占GDP比重28.7%。全市海洋产业固定资产投资额增长56.5%，高于全市投资增速34.9个百分点。</p>
		<div>高扬风帆向深蓝</div>
		<p>2019年以来，青岛彰显海洋科技优势，打响海洋科技创新引领硬仗。</p>
		<p>“蓝海101”、“东方红3”、“深蓝号”三艘重量级科考船入列；海洋试点国家实验室与澳大利亚、美国、俄罗斯等多个国家共建海外研发中心；中科院海洋大科学研究中心梳理13家共建单位300余项科研成果，助推研究所科技成果走出“象牙高阁”。</p>
		<p>努力打通“产学研金服用”成果转化链条，“蓝色药库”捷报频传：管华诗院士团队牵手黄海制药，在青成立专注于海洋药物开发利用的公司，并和青岛啤酒合作，推出王子海藻苏打水，填补了我国海洋大健康饮品空白。</p>
		<div>保护蓝色家园 滋养海洋根脉</div>
		<p>海洋是生命的摇篮，资源的宝库，是我们赖以生存的蓝色家园。</p>
		<p>海洋是生命的摇篮，资源的宝库，是我们赖以生存的蓝色家园。</p>
		<p>打响滋养海洋文化根脉硬仗，海洋文化彰显新气象。国家文物局水下文化遗产保护中心北海基地建成运营。海军博物馆新馆、贝壳博物馆新馆建设顺利推进。建成15个全国海洋科普教育基地。海洋国际音乐季、国际帆船周等活动成功举办。</p>
		<p>“风从海上来，扬帆正当时”，在海洋强国、海洋强省建设的大潮中，青岛重任在肩。2020年，青岛将继续做好经略海洋这篇大文章，努力攻克制约海洋经济高质量发展的“山头”和“碉堡”，保护蓝色家园，厚植海洋文化，为城市高质量发展提供澎湃动力。</p>
	</div>

</template>

<script>
    export default {
        data() {
            return {
                playerOptions: {
                    playbackRates: [0.5, 1.0, 1.5, 2.0], 
                    autoplay: false, 
                    muted: false, 
                    loop: false, 
                    preload: 'auto', 
                    language: 'zh-CN',
                    aspectRatio: '16:9',
                    fluid: true,
                    sources: [{
                        type: "video/mp4",
                        src: 'https://langu.oss-cn-qingdao.aliyuncs.com/1.mp4' 
                    }],
                    poster: '', 
                    notSupportedMessage: '此视频暂无法播放，请稍后再试',
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true  
                    }
                }
 
            }
        }
    }
</script>

<style scoped lang="less">
  .video{
    width: 96%;
    height: auto;
    text-align: center;
    line-height: 100px;
    overflow: hidden;
    background: #fff;
    position: relative;
	padding: 2%;
	h2{
		margin: 10px 0;
		line-height: 1.5rem;
		font-size: 32px;
		font-weight: bold;
		text-align: center;
	}
	div{
		text-align: center;
		font-size: 18px;
		margin: 5px 0;
		line-height: 36px;
	}
	p{
		line-height: 28px;
		margin: 0;
		text-indent: 28px;
		font-size: 14px;
		text-align: left;
	}
  }

</style>
 