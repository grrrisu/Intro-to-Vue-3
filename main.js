const app = Vue.createApp({
	// data: function () {
	data() {
		return {
			product: "Socks",
			description: "very comfortable socks that give warm feet",
			image: "./assets/images/socks_green.jpg",
			url: "http://www.socks.com",
			stock: 10,
			sale: true
		}
	}
});
