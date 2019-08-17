<?php
    // echo 'hello world!'

    $x = 5;
    $y = 6;
    $z = $x + $y;
    echo $z;

    echo PHP_EOL;

    // global 关键字用于函数内访问全局变量。

    function myTest() {
    	global $x,$y;
    }

    // PHP 将所有全局变量存储在一个名为 $GLOBALS[index] 的数组中。 index 保存变量的名称。这个数组可以在函数内部访问，也可以直接用来更新全局变量。

    function myTest2 () {
    	$GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
    }

    // 当一个函数完成时，它的所有变量通常都会被删除。然而，有时候您希望某个局部变量不要被删除。
	// 要做到这一点，请在您第一次声明变量时使用 static 关键字：

	function myTest3 () {
		static $a = 1;
	}
	echo 'x = {$x}';
	print 'hello world!';

	// echo - 可以输出一个或多个字符串，输出速度比print快
	// print - 只允许输出一个字符串，返回值总为1



	// EOF
	echo <<<EOF
		<h1>My first title</h1>
		<p>text text text</p>
EOF;

	// php 5 数据类型
		// String
		// Integer 
		// Float 
		// Boolean
		// Array 
		// Object 
		// NULL 

	class car {
		var $color;
		function _constructor ($color = 'green') {
			$this->color = $color;
		}
		function what_color () {
			return $this->color;
		}
	}

	// php类型比较
	// == 只比较值
	// ===  比较值和类型
	
	// 常量
	define('name', 'value');
	echo name;

	// 字符串  并置运算符(.)将两个字符串连接起来
	$str = 'string';
	$str1 = 'string1';
	echo $str . " " . $str1;

	// strlen()函数
	echo strlen($str);

	echo PHP_EOL;
	// strpos()
	echo strpos($str, 'i');

	// <>   运算符  不等于

	// 逻辑运算符
	// and  &&
	// or   ||
	// xor  异或   即双方仅有一个为true  则为true
	// ！非

	// 组合比较符 / 太空船操作符   <=>

	// 如果 $a > $b, 则 $c 的值为 1。
	// 如果 $a == $b, 则 $c 的值为 0。
	// 如果 $a < $b, 则 $c 的值为 -1。

	// 优先级： &&  >  =  >  and
	// 优先级： ||  >  =  >  or

	// 数组
	// array()创建
	echo "<br>";
	$arr = array('a','b','c');
	echo 'I like'.$arr[0].",".$arr[1].",".$arr[2].".";
	echo "<br>";
	// count()获取数组长度
	echo count($arr);
	echo "<br>";

	// 遍历数组
	$arrLength = count($arr);

	for($x=0;$x<$arrLength;$x++){
		echo $arr[$x];
		echo "<br>";
	}

	// 关联数组
	$age = array("Peter"=>"35","Ben"=>"33","Joe"=>"43");
	echo "<br>";
	echo $age['Ben'];

	// 数组排序
	$num = array(13,4,33,31,6,2,3,1,5,3);
	// sort($num);

	// 超级全局变量
	// $GLOBALS
	// $_SERVER
	// $_REQUEST
	// $_POST
	// $_GET
	// $_FILES
	// $_ENV
	// $_COOKIE
	// $_SESSION

	// 魔术常量
	// _LINE_  当前行号
	// _FILE_  文件的完整路径和文件名
	// _DIR_  文件所在目录
	// _FUNCTION_  函数名
	// _CLASS_  类名
	// _TRAIT_  trait的名字  代码复用的方法	
	// 等

	// 命名空间
	// namespace myProject{}
	// 命名空间必须是程序脚本的第一条语句


?>