		function run():void
		{
		   var  z = 10;
			console.log(z);
		}

		run();

		function go()
		{
			return "How are you";
		}

		let m = go();
		console.log(m);

		//let n="";
		let n = null;
		function come()
		{
			console.log(this.n);
		}

		come();

		function rate()
		{
		   /* return function give()
			{
				return "10 rupee";
			}
			*/
			let z = function ()
			{
				return "Rate is 10";
			}
			return z();
		}

		let r = rate();
		console.log(r);

		let t1: boolean = true;
		let t2: boolean = false;

		function sit( m:boolean)
		{
			if (m)
			{
				return m;
			}
			else
			{
				return "False";
		   }
		}

		let s1 = sit(t1);
		let s2 = sit(false);
		console.log(s1);
		console.log(s2);
		
Output:
       10
		VM609:10 How are you
		VM609:14 null
		VM609:29 Rate is 10
		VM609:42 true
		VM609:43 False
        
        
