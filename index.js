function smallestMissingPositive(nums) {
    if (nums.length === 0) {
        return 1;
    }

    // Solo positivos
    const positives = nums.filter((num) => num > 0);

    // Quitamos duplicados
    const uniquePositives = new Set(posites);

    // Ordenamos
    const sortedPositives = Array.from(uniquePositives).sort((a, b) => a - b);

    for (let i = 0; i < sortedPositives.length + 1; i++) {
        if (!sortedPositives.has(i)) {
            return i;
        }
    }
}

function maxAdjacent(array) {
    let maxSume = -Infinity;
    const { length } = array;

    for (let i = 0; i < length - 1; i++) {
        const sum = array[i] + array[i + 1];

        if (sum > maxSume) {
            maxSume = sum;
        }
    }

    return maxSume;
}

function twoNumsHitTarget(array, target) {
    const { length } = array;

    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (array[i] + array[j] === target) {
                return true;
            }
        }
    }

    return false;
}

function twoSum(nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                console.log([i, j]);
                return [i, j];
            }
        }
    }
}

var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }

    const reversed = parseInt(x.toString().split("").reverse().join(""));

    return x === reversed;
};

// console.log(isPalindrome(12321));

var romanToInt = function (s) {
    const data = [
        { symbol: "I", value: 1 },
        { symbol: "V", value: 5 },
        { symbol: "X", value: 10 },
        { symbol: "L", value: 50 },
        { symbol: "C", value: 100 },
        { symbol: "D", value: 500 },
        { symbol: "M", value: 1000 },
    ];

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const current = data.find((item) => item.symbol === s[i]);
        const next = data.find((item) => item.symbol === s[i + 1]);

        if (next && current.value < next.value) {
            result -= current.value;
        } else {
            result += current.value;
        }
    }

    return result;
};

// console.log(romanToInt("III"));

var longestCommonPrefix = function (strs) {
    if (strs == "") {
        return "";
    }

    if (strs.length == 1) {
        return strs[0];
    }

    if (strs[0].length == 0) {
        return strs[0];
    }

    // iterar sobre cada letra
    for (let i = 0; i < strs[0].length; i++) {
        // Iterar cada palabra
        for (let j = 0; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return strs[0].slice(0, i);
            }
        }

        if (i == strs[0].length - 1) {
            return strs[0];
        }
    }
};

// console.log(longestCommonPrefix(["flower","flower","flower","flower"])); // "fl"

var isValid = function (s) {
    const stack = [];

    for (let c of s) {
        if (c === "(" || c === "{" || c === "[") {
            stack.push(c);
        } else {
            // Check if is the last one o si coincide
            if (
                !stack.length ||
                (c === ")" && stack[stack.length - 1] !== "(") ||
                (c === "}" && stack[stack.length - 1] !== "{") ||
                (c === "]" && stack[stack.length - 1] !== "[")
            ) {
                return false;
            }

            stack.pop();
        }
    }

    return !stack.length;
};

// console.log(isValid("()")); // true
// console.log(isValid("()[]{}")); // true
// console.log(isValid("(]")); // false
// console.log(isValid("([)]")); // false
// console.log(isValid("{[]}")); // true
// console.log(isValid("{[])")); // false

var removeDuplicates = function (nums) {
    // [ 1, 1, 2]
    //   l
    //      r  r
    //   0  1  2

    let left = 0;

    for (let right = 1; right < nums.length; right++) {
        if (nums[right - 1] !== nums[right]) {
            left++;
            nums[left] = nums[right];
        }
    }

    return left + 1;
};

// console.log(removeDuplicates([1,1,2])); // [1, 2]

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = function (nums, val) {
    for (let index = nums.length - 1; index >= 0; index--) {
        if (nums[index] === val) {
            nums.splice(index, 1);
        }
    }

    return nums;
};

// console.log(removeElement([3,2,2,3], 3)); // [2, 2]
// console.log(removeElement([1, 2, 3], 2)); // [1, 3]

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // tomar el length de needle
    // iterar sobre haystack con el length
    // if haystack(i - length) === needle return i

    const end = needle.length;

    for (let start = 0; start < haystack.length; start++) {
        if (haystack.slice(start, end + start) === needle) {
            return start;
        }
    }

    return -1;
};

// console.log(strStr("sadbutsad", "sad")) // 0
// console.log(strStr("hello", "ll")); // 2

var searchInsert = function (nums, target) {
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];

        if (element == target) {
            return index;
        }

        if (element < target && nums[index + 1] > target) {
            return index + 1;
        }

        if (element > target) {
            return index;
        }

        // checar si es el ultimo elemento
        if (index == nums.length - 1 && element != target) {
            return index + 1;
        }
    }
};

// console.log(searchInsert([-1,3,5,6], 0)); // 1

/**
 * @param {string} s
 * @return {number}
 */
// Given a string s consisting of words and spaces, return the length of the last word in the string.
var lengthOfLastWord = function (s) {
    const array = s.trim().split(" ");

    const lengthOfLastWord = array[array.length - 1].length;

    return lengthOfLastWord;
};

// console.log(lengthOfLastWord("Hello World")); // 5

var plusOne1 = function (digits) {
    const lastDigitPlusOne = digits[digits.length - 1] + 1;

    // Checar si el resultado de la suma es > 9
    if (lastDigitPlusOne > 9) {
        const digitsToString = lastDigitPlusOne.toString().split("");

        digits.pop();

        for (const element of digitsToString) {
            digits.push(Number(element));
        }

        return digits;
    }

    digits[digits.length - 1] = lastDigitPlusOne;

    return digits;
};

var plusOne = function (digits) {
    // Convertir a BigInt y sumamos 1
    const nums = Number(digits.join("")) + 1;

    // Convertir a string y separar por cada digito
    return nums.toString().split("").map(Number);
};

// console.log(plusOne([1,2,3])); // 124
// console.log(plusOne([9])); // 1, 0
// console.log(plusOne([9, 9])); // 1, 0, 0

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    // Convert binary strings to BigInt
    // Added this to handle large numbers
    const sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);

    // Convert the sum back to a binary string
    return sum.toString(2);
};

// console.log(addBinary("11", "1")); // 100
// console.log(addBinary("1010", "1011")); // 10101

var mySqrt = function (x) {
    // return Math.floor(Math.sqrt(x))

    if (x < 2) {
        return x;
    }

    let left = 0;
    let right = x;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (mid * mid === x) {
            return mid;
        }

        if (mid * mid < x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return right - 1;
};

// console.log(mySqrt(4)); // 2
// console.log(mySqrt(81)); // 9

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let primero = 0;
    let segundo = 1;
    let sum = 0;

    for (let index = 0; index < n; index++) {
        sum = primero + segundo;

        primero = segundo;
        segundo = sum;
    }

    return sum;
};

// console.log(climbStairs(2)); // 2
// console.log(climbStairs(3)); // 3
// console.log(climbStairs(4)); // 5
// console.log(climbStairs(5)); // 8
// console.log(climbStairs(6)); // 13

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1) {
        return list2;
    }

    if (!list2) {
        return list1;
    }

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

// console.log(mergeTwoLists([1,2,4], [1,3,4])); // [1,1,2,3,4,4]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var deleteDuplicates = function (head) {
    let current = head;

    while (current && current.next) {
        // evaluar si el valor actual es igual al siguiente
        if (current.val === current.next.val) {
            // borrar el nodo siguiente
            // Aquí lo que estás haciendo es decir que el nodo actual (current) ya no debe apuntar a current.next,
            // sino que debe saltarse un nodo y apuntar a current.next.next.
            current.next = current.next.next;
        } else {
            // avanzar al siguiente nodo
            current = current.next;
        }
    }

    return head;
};

const node1 = new ListNode(1);
const node2 = new ListNode(1);
const node3 = new ListNode(2);

node1.next = node2;
node2.next = node3;

// console.log(node1); // 1 -> 1

// console.log(deleteDuplicates(node1)); // 1, 2

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    return nums1;
};

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1,2,2,3,5,6]

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3)
);

const root2 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3)
);

function levelOrderTraversal(root) {
    if (!root) return;

    const queue = [root];
    const result = [];

    while (queue.length > 0) {
        const node = queue.shift(); // get the first element

        result.push(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return result;
}

// console.log(levelOrderTraversal(root));

var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// console.log(isSameTree(root, root2));

// var inorderTraversal = function (root) {

//     if (!root) return [];

//     const stack = [];
//     const result = [];

//     let current = root;

//     while (current || stack.length) {
//         while (current) {
//             stack.push(current);
//             current = current.left;
//         }

//         current = stack.pop();
//         result.push(current.val);
//         current = current.right;
//     }

//     return result;

// };

var inorderTraversal = function (root) {
    const result = [];

    function traverse(root) {
        if (!root) return;

        traverse(root.left);
        result.push(root.val);
        traverse(root.right);
    }

    traverse(root);

    return result;
};

const inorderTraversalTree = new TreeNode(
    1,
    null,
    new TreeNode(2, new TreeNode(3))
);

// [1,2,3,4,5,null,8,null,null,6,7,9]
const inorderTraversalTreeLarge = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(4),
        new TreeNode(5, new TreeNode(6), new TreeNode(7))
    ),
    new TreeNode(3, null, new TreeNode(8, new TreeNode(9)))
);

// console.log(inorderTraversal(inorderTraversalTreeLarge));

const symetricTree = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

var isSymmetric = function (root) {
    if (!root) return true;

    function isMirror(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;

        return (
            left.val === right.val &&
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left)
        );
    }

    return isMirror(root.left, root.right);
};

// console.log(isSymmetric(symetricTree));

var maxDepth = function (root) {
    if (!root) return 0;

    const maxDepthL = maxDepth(root.left);
    const maxDepthR = maxDepth(root.right);

    return 1 + Math.max(maxDepthL, maxDepthR);
};

// [3,9,20,null,null,15,7]
const maxDepthTree = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

// console.log(maxDepth(maxDepthTree)); // 3
function sortedArrayToBST(nums) {
    // Base case: if the array is empty, return null
    if (nums.length === 0) return null;

    // Find the middle element
    const mid = Math.floor(nums.length / 2);

    // Create the root node with the middle element
    const root = new TreeNode(nums[mid]);

    // Recursively build the left and right subtrees
    root.left = sortedArrayToBST(nums.slice(0, mid)); // Left half
    root.right = sortedArrayToBST(nums.slice(mid + 1)); // Right half

    return root;
}

// console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));

var minDepth = function (root) {
    if (!root) return 0;

    const minDepthL = minDepth(root.left);
    const minDepthR = minDepth(root.right);

    const leaf = !root.left && !root.right;
    if (leaf) return 1;

    if (!root.left) return 1 + minDepthR;
    if (!root.right) return 1 + minDepthL;

    return 1 + Math.min(minDepthL, minDepthR);
};

function isBalanced(root) {
    // Helper function to get the height of the tree
    function getHeight(node) {
        if (node === null) return 0;

        const leftHeight = getHeight(node.left);
        if (leftHeight === -1) return -1; // If left subtree is not balanced, return -1

        const rightHeight = getHeight(node.right);
        if (rightHeight === -1) return -1; // If right subtree is not balanced, return -1

        // If the current node is unbalanced, return -1
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        // Return the height of the current node
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Start the check from the root
    return getHeight(root) !== -1;
}

// console.log(sortedArrayToBST([1, 3]));

var hasPathSum0 = function (root, targetSum) {
    if (!root) {
        return false;
    }

    let result = false;

    function traverse(root, sum) {
        // Si llegas a un nodo sin hijos (un leaf), tienes que verificar si la suma + el valor del nodo es igual a targetSum.
        if (!root.left && !root.right) {
            console.log("Leaf", sum + root.val == targetSum);

            if (sum + root.val == targetSum) {
                result = true;
            }

            return sum + root.val == targetSum;
        }

        console.log(sum);

        const newSum = sum + root.val;
        // Vamos pasando la suma de los nodos
        if (root.left) traverse(root.left, newSum);
        if (root.right) traverse(root.right, newSum);
    }

    traverse(root, 0);

    return result;
};

function hasPathSum(root, targetSum) {
    // Caso base: Si el nodo actual es nulo, no hay camino, retorna falso
    if (root === null) return false;

    // Si llegamos a una hoja (nodo sin hijos)
    if (root.left === null && root.right === null) {
        // Verificamos si la suma restante es igual al valor de ese nodo
        return root.val === targetSum;
    }

    // Restamos el valor del nodo actual de la suma restante
    const remainingSum = targetSum - root.val;

    // Llamada recursiva en los hijos izquierdo y derecho
    // Retorna true si encontramos un camino en cualquier subárbol
    return (
        hasPathSum(root.left, remainingSum) ||
        hasPathSum(root.right, remainingSum)
    );
}

const hasPathSumTree = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5, new TreeNode(10))),
    new TreeNode(3)
);

// console.log(hasPathSum(hasPathSumTree, 7));

function minimumSwaps(brackets) {

    let open = 0, close = 0;

    for (let bracket of brackets){

        console.log("open", open);
        console.log("close", close);

        if(bracket == "("){
            open++;
        }
        else {
            if (open > 0){
                open--
            }else{
                close++
            }
        }
    }

    if (open !== close){
        return -1 
    }

    return Math.floor(close / 2)
   
}

// Example usage:
// console.log(minimumSwaps("())")); // -1
// console.log(minimumSwaps("())(")); // 1

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    // casos base

    let result = [];

    if (numRows == 1) {
        result.push([1])
        return result;
    }
    if (numRows == 2) {
        result.push([1, 1])
        return result;
    }

    result.push([1]);
    result.push([1, 1])

    let lastNumbers = [1, 1];
    let nextNumbers = [];

    // index es el numero de filas en cada row
    for (let index = 3; index <= numRows; index++) {

        // usar tecnica de ventanas
        for (let index = 0; index < lastNumbers.length; index++) {
            if (lastNumbers[index + 1]) {
                nextNumbers.push(lastNumbers[index] + lastNumbers[index + 1]);
            }
        }

        // 1 siempre va a ser el primer y ultimo numero
        nextNumbers.unshift(1);
        nextNumbers.push(1);

        result.push(nextNumbers)

        lastNumbers = nextNumbers
        nextNumbers = []
    }

    return result;
};

// console.log(generate(1));
// console.log(generate(2));
// console.log(generate(3));
// console.log(generate(4));
// console.log(generate(5));

var getRow = function (numRows) {
    // casos base

    let result = [];

    if (numRows == 1) {
        result.push([1])
        result.push([1, 1])
        return result[numRows];
    }
    if (numRows == 2) {
        result.push([1])
        result.push([1, 1])
        result.push([1, 2, 1])
        return result[numRows];
    }

    result.push([1]);
    result.push([1, 1])

    let lastNumbers = [1, 1];
    let nextNumbers = [];

    // index es el numero de filas en cada row
    for (let index = 3; index <= numRows + 1; index++) {

        // usar tecnica de ventanas
        for (let index = 0; index < lastNumbers.length; index++) {
            if (lastNumbers[index + 1]) {
                nextNumbers.push(lastNumbers[index] + lastNumbers[index + 1]);
            }
        }

        // 1 siempre va a ser el primer y ultimo numero
        nextNumbers.unshift(1);
        nextNumbers.push(1);

        result.push(nextNumbers)

        lastNumbers = nextNumbers
        nextNumbers = []
    }

    return result[numRows];
};

// console.log(getRow(3));

// var maxProfit = function (prices) {
//     let minPrice = Infinity;
//     let maxProfit = 0;

//     for (let price of prices) {
//         if (price < minPrice) {
//             minPrice = price;
//         } else if (price - minPrice > maxProfit) {
//             maxProfit = price - minPrice;
//         }
//     }

//     return maxProfit;
    
// }

const maxProfit = function (arr) {
    let min = arr[0]; let result = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else {
            result = Math.max(result, arr[i] - min);
        }
    }
    return result
};

// console.log(maxProfit([7,1,5,3,6,4])); // 5
// console.log(maxProfit([7,6,4,3,1])); // 0

var isPalindrome2 = function (s) {
    // Remove non-alphanumeric characters
    s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

    console.log(s);

    // Check if the string is a palindrome
    return s === s.split("").reverse().join("");

}

// console.log(isPalindrome2("A man, a plan, a canal: Panama")); // true

var numberOfPermutations = function (n, r) {
    if (n < r) {
        return 0;
    }

    let result = 1;

    for (let i = 0; i < r; i++) {
        result *= n - i;
    }

    return result;
}

console.log(numberOfPermutations(7, 2)); // 60