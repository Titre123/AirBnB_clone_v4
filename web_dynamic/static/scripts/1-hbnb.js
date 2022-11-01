window.addEventListener('load', function() {
  let vary = []
  const inps = $('input:checkbox');
  for (const input in inps) {
    if (input.attr('checked') == true) {
      vary.push(input.attr('data-id'));
    }
    else {
      const data = input.attr('data-id');
      const ind = vary.indexOf(data);
      vary.splice(ind,1);
    }
  }
  const respo = vary.join(', ')
  if (vary.length > 0) {
    $('amenities h4').html(respo);
  }
  else{
    $('amenities h4').html("&nbsp;");
  }
})
