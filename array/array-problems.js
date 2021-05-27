var inputObj = {
  name: "jane",
  last_name: "doe",
  profession: "engineer",
  characteristics: {
    intelligent: true,
    punctual: false,
    experience: {
      "2012": "college passout",
      "2014": "mba passout",
      "2016": "employed",
      "4040": {
        name: "navjot",
        age: 20
      }
    }
  }
};

var flattenObject = {};
function flatten(obj, prevKey) {
  Object.keys(obj).forEach(key => {
    if (obj[key] instanceof Object) {
      flatten(obj[key], prevKey ? prevKey + key + "." : key + ".");
    } else {
      flattenObject[prevKey + key] = obj[key];
    }
  });
}
// flatten(inputObj, "");
// console.log(flattenObject);

// {
//   'name': 'jane',
//   'last_name': 'doe',
//   'profession': 'engineer',
//   'characteristics.intelligent': true,
//   'characteristics.punctual': false,
//   'characteristics.experience.2012': 'college passout',
//   'characteristics.experience.2014': 'mba passout',
//   'characteristics.experience.2016': 'employed'
// }

function sum(a, b) {
  console.log("Sum is: ", a + b);
}

Function.prototype.callAfter = function() {
  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments);
    var time = args.splice(0, 1);
    setTimeout(() => {
      this.apply(null, args);
    }, time);
  }
};
sum.callAfter(1000, 8, 7);

function countSibling(node, i) {
  if(node.nextElementSibling) {
    i = i +1;
    return countSibling(node.nextElementSibling, i);
  }
  return i;
}
function generateSelector(DOMNode) {
  var node = DOMNode;
  if(node.id) {
    return "#" + node.id;
  } else if(node.className) {
    var unique = '';
    node.className.split(' ').forEach(cls =>{
      if(document.getElementsByClassName(cls).length === 1) {
        unique = '.' + cls;
        break;
      }
    });
    if(!unique) {
      var sibling = countSibling(node);
      var nthPosition = node.parentElement.childElementCount - sibling;
      unique = node.tagName + ':nth-of-type(' + nthPosition + ')';
    }
    return unique;
  }
}
