const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default {
	name: 'Time',
	props: {
		name: String,
	},
	data() {
		return {
			timeHours: new Date().getHours(),
			timeMinutes: new Date().getMinutes().toString()
				.padStart(2, '0'),
			greeting: (new Date().getHours() >= 20 && 'Good night') || (new Date().getHours() >= 17 && 'Good evening') || (new Date().getHours() >= 13 && 'Good afternoon') || 'Good morning',
			date: new Date().toLocaleDateString('en-US', opts),
		};
	},
	beforeDestroy() {
		clearInterval(this._interval);
	},
	beforeMount() {
		this.startInterval();
	},
	methods: {
		startInterval() {
			this._interval = setInterval(() => {
				const now = new Date();
				const hour = now.getHours();
				const minutes = now.getMinutes();
				let greeting = 'Good morning';
				if (hour > 13) greeting = 'Good afternoon';
				if (hour >= 17) greeting = 'Good evening';
				if (hour >= 20) greeting = 'Good night';
				this.timeHours = hour.toString();
				this.greeting = greeting;
				this.timeMinutes = minutes.toString().padStart(2, '0');
				this.date = now.toLocaleDateString('en-US', opts);
				document.title = greeting;
			});
		},
	},
};