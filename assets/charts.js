/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {

    $('.chart-auto').each(function (i, obj) {
        var chart_id = obj.id

        d3.json(chart_id + '.json', function (error, data) {
            if (error)
                return console.warn(error);
            var img = $('#' + chart_id + ' img:first').hide()
            //$('#'+chart_id)[0]
            Plotly.newPlot(obj, data.data, data.layout, {displayModeBar: false});
            img.hide()
        })
        window.addEventListener('resize', function () {
            console.log('resize');
            $('.chart-auto').each(function (i, obj) {
                Plotly.Plots.resize(obj);
            })
        });
    });
});

