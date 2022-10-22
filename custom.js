/*
 * 渐变颜色变量组，使用 hsl 颜色模式，一组一共 12 个颜色
 * 利用 animateFrame 实现颜色渐变
 */

function color_loop() {
	// 通过时间计算当前处于周期的哪个位置
	const n = 5 // 5s 一个周期
	const date = new Date()
	// 利用秒数计算当前处于周期的哪个位置
	const t = date.getSeconds() % n
	// 利用毫秒数计算当前位置和下一个位置的百分比
	const p = date.getMilliseconds() / 1000
	// 计算当前偏移量
	const offset = t + p

	// 生成12个颜色
	new Array(12).fill(0).map((_, i) => {
		// 计算当前颜色的 hsl 值
		const h = Math.floor((i * 30 + (offset * 360) / n) % 360)
		const s = 100
		const l = 50
		// 生成颜色
		const color = `hsl(${h}, ${s}%, ${l}%)`
		// 设置颜色
		document.documentElement.style.setProperty(
			`--color-gradient-${i + 1}`,
			color
		)
	})

	requestAnimationFrame(color_loop)
}
color_loop()