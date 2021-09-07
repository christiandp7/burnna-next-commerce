export const setBgColor = (colors: string[]) => {
	if (colors[0].length === 2) {
		const gradient = `linear-gradient(135deg, ${colors[0][0]} 33%, ${colors[0][1]} 66%)`
		return gradient
	}
	if (colors[0].length === 3) {
		const gradient = `linear-gradient(135deg, ${colors[0][0]} 33%, ${colors[0][1]} 66%, ${colors[0][2]} 100%)`
		return gradient
	}
	if (colors[0].length === 4) {
		const gradient = `linear-gradient(135deg, ${colors[0][0]} 25%, ${colors[0][1]} 50%, ${colors[0][2]} 75%, ${colors[0][3]} 100%)`
		return gradient
	}
	return colors[0]
}

export const setLabel = (label: string) => {
	const trueLabel = label.split(':')
	return trueLabel[0]
}
