# CareshipCodingTest

<p>A simple Express.js server serving a basic html page which allows users to simulate withdrawing unlimited funds from an ATM machine dispensing 100, 50, 20, and 10 dollar notes. The ATM returns an array of individual bills (eg. [100.00, 100.00, 100.00] for a withdrawal of $300). A variety of errors cover invalid entries.</p>
<div align="center">
  <img src="https://s3.amazonaws.com/fluxlymoppings/pics/careshipatm.PNG" width="700px">
</div>
<p>Uses BigInteger.js by Peter Olson to handle very large numbers. A significant workaround was devised to deal with the maximum Array length in JavaScript; currently, if the requested count of individual bills in a given denomination is too large, or nearly too large, to be represented in a single array, an object of the form { denomination : count } is returned to the final array instead. Subsequent denominations (if their count is small enough, which in this case it always is) appear as usual in the final array.</p>

<p>Testing uses Mocha, Chai, and Babel for ES6 transpiling.</p>

<p>Use it on <a href="http://careship-atm.herokuapp.com/">Heroku</a>. To interact with the API endpoint endpoint directly, simply dispatch a get request to http://careship-atm.herokuapp.com/withdraw/*integeramounthere* </p>

