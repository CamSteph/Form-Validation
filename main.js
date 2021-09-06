var reformatNumber = function(number) {
    const reformat = (start, size, end=number.length) => {
      let ans = '';
      for (let i = start; i < end; i += size) {
        ans += number.slice(i, i + size);
        if (i < end - size) ans += '-';
      }
      return ans;
    }
    
    number = number.replace(/\D/g, '');
    let ans = '', 
        whole = Math.floor(number.length / 3),
        remain = number.length % 3;
    if (remain == 1) whole -= 1;
    
    const threes = reformat(0, 3, 3 * whole);
    const rest = reformat(3 * whole, 2);
    
    if (threes && rest) return threes + '-' + rest;
    return threes ? threes : rest;
  };