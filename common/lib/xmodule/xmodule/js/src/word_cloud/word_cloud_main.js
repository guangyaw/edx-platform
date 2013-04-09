(function (requirejs, require, define) {
define('WordCloudMain', ['logme'], function (logme) {

    var hash = 0;

WordCloudMain.prototype = {

'submitAnswer': function () {
    var _this, sendData;

    sendData = {
        'data': []
    };

    _this = this;

    console.log('submit answer');
    this.wordCloudEl.find('input.input-cloud').each(function(index, value){
        sendData.data.push($(value).val());
    });

    // Send the data to the server as an AJAX request. Attach a callback that will
    // be fired on server's response.
    $.postWithPrefix(
        _this.ajax_url + '/' + 'submit', JSON.stringify(sendData),
        function (response) {
            if (
                (response.hasOwnProperty('status') !== true) ||
                (typeof response.status !== 'string') ||
                (response.status.toLowerCase() !== 'success')) {
                    console.log('Bad response!');
                    return;
            }
            _this.showWordCloud(response);
        }
    );

}, // End-of: 'submitAnswer': function (answer, answerEl) {

'showWordCloud': function(response){
    var words,
        _this = this,
        fill = d3.scale.category20();

    console.log('Show word cloud with next:');
    console.log(response);

    inputSection = this.wordCloudEl.find('#input-cloud-section');
    resultSection = this.wordCloudEl.find('#result-cloud-section');

    resultSection.text('TODO: Word cloud canvas');
    inputSection.hide();
    resultSection.show();

    words = response.top_words;

    d3.layout.cloud().size([5, 5])
        .words(words)
        .rotate(function () {
            return ~~(Math.random() * 2) * 90;
        })
        .font('Impact')
        .fontSize(function (d) {
            return d.size;
        })
        .on('end', draw)
        .start();

    // End of executable code.
    return;

    function draw(words) {
        d3.select('.word_cloud_d3_' + _this.hash).append('svg')
            .attr('width', 500)
            .attr('height', 500)
            .append('g')
            // .attr('transform', 'translate(125,125)')
            .selectAll('text')
            .data(words)
            .enter().append('text')
            .style('font-size', function (d) {
                return d.size + 'px';
            })
            .style('font-family', 'Impact')
            .style('fill', function (d, i) {
                return fill(i);
            })
            .attr('text-anchor', 'middle')
            .attr('transform', function (d) {
                return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
            })
            .text(function (d) {
                return d.text;
            });
    }
}

}; // End-of: WordCloudMain.prototype = {

return WordCloudMain;

function WordCloudMain(el) {
    var _this;

    this.wordCloudEl = $(el).find('.word_cloud');
    if (this.wordCloudEl.length !== 1) {
        // We require one question DOM element.
        logme('ERROR: WordCloudMain constructor requires one word cloud DOM element.');

        return;
    }

    hash += 1;
    this.hash = hash;
    this.wordCloudEl.addClass('word_cloud_d3_' + this.hash);

    this.configJson = null;
    try {
        this.configJson = JSON.parse(this.wordCloudEl.find('.word_cloud_div').html());
    } catch (err) {
        logme('ERROR: Incorrect JSON config was given.');
        logme(err.message);

        return;
    }

    if (this.configJson.hasOwnProperty('status') && this.configJson.status === 'success') {
        this.showWordCloud(this.configJson);

        return;
    }

    this.inputSaveEl = $(el).find('input.save');

    // Get the URL to which we will post the users words.
    this.ajax_url = this.wordCloudEl.data('ajax-url');

    _this = this;
    this.inputSaveEl.on('click', function () {
        _this.submitAnswer();
    });

} // End-of: function WordCloudMain(el) {

}); // End-of: define('WordCloudMain', ['logme'], function (logme) {

// End-of: (function (requirejs, require, define) {
}(RequireJS.requirejs, RequireJS.require, RequireJS.define));
