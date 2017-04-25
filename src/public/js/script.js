/* eslint-disable */

$(function(){
  if ('geolocation' in navigator) {
    $('[data-behaviour="geo-locate"]').on('click', function(evt) {
      evt.preventDefault();

      var form = $(this).closest('form');

      form.addClass('is-loading');

      var success = function(location) {
        var latitude = location.coords.latitude;
        var longitude = location.coords.longitude;

        $.get('http://postcodes.io/postcodes?lon=' + longitude + '&lat=' + latitude)
          .done(function(response, xhr, dfsdfdsf) {
            if (response.result) {
              var bestGuess = response.result[0].postcode;
              $('[name="postcode"]').val(bestGuess);              
            }
          })
          .always(function() {
            form.removeClass('is-loading');
          });
      };

      var error = function() {
        form.removeClass('is-loading');
      };

      navigator.geolocation.getCurrentPosition(success, error);
    });
  }

  $('form').on('submit', function(evt) {
    evt.preventDefault();

    var form = $(this);
    var postcode = $('[name="postcode"]').val();

    form.addClass('is-loading');

    $.post('/search', {
      postcode: postcode
    })
    .then(function(response) {
      var html = $(response);
      $('#result').html(html);
    })
    .always(function() {
      form.removeClass('is-loading');
    });
  });
});
