module.export = () => {
	const time = Date.now()
	const today = new Date( time );
	return today.toISOString()
}
