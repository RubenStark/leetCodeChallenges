package main

import "fmt"

func Fibonacci(len int) float64 {

	var primero float64 = 0
	var segundo float64 = 1
	var sum float64 = 0

	for i := 1; i <= len; i++ {

		sum = primero + segundo
		primero = segundo
		segundo = sum

	}

	return sum
}

func TwoNumsHitTarget(array []int, target int) bool {

	for i, _ := range array {
		for j, _ := range array {
			if array[i]+array[j] == target {
				return true
			}
		}
	}

	return false

}

func IsPalindrome(word string) bool {

	var reversedWord string = ""

	for i := len(word) - 1; i >= 0; i-- {
		reversedWord += string(word[i])
	}

	if word == reversedWord {
		return true
	}

	return false

}

func isValid(s string) bool {

	if len(s)%2 != 0 {
		return false
	}

	var stack []string

	for i := 0; i < len(s); i++ {
		if isOpeningBracket(s[i]) {
			stack = append(stack, string(s[i]))
		} else {
			if len(stack) == 0 || !isMatchingBracket(stack[len(stack)-1], s[i]) {
				return false
			}
			stack = stack[:len(stack)-1]
		}
	}

	return len(stack) == 0
}

func isOpeningBracket(c byte) bool {
	return c == '(' || c == '[' || c == '{'
}

func isMatchingBracket(opening string, closing byte) bool {
	return (opening == "(" && closing == ')') ||
		(opening == "[" && closing == ']') ||
		(opening == "{" && closing == '}')
}

func singleNumber(nums []int) int {

	var single int = 0

	for _, num := range nums {
		single ^= num
	}

	return single

}

func Factorial(n int) int {

	if n == 0 {
		return 1
	} else {
		return n * Factorial(n-1)
	}

}

func RomanToInt(s string) int {

	m := make(map[string]int)

	m["I"] = 1
	m["V"] = 5
	m["X"] = 10
	m["L"] = 50
	m["C"] = 100
	m["D"] = 500
	m["M"] = 1000

	result := 0

	for i := 0; i < len(s); i++ {

		current := m[string(s[i])]

		if i+1 < len(s) {
			next := m[string(s[i+1])]
			if current < next {
				result -= current
			} else {
				result += current
			}
		} else {
			result += current
		}

	}

	return result

}

func Merge(nums1 []int, m int, nums2 []int, n int) []int {

	i := m - 1
	j := n - 1
	k := m + n - 1

	for i >= 0 && j >= 0 {

		if int(nums1[i]) > int(nums2[j]) {
			nums1[k] = nums1[i]
			i--
		} else {
			nums1[k] = nums2[j]
			j--
		}
		k--

	}

	return nums1

}

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isSameTree(p *TreeNode, q *TreeNode) bool {

	if p == nil && q == nil {
		return true
	}

	if p == nil || q == nil {
		return false
	}

	if p.Val != q.Val {
		return false
	}

	return isSameTree(p.Left, q.Left) == isSameTree(p.Right, q.Right)

}

func levelOrderTraversal(root *TreeNode) []int {
	if root == nil {
		return nil
	}

	queue := []*TreeNode{root}

	values := []int{}

	for len(queue) > 0 {
		node := queue[0]
		queue = queue[1:]
		values = append(values, node.Val)

		if node.Left != nil {
			queue = append(queue, node.Left)
		}
		if node.Right != nil {
			queue = append(queue, node.Right)
		}
	}

	return values
}

func main() {
	// fmt.Println(Fibonacci(10))                                        // 89
	// fmt.Println(TwoNumsHitTarget([]int{1, 2, 3, 4, 5}, 50))           // false
	// fmt.Println(IsPalindrome("anitalavalatina"))                      // true
	// fmt.Println(isValid("[{()}]"))                                    //true
	// fmt.Println(singleNumber([]int{1, 2, 3, 4, 5, 1, 2, 3, 4}))       // 5
	// fmt.Println(Factorial(4))                                         // 24
	// fmt.Println(RomanToInt("XVII"))                                   // 17
	// fmt.Println(Merge([]int{1, 2, 3, 0, 0, 0}, 3, []int{2, 5, 6}, 3)) // [1 2 2 3 5 6]

	// Tree
	p := &TreeNode{Val: 1, Left: &TreeNode{Val: 2}, Right: &TreeNode{Val: 3}}
	// q := &TreeNode{Val: 1, Left: &TreeNode{Val: 2}, Right: &TreeNode{Val: 3}}

	// fmt.Println(isSameTree(p, q)) // true

	fmt.Println(levelOrderTraversal(p)) // [1 2 3]
}
