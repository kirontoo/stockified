function getCurrentDate() {
	const time = Date.now()
	const today = new Date( time );
	return today.toISOString()
}

module.exports = {
	getCurrentDate
}

