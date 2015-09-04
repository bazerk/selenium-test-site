(function(global) {

    var calcTemplate = _.template($('#calc-template').html());
    
    var CalcCreator = Backbone.View.extend({
        events: {
            'click button': 'createCalc',
        },
        initialize: function() {
            this.calcCount = 0;
            this.$count = this.$el.find('.num-calcs');
            this.$name = this.$el.find('#calc-name');
        },
        createCalc: function() {
            this.calcCount++;
            var calc = new CalcView({
                name: this.$name.val(),
            });
            calc.on('removed', this.decrementCount.bind(this));
            this.$count.text(this.calcCount);
        },
        decrementCount: function() {
            this.calcCount--;
            this.$count.text(this.calcCount);
        }
    });

    var CalcView = Backbone.View.extend({
        events: {
            'keydown .input-one': 'runCalc',
            'keydown .input-two': 'runCalc',
            'change .operator': 'runCalc',
            'click .delete-calc': 'delete'
        },
        initialize: function(opts) {
            var $calcHtml = $(calcTemplate({name: opts.name}));
            $('#calculators').append($calcHtml);
            this.setElement($calcHtml);
            this.$a = this.$el.find('.input-one');
            this.$b = this.$el.find('.input-two');
            this.$op = this.$el.find('.operator');
            this.$result = this.$el.find('.result');
        },
        runCalc: function() {
            var a = parseInt(this.$a.val());
            var b = parseInt(this.$b.val());
            this.$result.text('asdasd');
            switch (this.$op.val()) {
                case "add":
                    this.$result.val(a + b);
                    break;
                case "subtract":
                    this.$result.val(a - b);
                    break;
                case "multiply":
                    this.$result.val(a * b);
                    break;
            }
        },
        delete: function() {
            this.trigger('removed');
            this.remove();
        }
    });

    var buttonCreatorView = new CalcCreator({
        el: '#calc-creator',
        calculatorContainer: '#calculators'
    });

}(window));