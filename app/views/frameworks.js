import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function () {
		this.insertGoogleTrend();
	},

	insertGoogleTrend: function() {
		this.$('.gtrend').html('<iframe width="940" height="340" src="//www.google.com/trends/fetchComponent?hl\75en-US\46cat\0750-5\46q\75angular+js,+backbone+js,+ember+js,+knockout+js\46date\0751/2010+72m\46cmpt\75q\46tz\46tz\46content\0751\46cid\75TIMESERIES_GRAPH_AVERAGES_CHART\46export\0755\46w\075940\46h\075500" style="border: none;"></iframe>');
	}
});
