function getFibonacci(n)
{
  if (n===1) 
  {
    return [0,1];
    if (typeof n != 'number') return 'not allowed';
        if (n<1 || n > 10) return 'not allowed';
  } 
  else 
  {
    var s = getFibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};



 console.log(getFibonacci(5));


