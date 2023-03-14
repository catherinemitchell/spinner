const spinnerChars = ['\r|  ', '\r/  ', '\r-  ', '\r|  ', '\n']

let delay = 100

for (let character of spinnerChars) {
  setTimeout(() => {
  process.stdout.write(character);
}, delay);
delay += 200
} 
