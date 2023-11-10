function mincost(arr)
{ 
//write your code here
// return the min cost
	let ans=0;
	while(arr.length>=2){
		arr.sort((a,b)=>{
			if(a<b){
				return -1;
			}
			else if(a>b){
				return 1;
			}
			else{
				return 0;
			}
		})
		ans+=arr[0]+arr[1];
		arr.push(arr[0]+arr[1]);
		arr.splice(0,2);
	}
	  return ans;
}

module.exports=mincost;
