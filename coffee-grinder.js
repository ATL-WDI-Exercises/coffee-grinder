/* There Be Dragons! ---------------------------------
   ___________________________________________________
   @@@@@@@@@@@@@@@@@@@@@**^^""~~~"^@@^*@*@@**@@@@@@@@@
   @@@@@@@@@@@@@*^^'"~   , - ' '; ,@@b. '  -e@@@@@@@@@
   @@@@@@@@*^"~      . '     . ' ,@@@@(  e@*@@@@@@@@@@
   @@@@@^~         .       .   ' @@@@@@, ~^@@@@@@@@@@@
   @@@~ ,e**@@*e,  ,e**e, .    ' '@@@@@@e,  "*@@@@@'^@
   @',e@@@@@@@@@@ e@@@@@@       ' '*@@@@@@    @@@'   0
   @@@@@@@@@@@@@@@@@@@@@',e,     ;  ~^*^'    ;^~   ' 0
   @@@@@@@@@@@@@@@^""^@@e@@@   .'           ,'   .'  @
   @@@@@@@@@@@@@@'    '@@@@@ '         ,  ,e'  .    ;@
   @@@@@@@@@@@@@' ,&&,  ^@*'     ,  .  i^"@e, ,e@e  @@
   @@@@@@@@@@@@' ,@@@@,          ;  ,& !,,@@@e@@@@ e@@
   @@@@@,~*@@*' ,@@@@@@e,   ',   e^~^@,   ~'@@@@@@,@@@
   @@@@@@, ~" ,e@@@@@@@@@*e*@*  ,@e  @@""@e,,@@@@@@@@@
   @@@@@@@@ee@@@@@@@@@@@@@@@" ,e@' ,e@' e@@@@@@@@@@@@@
   @@@@@@@@@@@@@@@@@@@@@@@@" ,@" ,e@@e,,@@@@@@@@@@@@@@
   @@@@@@@@@@@@@@@@@@@@@@@~ ,@@@,,0@@@@@@@@@@@@@@@@@@@
   @@@@@@@@@@@@@@@@@@@@@@@@,,@@@@@@@@@@@@@@@@@@@@@@@@@
   """"""""""""""""""""""""""""""""""""""""""""""""""
   Explore at your own risk!
*/

var CoffeeGrinder = function() {
  this.current = 0;
  this.exercises = document.getElementsByClassName('exercise');
  this.exercises[this.current].className = 'exercise exercise-current';
  this.bean_counter = document.getElementById('bean_counter');
  this.bean_counter.innerHTML = (this.current+1).toString() + (this.current === 0 ? ' Bean' : ' Beans');
}
CoffeeGrinder.prototype.next = function() {
  if (this.exercises[this.current].validate == undefined || this.exercises[this.current].validate()) {
    this.exercises[this.current].className = 'exercise exercise-finished';
    this.current ++;
    this.bean_counter.innerHTML = (this.current+1).toString() + (this.current === 0 ? ' Bean' : ' Beans');
    this.exercises[this.current].className = 'exercise exercise-current';
  }
};
window.onload = function() {
  window.coffee_grinder = new CoffeeGrinder;
  var exercise_1 = coffee_grinder.exercises[0];
  exercise_1.validate = function() {
    var solution_script = exercise_1.getElementsByTagName('textarea')[0].value;
    var notice = exercise_1.getElementsByClassName('notice')[0];
    try { eval(solution_script); }
    catch(error) {
      notice.innerHTML = error.message;
      notice.style.display = 'block';
      return false;
    }
    if (typeof window.price !== 'undefined') {
      window.price = undefined;
      notice.innerHTML = 'price hit global scope, be sure you define it with <code>var</code>';
      notice.style.display = 'block';
      return false;
    }
    if (typeof price === 'undefined') {
      notice.innerHTML = 'price is still undefined - did you define it?';
      notice.style.display = 'block';
      return false;
    } else if (price != 9.95) {
      notice.innerHTML = 'the value of price is incorrect - did you set it to 9.95?';
      notice.style.display = 'block';
      return false;
    } else {
      return true;
    }
  };
  var exercise_2 = coffee_grinder.exercises[1];
  exercise_2.validate = function() {
    var solution_script = exercise_2.getElementsByTagName('textarea')[0].value;
    var notice = exercise_2.getElementsByClassName('notice')[0];
    var alert_message = false;
    var alert = function(msg) { alert_message = msg; };
    var price = 9.95;
    try { eval(solution_script); }
    catch(error) {
      notice.innerHTML = error.message;
      notice.style.display = 'block';
      return false;
    }
    if (price !== 9.95) {
      notice.innerHTML = "Oops, you changed <code>price</code>. Make sure you are using <code>==</code> instead of <code>=</code>";
      notice.style.display = 'block';
      return false;
    }
    if (alert_message != 'The price is just right') {
      notice.innerHTML = "I don't see <code>alert('The price is just right')</code>, it should happen if <code>price</code> is 9.95";
      notice.style.display = 'block';
      return false;
    }
    price = 8.95;
    alert_message = false;
    eval(solution_script);
    if (alert_message == 'The price is just right') {
      notice.innerHTML = 'You should only <code>alert</code> when the price is exactly 9.95';
      notice.style.display = 'block';
      return false;
    }
    return true;
  };
  var exercise_3 = coffee_grinder.exercises[2];
  exercise_3.validate = function() {
    var solution_script = exercise_3.getElementsByTagName('textarea')[0].value;
    var notice = exercise_3.getElementsByClassName('notice')[0];
    var result;
    try { eval(solution_script); }
    catch(error) {
      notice.innerHTML = error.message;
      notice.style.display = 'block';
      return false;
    }
    if (solution_script.indexOf('8') != -1) {
      notice.innerHTML = 'You should not have the number 8 in your solution!';
      notice.style.display = 'block';
      return false;
    }
    if (result != 8) {
      notice.innerHTML = '<code>result</code> was not the correct value (8)';
      notice.style.display = 'block';
      return false;
    }
    return true;
  };
  var exercise_4 = coffee_grinder.exercises[3];
  exercise_4.validate = function() {
    var solution_script = exercise_4.getElementsByTagName('textarea')[0].value;
    var notice = exercise_4.getElementsByClassName('notice')[0];
    var first_name = 'Jaden';
    var last_name = 'Carver';
    try {
      eval(solution_script);
      if (full_name != 'Jaden Carver') {
        notice.innerHTML = "<code>full_name</code> is not <code>Jaden Carver</code>, please try again.";
        notice.style.display = 'block';
        return false;
      }
    }
    catch(error) {
      notice.innerHTML = error.message;
      notice.style.display = 'block';
      return false;
    }
    return true;
  };
  var exercise_5 = coffee_grinder.exercises[4];
  exercise_5.validate = function() {
    var solution_script = exercise_5.getElementsByTagName('textarea')[0].value;
    var notice = exercise_5.getElementsByClassName('notice')[0];
    var full_name = 'Jaden Carver';
    var name_parts = [];
    try { eval(solution_script); }
    catch(error) {
      notice.innerHTML = error.message;
      notice.style.display = 'block';
      return false;
    }
    if (name_parts[0] !== 'Jaden' || name_parts[1] !== 'Carver') {
      notice.innerHTML = "<code>name_parts</code> is not <code>['Jaden', 'Carver']</code>, please try again.";
      notice.style.display = 'block';
      return false;
    }
    return true;
  };
  var exercise_6 = coffee_grinder.exercises[5];
  exercise_6.validate = function() {
    var solution_script = exercise_6.getElementsByTagName('textarea')[0].value;
    var notice = exercise_6.getElementsByClassName('notice')[0];
    var result = undefined;
    try {
      eval(solution_script);
      if (typeof result !== 'object') {
        notice.innerHTML = "You didn't set <code>result</code> to an Array. Try again.";
        notice.style.display = 'block';
        return false
      }
      if (result.length != 3) {
        notice.innerHTML = "There should be three primary colors. (red, yellow and blue)";
        notice.style.display = 'block';
        return false
      }
      if (result.indexOf('red') === -1 || result.indexOf('yellow') === -1 || result.indexOf('blue') === -1) {
        notice.innerHTML = "Hmm, those aren't the primary colors that I'm familiar with!";
        notice.style.display = 'block';
        return false
      }
    }
    catch(error) {
      notice.innerHTML = error.message;
      notice.style.display = 'block';
      return false;
    }
    return true;
  };
  var exercise_7 = coffee_grinder.exercises[6];
  exercise_7.validate = function() {
    var solution_script = exercise_6.getElementsByTagName('textarea')[0].value;
    var notice = exercise_6.getElementsByClassName('notice')[0];
    var result = [];
    try {
      eval(solution_script);
      if (result.indexOf('red') === -1 || result.indexOf('yellow') === -1 || result.indexOf('blue') === -1) {
        notice.innerHTML = "Hmm, those aren't the primary colors that I'm familiar with!";
        notice.style.display = 'block';
        return false
      }
    }
    catch(error) {
      notice.innerHTML = error.message;
      notice.style.display = 'block';
      return false;
    }
    return true;
  };
  var exercise_7 = coffee_grinder.exercises[6];
  exercise_7.validate = function() {
    var solution_script = exercise_7.getElementsByTagName('textarea')[0].value;
    var notice = exercise_7.getElementsByClassName('notice')[0];
    var first, last, index;
    var students = [
      'Kevin','Andrew','Caleb','Allan','Colin','Jonathan','Robin','Sage','Sonya','Sofia','George',
      'Michael','Jonathan','Tayef','Tamara','Sam','Christopher','Chelsea','Jesse','Zack','Akosua',
      'Vienne','Izabella','Dan','Alex','Anya','Mike','Remina','Jessie'
    ]
    try { eval(solution_script); }
    catch(error) {
      notice.innerHTML = error.message;
      notice.style.display = 'block';
      return false;
    }
    if (students[0] === 'Kevin') {
      notice.innerHTML = "You need to sort `students` first!";
      notice.style.display = 'block';
      return false
    }
    if (last !== 'Zack') {
      notice.innerHTML = "Good Job, now you should set <code>last</code> to the last student, try again";
      notice.style.display = 'block';
      return false
    }
    if (first !== 'Akosua') {
      notice.innerHTML = "Good Job, but now you have the wrong student for <code>first</code>, try again";
      notice.style.display = 'block';
      return false
    }
    if (index !== 8) {
      console.log(index);
      notice.innerHTML = "Step 3: Wrong <code>index</code> for Dan, try again";
      notice.style.display = 'block';
      return false
    }
    return true;
  }
  var exercise_8 = coffee_grinder.exercises[7];
  exercise_8.validate = function() {
    var solution_script = exercise_8.getElementsByTagName('textarea')[0].value;
    var notice = exercise_8.getElementsByClassName('notice')[0];
    var result;
    var price = 42.15645;
    try { eval(solution_script); }
    catch(error) {
      notice.innerHTML = error.message;
      notice.style.display = 'block';
      return false;
    }
    if (result !== 42.16) {
      notice.innerHTML = "Hmm. That isn't the right result, try again.";
      notice.style.display = 'block';
      return false;
    }
    return true;
  }
  var exercise_9 = coffee_grinder.exercises[8];
  exercise_9.validate = function() {
    var solution_script = exercise_9.getElementsByTagName('textarea')[0].value;
    var notice = exercise_9.getElementsByClassName('notice')[0];
    var alpha_sort = function(){};
    try {
      eval(solution_script);
      if (alpha_sort('gfedcba') === undefined) {
          notice.innerHTML = "<code>alpha_sort</code> didn't return anything. Did you call <code>return</code>?";
          notice.style.display = 'block';
          return false;
        }
      if (alpha_sort('gfedcba') !== 'abcdefg') {
        notice.innerHTML = "<code>alpha_sort</code> didn't work as expected. Try again";
        notice.style.display = 'block';
        return false;
      }
    }
    catch(error) {
      notice.innerHTML = error.message;
      notice.style.display = 'block';
      return false;
    }
    return true;
  }
};
