import consumer from "./consumer"

consumer.subscriptions.create("ProductsChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
  	document.getElementsByTagName("main")[0].innerHTML = data['html'];
	document.getElementById("product-" + data['id']).classList.add('product-highlight');
  }
});
